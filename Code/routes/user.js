const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const path = require('path');

//multer para trabajar con archivos
const multer = require('multer');
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/images/users'),
    filename: (req, file, callback) => {
        callback(null, 'avatar-' + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({ storage })

const validate = require('../validators/users.js');

router.get('/login', controller.login);
router.post('/login', validate.loginForm, controller.processLogin);

router.get('/registro', controller.registro);
router.post('/registro', upload.single('avatar') , validate.registerForm, controller.createUser);

module.exports = router;