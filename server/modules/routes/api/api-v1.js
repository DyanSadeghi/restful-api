const express = require("express");
const { validateEpisode } = require("../../Validators/episodevalidator");
const { validateStore } = require("../../Validators/storeValidator");
const { validateRegister } = require("../../Validators/registerValidation");
const { validateLogin } = require("../../Validators/loginValidation");

const router = express.Router();
//*middlewares
const apiAuth = require("./middleware/apiAuth");
const apiAdmin = require("./middleware/apiAdmin");
const { uploadImage } = require("./middleware/UploadMiddleware");

//*controllers
const { api: ControllerApi } = config.path.controllers;
const HomeController = require(`${ControllerApi}/v1/HomeController`);
const CourseController = require(`${ControllerApi}/v1/CourseController`);
const EpisodeController = require(`${ControllerApi}/v1/EpisodeController`);
const AuthController = require(`${ControllerApi}/v1/AuthController`);
const UserController = require(`${ControllerApi}/v1/UserController`);

//*AdminController
const AdminCourseController = require(`${ControllerApi}/v1/admin/CourseController`);
const AdminEpisodeController = require(`${ControllerApi}/v1/admin/EpisodeController`);
const AdminUserController = require(`${ControllerApi}/v1/admin/UserController`);
// console.log(AdminEpisodeController)

router.get("/", HomeController.index);
router.get("/courses", CourseController.index.bind(CourseController));
router.get("/version", HomeController.version);
router.post("/login", validateLogin, AuthController.login.bind(AuthController));
router.post(
  "/register",
  validateRegister,
  AuthController.register.bind(AuthController)
);
router.get("/user", apiAuth, UserController.index.bind(UserController));
router.get("/courses/:id", CourseController.single.bind(CourseController));

router.post(
  "/user/image",
  apiAuth,
  uploadImage.single("image"),
  UserController.uploadImage.bind(UserController)
);

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

adminRouter.put(
  "/courses/:id",
  AdminCourseController.update.bind(AdminCourseController)
);

adminRouter.delete(
  "/courses/:id",
  AdminCourseController.destroy.bind(AdminCourseController)
);

adminRouter.get(
  "/episodes/:id",
  AdminEpisodeController.index.bind(AdminEpisodeController)
);

adminRouter.post(
  "/episodes",
  validateEpisode,
  AdminEpisodeController.store.bind(AdminEpisodeController)
);

adminRouter.put(
  "/episodes/:id",
  AdminEpisodeController.update.bind(AdminEpisodeController)
);

adminRouter.delete(
  "/episodes/:id",
  AdminEpisodeController.destroy.bind(AdminEpisodeController)
);
adminRouter.get("/users", AdminUserController.index.bind(AdminUserController));

router.use("/admin", apiAuth, apiAdmin, adminRouter);

module.exports = router;
