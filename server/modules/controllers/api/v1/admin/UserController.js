const Controller = require(`${config.path.controller}/Controller`);
const UserTransform = require(`${config.path.transform}/v1/UserTransform`);

module.exports = new (class UserController extends Controller {
  index(req, res) {
    this.model.User.find({})
      .then((users) => {
        if (users) {
          res.json({
            data: new UserTransform().transformCollection(users),
          });
        } else {
          res.json({ message: "NO Users Found" });
        }
      })
      .catch((err) => {
        throw err;
      });
  }
})();
