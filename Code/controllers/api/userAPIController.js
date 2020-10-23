const db = require("../../database/models");

module.exports = {
  listUsers: async (req, res) => {
    // Traigo los usuarios clientes de la base de datos
    let users = await getUsers(1);
    users.map((user) => {
      delete user.avatar;
      user.detail = "/api/user/" + user.id;
    });

    // Envío los clientes a la vista
    let respuesta = {
      meta: {
        status: 200,
        total: users.length,
      },
      data: users,
    };
    res.json(respuesta);
  },

  detail: async (req, res) => {
    let user = await db.user.findByPk(req.params.id);

    delete user.dataValues.password;
    delete user.dataValues.createdAt;
    delete user.dataValues.updatedAt;
    delete user.dataValues.deletedAt;
    if (user.dataValues.avatar == null) {
      user.dataValues.avatar = "/images/users/default.jpg";
    } else {
      user.dataValues.avatar = "/images/users/" + user.dataValues.avatar;
    }
    let respuesta = {
      meta: {
        status: 200,
      },
      data: user,
    };
    res.json(respuesta);
  },
};

async function getUsers(role_id) {
  // Traigo los usuarios de la base de datos
  let users = await db.user
    .findAll({
      attributes: ["id", "fname", "lname", "email", "avatar"],
      where: {
        role_id: role_id,
      },
      nest: true,
      raw: true,
    })
    .catch((e) => console.log(e));

  // Los devuelvo
  return users;
}
