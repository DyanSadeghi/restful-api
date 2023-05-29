const Controller = require(`${config.path.controller}/Controller`);
const CourseTransform = require(`${config.path.transform}/v1/CourseTransform`);

module.exports = new (class CourseController extends Controller {
  index(req, res) {

    // this.model.Course.find({})
    //   .populate("episodes")
    //   .exec()
    //   .then((courses) => {
    //     if (courses) {
    //       res.json({
    //         data: new CourseTransform()
    //           .withEpisodes()
    //           .transformCollection(courses),
    //       });
    //     }else{

    //       res.json({
    //         message: "Course empty",
    //         success: false,
    //       });

    //     }
    //   })
    //   .catch((err) => {
    //     if (err) throw err;
    //   });
    const page = req.query.page || 1
    this.model.Course.paginate({},{page, limit:2, populate : ['episodes']}).then(result =>{
          if (result) {
            res.json({
              // data:{
              //   items : new CourseTransform().withEpisodes().transformCollection(result.docs),
              //   total : result.total,
              //   limit : result.limit,
              //   page : result.page,
              //   pages : result.pages

              // } 
              data: new CourseTransform().withPaginate().transformCollection(result)
            });
          }else{
            res.json({
              message: "Course empty",
              success: false,
            });
          }
    }).catch(err => console.log(err))
  }
})();
