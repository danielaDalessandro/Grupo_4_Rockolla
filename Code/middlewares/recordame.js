/**
 * Middleware para la autenticación de usuarios del sitio
 * verifica si el usuario tiene un token de autenticación
 * si lo tiene lo loguea y le da a la vista su información
 * de req.session y locals.user
 */

const db = require("../database/models");

recordameMiddleware = async function(req, res, next){
    // Verifico si el usuario tiene cookies y no sesión
    if(req.cookies.userToken && !req.session.user){
        // Busco el token en la base de datos
        let token = await db.user_token.findOne({
            where: { 
                token: req.cookies.userToken
            } 
        })
        .catch( e => console.log("TOKEN ERROR: \n", e));
        
        // Si encuentro el token 
        if (token) {
            // Busco el usuario en la base de datos
            let user = await db.user.findByPk(token.user_id, {raw:true})
            .catch( e => console.log("USER ERROR: \n", e));
            
            // Si encuentro el usuario
            if(user){
                // Elimino lo que no quiero mandar a la vista
                delete user.password;
                delete user.createdAt;
                delete user.updatedAt;
                delete user.deletedAt;

                // Creo la sesión y mando datos a la vista
                req.session.user = user;
                res.locals.user = user;
            } 
            // si no encuentro el usuario
            else { 
                // Borro la cookie del navegador del usuario
                res.clearCookie("usersTokens")
            }
        }
    }
    // Continuo con el proximo Middleware
    next()
}

module.exports = recordameMiddleware