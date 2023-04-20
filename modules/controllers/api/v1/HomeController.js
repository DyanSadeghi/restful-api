module.exports = new (class HomeController {
  index(req, res) {
    res.json("Welcome to  Api");
  }

  version(req, res) {
    res.json("version 1");
  }
})();
