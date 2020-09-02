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
            return res.redirect('/user/login');
        }

        if (bcrypt.compareSync(req.body.password, user.password) ) {
            return res.send('Succes');
        }
        else {
            return res.send('Failed');
        }
    }
    },


    createUser: (req, res) => {
        let newUser = {
            fname: req.body.nombre,
            lname: req.body.apellido,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            avatar: req.file.filename
        }

        usersModel.createRow(newUser);
        return res.redirect('/user/login');
    }
}