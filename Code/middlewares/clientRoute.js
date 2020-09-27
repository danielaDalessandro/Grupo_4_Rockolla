/*
#   Middleware de ruta para gestionar las rutas que son solo para usuarios clientes
*/

module.exports = function(req, res, next){
    // Si el usuario es adinistrador...
    if(req.session.user && req.session.user.role==2){
        res.render("./404"); // le muestro error 404
    } else {
        next(); // sino le permito continuar
    }
}