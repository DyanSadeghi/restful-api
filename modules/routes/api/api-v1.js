const express = require("express");
const { validateStore } = require("../../Validators/storeValidator");

const router = express.Router();

//*controllers
const { api: ControllerApi } = config.path.controllers;
const HomeController = require(`${ControllerApi}/v1/HomeController`);
const CourseController = require(`${ControllerApi}/v1/CourseController`);


//*AdminController
const AdminCourseController = require(`${ControllerApi}/v1/admin/CourseController`);

router.get("/", HomeController.index);
router.get('/courses',CourseController.index.bind(CourseController))
router.get("/version", HomeController.version);

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

router.use("/admin", adminRouter);

module.exports = router;
