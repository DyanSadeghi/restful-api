const Controller = require(`${config.path.controller}/Controller`);

module.exports = new (class CourseController extends Controller {
  index(req, res) {
    this.model.Course.find({}).then((courses) => {
        // res.json({message: 'hi matin'})
      res.json({
        data: courses.map((course) => {
          return {
            title: course.title,
            body: course.body,
            price: course.price,
          };
        }),
      });
    });
  }
})();
