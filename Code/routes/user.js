const express = require("express");
const router = express.Router();
const controller = require("../controllers/userController");
const guestRoute = require("../middlewares/guestRoute");
const loggedRoute = require("../middlewares/loggedRoute");
const multer = require("../middlewares/multerConfig");
const upload = multer("users", "avatar");

const validate = require("../validators/users.js");

// Login
router.get("/login", guestRoute, controller.login);
router.post("/login", validate.loginForm, controller.processLogin);

// Logout
router.get("/logout", loggedRoute, controller.logout);

// Registro
router.get("/registro", guestRoute, controller.registro);
router.post(
  "/registro",
  guestRoute,
  upload.single("avatar"),
  validate.registerForm,
  controller.createUser
);

// Perfil
router.get("/", loggedRoute, controller.profile);

// Cambiar contraseña
router.post("/password", loggedRoute, controller.changePassword);

// Cambiar avatar
router.post("/avatar", loggedRoute, upload.single("avatar"), controller.changeAvatar);


module.exports = router;
