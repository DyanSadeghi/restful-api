//*model
const Controller = require(`${config.path.controller}/Controller`);
const Course = require(`${config.path.model}/course`);

const { check, validationResult } = require("express-validator");

module.exports = new (class CourseController extends Controller {
  index(req, res) {
    this.model.Course.find({}).then((courses) => {
      res.json(courses);
    });
  }
  store(req, res) {

    let newCourse = new this.model.Course({
      title: req.body.title,
      body: req.body.body,
      price: req.body.price,
      image: req.body.image,
    }).save();
    res.json("created course");
  }
  update(req, res) {
    // req.checkBody('id','آیدی وارده صحیح نمیباشد').isMongoId()
    this.model.Course.findByIdAndUpdate(req.params.id, {
      title: "course three",
    }).then((courses) => {
      res.json("update success");
    });
  }

  destroy(req, res) {
    this.model.Course.findByIdAndRemove(req.params.id).then((courses) => {
      res.json("delete success");
    });
  }
})();
