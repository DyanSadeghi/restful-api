const Controller = require(`${config.path.controller}/Controller`);
const { check, validationResult } = require("express-validator");


module.exports = new (class CourseController extends Controller {
    register(req,res){
       //* Validation

    }
    login(req,res){
        res.json('login')
    }

})();
