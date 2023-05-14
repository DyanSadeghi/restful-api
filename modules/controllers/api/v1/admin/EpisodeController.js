const Controller = require(`${config.path.controller}/Controller`);
const Episode = require(`${config.path.model}/episode`);

module.exports = new (class EpisodeController extends Controller {
  index(req, res) {
    this.model.Episode.find({}).then((episodes) => {
      res.json(episodes);
    });
  }

  store(req, res) {
    let course = this.model.Course.findById(req.params.id, {}).then(
      (courses) => {
        let episode = new this.model.Episode({
          course: course._id,
          title: req.body.title,
          body: req.body.body,
          videoUrl: req.body.videoUrl,
          number: req.body.number,
        }).save();
        if (course.episodes) {
          course.episodes.push(episode._id);
        }

        // course.save();
        res.json("ویدیو با موفقیت ایجاد شد");
      }
    );
  }

  update(req, res) {
    // req.checkBody('id','آیدی وارده صحیح نمیباشد').isMongoId()
    this.model.Episode.findByIdAndUpdate(req.params.id, {
      title: "episode 1",
    }).then((episode) => {
      if (episode) {
        res.json("update success");
      }
    });
    res.status(404).json({ message: "چنین ویدیویی وجود ندارد" });
  }

  destroy(req, res) {
    this.model.Episode.findByIdAndRemove(req.params.id).populate('course').then((episode) => {
      if (episode) {
        
        let course = episode.course
        let pos = course.episodes.indexOf(episode._id)
        course.episodes.splice(pos,1)
        course.save()
        
        episode.remove()
        res.json("delete success");
        return
      }
      res.status(404).json({ message: "چنین ویدیویی وجود ندارد" });
    });
  }
})();
