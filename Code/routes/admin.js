const express = require("express");
const router = express.Router();
const path = require("path")
const controller = require("../controllers/adminController");
const adminRoute = require("../middlewares/adminRoute");
const multer = require("../middlewares/multerConfig");
const upload = multer("users", "avatar");

const validate = require("../validators/users.js");

router.get("/", adminRoute, controller.dashboard);

router.get("/dashboard", adminRoute, (req, res)=> res.sendFile(path.join(__dirname, "..", "public", "admin", "index.html")));

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
