const Controller = require(`${config.path.controller}/Controller`);
const CourseTransform = require(`${config.path.transform}/v1/CourseTransform`);
const jwt = require("jsonwebtoken");

module.exports = new (class CourseController extends Controller {
  index(req, res) {
    let token =
      req.body.token || req.query.token || req.headers["x-access-token"];

    if (token) {
      return jwt.verify(token, config.secret, (err, decode) => {
        if (err) {
          res.json({ message: "failed to Authenticate token" });
        }
        console.log(decode.user_id);
        this.model.Course.find({ user: decode.user_id })
          .populate("episodes")
          .then((result) => {
            if (result) {
              res.json({
                data: new CourseTransform()
                  .withEpisodes()
                  .transformCollection(result),
              });
            } else {
              res.json({
                message: "Course empty",
                success: false,
              });
            }
          })
          .catch((err) => console.log(err));
      });
    } else {
      res.json({ message: "No Token Provided" });
    }
  }
  single(req, res) {
    this.model.Course.findById(req.params.id)
      .populate("episodes")
      // .exec()
      .then((course) => {
        if (course) {
          res.json({
            data: new CourseTransform().withEpisodes().transform(course),
            success: true,
          });
        } else {
          res.json({ message: "no course found" });
        }
      })
      .catch((err) => {
        if (err) throw err;
      });
  }
})();
