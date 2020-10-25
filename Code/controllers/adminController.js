const db = require("../database/models");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

module.exports = {
  dashboard: (req, res) => {
    res.render("./admin/dashboard");
  },

  listUsers: async (req, res) => {
    // Traigo los usuarios clientes de la base de datos
    let users = await getUsers(1);
    // Envío los clientes a la vista
    res.render("./admin/list", { users });
  },

  listAdmins: async (req, res) => {
    // Traigo los usuarios de la base de datos
    let users = await getUsers(2);

    // Envío los clientes a la vista
    res.render("./admin/list", { users });
  },

  viewCreateAdmin: (req, res) => {
    // Envío la vista
    res.render("./admin/create");
  },

  createAdmin: async (req, res)=> {
      let errors = validationResult(req)
      // si no hay errores...
      if(errors.isEmpty()){
        console.log("it works\n\n")
          // creo el nuevo usuario
          let newUser = {
              fname: req.body.nombre,
              lname: req.body.apellido,
              email: req.body.email,
              password: bcrypt.hashSync(req.body.password, 10),
              role_id:2
              }
          // si subio un avatar
          if (req.file && req.file.filename){
              newUser.avatar = req.file.filename;
          }
          // si no le asigno uno por defecto
          else { 
              newUser.avatar = 'default.jpg';
          }
          // lo guardo en db
          db.user.create( newUser )
          .then( (user) => {
             // redirijo al inicio
             return res.redirect('/');
          })
          .catch( e => console.log("ADMIN CREATE ERROR: ", e));
      } 
      else { // si hay errores..
          // elimino el archivo que se subió
          if (req.file) {
              fs.unlink(req.file.path, ()=>{
                  // retorno los errores en la misma vista
                  res.render("./users/registro", {errors:errors.mapped(), values: req.body});
              });
          } else {
              // si no hay archivo retorno los errores en la misma vista
              res.render("./users/registro", {errors:errors.mapped(), values: req.body});
          }
      }
  }
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
