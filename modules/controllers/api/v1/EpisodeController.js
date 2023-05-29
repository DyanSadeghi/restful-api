const Controller = require(`${config.path.controller}/Controller`);
const EpisodeTransform = require(`${config.path.transform}/v1/EpisodeTransform`);

module.exports = new (class EpisodeController extends Controller {
  single(req, res) {
    this.model.Episode.findById(req.params.id)
      .populate("course")
      .exec()
      .then((episode) => {
        if (episode) {
          res.json({
            data: episode,
          });
        } else {
          res.json({
            data: new EpisodeTransform().transform(episode),
            success: false,
          });
        }
      })
      .catch((err) => {
        if (err) throw err;
      });
  }
})();
