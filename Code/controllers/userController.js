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
        if(errors.isEmpty()){
        let user = usersModel.findBy('email', req.body.email);
        if (!user) {
            errors.msg = "Hola"
            console.log(errors)
            return res.render('./users/login', {errors: errors.errors});
        }

        if (bcrypt.compareSync(req.body.password, user.password) ) {
            delete user.password
            req.session.user = user
            res.redirect("/")
        }
        else {
            return res.send('Failed');
        }
    } else {
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