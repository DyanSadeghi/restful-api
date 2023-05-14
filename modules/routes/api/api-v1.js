const express = require("express");
const { validateEpisode } = require("../../Validators/episodevalidator");
const { validateStore } = require("../../Validators/storeValidator");

const router = express.Router();

//*controllers
const { api: ControllerApi } = config.path.controllers;
const HomeController = require(`${ControllerApi}/v1/HomeController`);
const CourseController = require(`${ControllerApi}/v1/CourseController`);
const AuthController = require(`${ControllerApi}/v1/AuthController`);



//*AdminController
const AdminCourseController = require(`${ControllerApi}/v1/admin/CourseController`);
const AdminEpisodeController = require(`${ControllerApi}/v1/admin/EpisodeController`);
// console.log(AdminEpisodeController)

router.get("/", HomeController.index);
router.get('/courses',CourseController.index.bind(CourseController))
router.get("/version", HomeController.version);
router.post("/login", AuthController.login.bind(AuthController));
router.post('/register',AuthController.register.bind(AuthController))



































const adminRouter = express.Router();
adminRouter.get(
  "/courses",
  AdminCourseController.index.bind(AdminCourseController)
);

adminRouter.post(
  "/courses",
  validateStore,
  AdminCourseController.store.bind(AdminCourseController)
);

adminRouter.put("/courses/:id", AdminCourseController.update);

adminRouter.delete("/courses/:id", AdminCourseController.destroy);


adminRouter.get(
  "/episodes",
  AdminEpisodeController.index.bind(AdminEpisodeController));

adminRouter.post(
  "/episodes",
  validateEpisode,
  AdminEpisodeController.store.bind(AdminEpisodeController)
);

adminRouter.put("/episodes/:id", AdminEpisodeController.update.bind(AdminEpisodeController));

adminRouter.delete("/episodes/:id", AdminEpisodeController.destroy.bind(AdminEpisodeController));

router.use("/admin", adminRouter);

module.exports = router;
