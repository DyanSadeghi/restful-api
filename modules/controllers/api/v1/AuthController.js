const Controller = require(`${config.path.controller}/Controller`);
const UserTransform = require(`${config.path.transform}/v1/UserTransform`);

const { check, validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

module.exports = new (class CourseController extends Controller {
  register(req, res) {
    //* Validation
    let newUser = new this.model.User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
      .save()
      .then(() => {
        res.json("user registered");
      })
      .catch((err) => {
        if (err.code === 11000) {
          res.json("ایمیل تکراری");
        } else {
          res.json(err);
        }
      });
  }
  login(req, res) {
    this.model.User.findOne({ email: req.body.email })
      .then((user) => {
        if (user == null)
          return res.status(422).json({ message: "اطلاعات وارده صحیح نیست" });
        bcrypt.compare(req.body.password, user.password, (err, status) => {
          if (!status) {
            return res.status(422).json({ message: "گذرواژه صحیح نمیباشد" });
          }
          return res.json({
            data: new UserTransform().transform(user,true),
            success: true,
          });
        });
      })
      .catch((err) => {
        res.json(err);
      });
  }
})();
