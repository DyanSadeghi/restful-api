const { check, validationResult } = require("express-validator");

exports.validateLogin = [
  
  check("email", "ایمیل نمیتواند خال بماند").not().isEmpty(),
  check("password", "گذرواژه نمیتواند خالی بماند").not().isEmpty(),
 

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];
