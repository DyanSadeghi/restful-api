const { check, validationResult } = require("express-validator");

exports.validateEpisode = [
  check("title", "عنوان نمیتواند خال بماند").not().isEmpty(),
  check("body", "متن نمیتواند خال بماند").not().isEmpty(),
  check("course_id", "آیدی نمیتواند خالی بماند").not().isEmpty(),
  check("videoUrl", "آدرس ویدیو نمیتواند خالی بماند").not().isEmpty(),
  check("number", "شماره ویدیو نمیتواند خالی بماند").not().isEmpty(),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];
