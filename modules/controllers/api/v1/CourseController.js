const Controller = require(`${config.path.controller}/Controller`);
const CourseTransform = require(`${config.path.transform}/v1/CourseTransform`);

module.exports = new (class CourseController extends Controller {
  index(req, res) {
    this.model.Course.find({}).then((courses) => {
      // res.json({message: 'hi matin'})
      if (courses) {
        res.json({
          data: new CourseTransform().transformCollection(courses),
        });
      }
      res.json({
        message: "Course empty",
        success: false,
      });
    });
    this.model.Course.findOne();
  }
})();
