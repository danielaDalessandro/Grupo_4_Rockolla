/**
 * Middleware para la autenticación de usuarios del sitio
 * verifica si el usuario esta logueado, y pone a disposición
 * de la vista su información de req.session en locals.user
 */

module.exports = (req, res, next) => {
  // si el usuario tiene sesión iniciada
  if (req.session.user) {
    // le paso sus datos a la vista
    res.locals.user = req.session.user;
  }
  next();
};
