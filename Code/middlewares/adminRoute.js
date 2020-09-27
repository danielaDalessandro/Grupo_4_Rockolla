/*
#   Middleware de ruta para gestionar las rutas que son solo para usuarios administradores
*/

module.exports = function(req, res, next){
    // Si el usuario está logueado y es administrador...
    if(req.session.user && req.session.user.role==2){
        next(); // le permito continuar
    } else {
        res.render("./404"); // le muestro error 404
    }
}