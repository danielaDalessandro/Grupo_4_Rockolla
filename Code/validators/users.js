const {check} = require('express-validator');
const jsonDb = require('../db/jsonDb');
const usersModel = jsonDb('users');

module.exports = {
    registerForm: [
        check("nombre", "Verifique el nombre ingresado")
            .isLength({min: 2, max:50})
            .trim()
            .matches(/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/)
            .escape(),

        check("apellido", "Verifique el apellido ingresado")
            .isLength({min: 2, max:50})
            .matches(/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/)
            .trim()
            .escape(),

        check("email", "Por favor ingrese un correo válido")
            .isEmail()
            .normalizeEmail()
            .custom((value, {req}) => {
                let emailTaken = usersModel.findBy('email', value)
                if (emailTaken) {
                    return false;
                }
                else {
                    return true;
                }
            })
            .escape(),

        check("password", "La contraseña tiene que tener un mínimo de 8 caracteres")
            .isLength({min: 8})
            .matches(/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g)
            .escape(),
        
       check('passwordConfirm', 'Verifique que las contraseñas ingresadas coincidan')
            .custom((value, {req}) => (value === req.body.password)),

        check('avatar', 'Por favor verifique que el archivo sea JPG')
            .custom((value, {req}) => {
                if (req.file.mimetype === 'image/jpeg') {
                    return true;
                }
                return false;
            })
    ],

    loginForm: [
        check("email", 'Por favor verifique el correo ingresado')
            .isEmail()
            .normalizeEmail()
            .escape(),
    
        check("password", 'Por favor verifique el la contraseña ingresada')
            .isLength({min: 8})
            .matches(/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g)
            .escape(),
    ]    
}