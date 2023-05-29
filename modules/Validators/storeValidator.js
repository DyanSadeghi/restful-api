const { check, validationResult } = require("express-validator");

exports.validateStore = [
  check("title", "عنوان نمیتواند خال بماند").not().isEmpty(),
  check("body", "متن نمیتواند خال بماند").not().isEmpty(),
  check("price", "قیمت نمیتواند خالی بماند").not().isEmpty(),
  check("image", "تصویر نمیتواند خالی بماند").not().isEmpty(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];
