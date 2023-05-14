//*model
const Course = require(`${config.path.model}/course`);
const Episode = require(`${config.path.model}/episode`);

module.exports = class Controller {
  constructor() {
    this.model = { Course , Episode};
  }

  


};
