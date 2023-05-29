const path = require('path')

module.exports = {
  port: 3000,
  secret: 'matin@dyan@matin',

  path: {
    controllers: {
      api: path.resolve("./modules/controllers/api"),
      web: path.resolve("./modules/controllers/web"),
    },
    model: path.resolve("./modules/models"),
    transform : path.resolve('./modules/transforms'),
    controller: path.resolve('./modules/controllers'),
  },
};
