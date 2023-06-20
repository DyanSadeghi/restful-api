const Controller = require(`${config.path.controller}/Controller`);
const EpisodeTransform = require(`${config.path.transform}/v1/EpisodeTransform`);

module.exports = new (class EpisodeController extends Controller {
  index(req, res) {
    this.model.Episode.find({ course: req.params.id })
      .then((result) => {
        if (result) {
          res.json({
            data: new EpisodeTransform().transformCollection(result),
          });
        }
      })
      .catch((err) => console.log(err));
  }

  store(req, res) {
    this.model.Course.findById(req.body.course_id, {}).then((currentCourse) => {
      let episode = new this.model.Episode({
        course: currentCourse._id,
        title: req.body.title,
        body: req.body.body,
        videoUrl: req.body.videoUrl,
        number: req.body.number,
      });
      episode.save();
      if (currentCourse.episodes) {
        console.log(episode);
        currentCourse.episodes.push(episode._id);
        currentCourse.save();
        res.json("ویدیو با موفقیت ایجاد شد");
      }
    });
  }

  update(req, res) {
    // req.checkBody('id','آیدی وارده صحیح نمیباشد').isMongoId()
    this.model.Episode.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
    }).then((episode) => {
      if (episode) {
        res.json("update success");
      } else {
        res.status(404).json({ message: "چنین ویدیویی وجود ندارد" });
      }
    });
  }

  destroy(req, res) {
    this.model.Episode.findByIdAndRemove(req.params.id)
      .populate("course")
      .then((episode) => {
        if (episode) {
          let course = episode.course;

          let pos = course.episodes.indexOf(episode._id);
          course.episodes.splice(pos, 1);
          course.save();

          episode.deleteOne({ _id: episode._id });
          res.json("delete success");
        } else {
          res.status(404).json({ message: "چنین ویدیویی وجود ندارد" });
        }
      });
  }
})();
