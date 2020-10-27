/*
#   Middleware de ruta para gestionar las rutas que son solo para visitantes
*/

module.exports = function (req, res, next) {
  // Si el usuario está logueado...
  if (req.session.user) {
    res.redirect("/"); // lo devuelvo al inicio
  } else {
    next(); // si no, puede continuar
  }
};
