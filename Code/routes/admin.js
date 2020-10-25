const express = require("express");
const router = express.Router();
const controller = require("../controllers/adminController");
const adminRoute = require("../middlewares/adminRoute");
const multer = require("../middlewares/multerConfig");
const upload = multer("users", "avatar");

const validate = require("../validators/users.js");

router.get("/", adminRoute, controller.dashboard);

router.get("/users", adminRoute, controller.listUsers);

router.get("/list", adminRoute, controller.listAdmins);

router.get("/create", adminRoute, controller.viewCreateAdmin);
router.post(
  "/create",
  adminRoute,
  upload.single("avatar"),
  validate.registerForm,
  controller.createAdmin
);

module.exports = router;
