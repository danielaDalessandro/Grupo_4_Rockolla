/**
 * Middleware para el manejo de la cantidad de productos en carrito
 * verifica si el usuario tiene carrito, si lo tiene le pasa
 * a la vista esa información de req.session.cart en locals.cart
 */

module.exports = (req, res, next) => {
  // si el usuario tiene sesión iniciada
  if (req.session.cart) {
    // le paso sus datos a la vista
    res.locals.cart = req.session.cart;
  }
  next();
};
