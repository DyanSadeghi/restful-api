module.exports = (req, res, next) => {
  if (req.user.type == "admin") {
    next();
    return;
  }
  return res.status(403).json({
    message: " شما نمیتوانید به این روت دسترسی داشته باشید",
    success: false,
  });
};
