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

const {check} = require("express-validator")

router.get('/login', controller.login);
router.post('/login',[
    check("email")
        .notEmpty().withMessage("Porfavor ingrese un email").bail()
        .isEmail().withMessage("Debe completar un email válido"),

    check("password")
        .notEmpty().withMessage("Por favor ingrese una contraseña").bail()
        .isLength({min: 8}).withMessage("La contraseña tiene que tener un mínimo de 8 caracteres").bail()
        .isAlphanumeric().withMessage("La contraseña debe estar compuesta de mayúsculas y minúsuculas").bail()
], controller.processLogin);

router.get('/registro', controller.registro);
router.post('/registro',[
    check("nombre")
        .notEmpty().withMessage("Debe completar un nombre válido").bail()
        .isAlpha().withMessage("Este campo solo puede estar compuesto por letras"),
    check("apellido")
        .notEmpty().withMessage("Debe completar un apellido válido").bail()
        .isAlpha().withMessage("Este campo solo puede estar compuesto por letras"),
    check("email")
        .notEmpty().withMessage("Por favor ingrese un email").bail()
        .isEmail().withMessage("Debe completar un email válido"),

    check("password")
        .notEmpty().withMessage("Por favor ingrese una contraseña").bail()
        .isLength({min: 8}).withMessage("La contraseña tiene que tener un mínimo de 8 caracteres").bail()
        .isAlphanumeric().withMessage("La contraseña debe estar compuesta de mayúsculas y minúsuculas"),
], upload.single('avatar') , controller.createUser);

module.exports = router;