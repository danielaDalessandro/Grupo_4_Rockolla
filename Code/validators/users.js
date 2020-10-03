const {check} = require('express-validator');
const db = require("../database/models");

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
            .custom(async (value, {req}) => {
                await db.user.findOne({
                    where: {
                        email: value
                    }
                })
                .then( (user) => {
                    if(user){
                        return false;
                    }
                    else {
                        return true;
                    }
                })
                .catch( e => console.log("EMAIL ERROR: \n", e));
            })
            .escape(),

        check("password", "La contraseña tiene que tener un mínimo de 8 caracteres")
            .isLength({min: 7})
            .escape(),
        
       check('passwordConfirm', 'Verifique que las contraseñas ingresadas coincidan')
            .custom((value, {req}) => (value === req.body.password))

        /* check('avatar', 'Por favor verifique que el archivo sea JPG')
            .custom((value, {req}) => {
                if (req.file.mimetype === 'image/jpeg') {
                    console.log(req.file);
                    return true;
                }
                else {
                    console.log(req.file);
                }
                return false;
            }) */
    ],

    loginForm: [
        check("email", 'Por favor verifique el correo ingresado')
            .isEmail()
            .normalizeEmail()
            .escape(),
    
        check("password", 'Por favor verifique el la contraseña ingresada')
            .isLength({min: 7})
            .escape(),
    ]    
}