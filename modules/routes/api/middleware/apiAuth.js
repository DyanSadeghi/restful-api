const jwt = require("jsonwebtoken");
const User = require(`${config.path.model}/user`);

module.exports = (req, res, next) => {
  let token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  console.log(token);
  if (token) {
    return jwt.verify(token, config.secret, (err, decode) => {
      if (err) {
        res.json({ message: "failed to Authenticate token" });
      }
      User.findById(decode.user_id)
        .then((user) => {
          if (user) {
            user.token = token;
            req.user = user;
            next();
            //   return
          } else {
            res.json({ message: "User not found" });
          }
        })
        .catch((err) => {
          throw err;
        });
    });

    // next()
    // return
  }
  return res.status(403).json({ message: "No Provided" });
};
