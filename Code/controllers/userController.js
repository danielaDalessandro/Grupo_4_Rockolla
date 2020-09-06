const jsonDb = require('../db/jsonDb');

const usersModel = jsonDb('users');

const bcrypt = require("bcryptjs")

const { validationResult } = require("express-validator")

module.exports = {
    login: (req, res) => {
        res.render('./users/login');
    },

    registro: (req, res) => {
        res.render('./users/registro');
    },

    processLogin: (req, res) => {
        let errors = validationResult(req)
        // si no vinieron errores...
        if(errors.isEmpty()){
            // busco el usuario en la db
            let user = usersModel.findBy('email', req.body.email);

            // si el usuario existe y la contraseña es correcta
            if (user && bcrypt.compareSync(req.body.password, user.password) ) {
                // elimino la contraseña que vino en el req
                delete user.password
                // creo la sesion con el usuario
                req.session.user = user
                // redirijo al inicio
                res.redirect("/")
            }
            // si hay error en los valores ingresados
            else {
                errors = {
                    login: 
                        {msg:'Por favor verifique los datos ingresados y vuelva a intentar'}
                };
                return res.render('./users/login', { errors });
            }
        }
        // si vinieron errores... 
        else {
        console.log(errors.mapped())
        res.render("./users/login", {errors:errors.mapped()})
    }
    },


    createUser: (req, res) => {
        let errors = validationResult(req)
        if(errors.isEmpty()){
        let newUser = {
            fname: req.body.nombre,
            lname: req.body.apellido,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            avatar: req.file.filename
            }

        usersModel.createRow(newUser);
        return res.redirect('/');
        
        } else {
            res.render("./users/registro", {errors:errors.mapped()}) 
        }
    }
}