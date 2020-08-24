const jsonDb = require('../db/jsonDb');

const userModel = jsonDb('users');

module.exports = {
    dashboard: (req, res) => {
        res.render('./admin/dashboard');
    },

    listUsers: (req, res) => {
        let users = userModel.readAll();
        res.render('./admin/list', { users });
    }
}