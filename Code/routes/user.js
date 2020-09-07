const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const path = require('path');
const guestRoute = require("../middlewares/guestRoute")
const loggedRoute = require("../middlewares/loggedRoute")
const multer = require('../middlewares/multerConfig');
const upload = multer('users');


const validate = require('../validators/users.js');

router.get('/login', guestRoute, controller.login);
router.post('/login', validate.loginForm, controller.processLogin);

router.get('/logout', loggedRoute, controller.logout);

router.get('/registro', controller.registro);
router.post('/registro', upload.single('avatar') , validate.registerForm, controller.createUser);

module.exports = router;