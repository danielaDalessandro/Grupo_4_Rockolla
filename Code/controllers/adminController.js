const db = require("../database/models");

module.exports = {
    dashboard: (req, res) => {
        res.render('./admin/dashboard');
    },

    listUsers: (req, res) => {
/*         let users = userModel.readAll();
        res.render('./admin/list', { users }); */
    }
}