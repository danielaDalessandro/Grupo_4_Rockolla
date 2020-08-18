const jsonDb = require('../db/jsonDb');

const usersModel = jsonDb('users');

module.exports = {
    login: (req, res) => {
        res.render('./users/login');
    },

    registro: (req, res) => {
        res.render('./users/registro');
    },

    processLogin: (req, res) => {
        let user = usersModel.findBy('email', req.body.email);
        if (!user) {
            return res.redirect('/user/login');
        }

        if (user.password == req.body.password) {
            return res.send('Succes');
        }
        else {
            return res.send('Failed');
        }
    },

    createUser: (req, res) => {
        let newUser = {
            fname: req.body.nombre,
            lname: req.body.apellido,
            email: req.body.email,
            password: req.body.password
        }
        usersModel.createRow(newUser);
        return res.redirect('/user/login');
    }
}