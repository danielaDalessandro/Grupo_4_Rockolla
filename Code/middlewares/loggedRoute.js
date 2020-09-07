/*
#   Middleware de ruta para gestionar las rutas que son solo para usuarios logueados
*/

module.exports = function(req, res, next){
    // Si el usuario está logueado...
    if(req.session.user){
        next(); // le permito continuar
    } else {
        res.redirect("/user/login"); // si no, lo redirijo al login
    }
}