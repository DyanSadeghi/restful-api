//*model
const Controller = require(`${config.path.controller}/Controller`);
const Course = require(`${config.path.model}/course`);

const { check, validationResult } = require("express-validator");

module.exports = new (class CourseController extends Controller {
  index(req, res) {
    this.model.Course.find({}).then((courses) => {
      res.json({ data: courses });
    });
  }
  store(req, res) {
    let newCourse = new this.model.Course({
      user: req.body.user.id,
      title: req.body.title,
      body: req.body.body,
      price: req.body.price,
      image: req.body.image,
    });
    newCourse.save();
    req.user.courses.push(newCourse._id);
    req.user.save();

    res.json(newCourse);
  }
  update(req, res) {
    // req.checkBody('id','آیدی وارده صحیح نمیباشد').isMongoId()
    console.log(this);
    this.model.Course.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
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
