const db = require("../database/models");

module.exports = {
    dashboard: (req, res) => {
        res.render('./admin/dashboard');
    },

    listUsers: async (req, res) => {
        // Traigo los usuarios clientes de la base de datos
        let users = await getUsers(1);
        console.log(users);
        // Envío los clientes a la vista
        res.render('./admin/list', { users });
    },

    listAdmins: async (req, res) => {
        // Traigo los usuarios de la base de datos
        let users = await etUsers(2);
        
        // Envío los clientes a la vista
        res.render('./admin/list', { users });
    }
}

async function getUsers(role_id){
    // Traigo los usuarios de la base de datos
    let users = await db.user.findAll({
        attributes: [
            'id',
            'fname',
            'lname',
            'email',
            'avatar'
        ],
        where: {
            role_id: role_id
        },
        nest:true,
        raw:true
    })
    .catch( e=> console.log(e));
    
    // Los devuelvo
    return users;
}