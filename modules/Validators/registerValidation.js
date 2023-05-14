const { check, validationResult } = require("express-validator");

exports.validateRegister = [
  check("name", "نام نمیتواند خال بماند").not().isEmpty(),
  check("email", "ایمیل نمیتواند خال بماند").not().isEmpty(),
  check("password", "گذرواژه نمیتواند خالی بماند").not().isEmpty(),
  check("email", "فرمت ایمیل وارد شده صحیح نیست").not().isEmail(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];
