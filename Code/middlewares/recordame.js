const jsonDb = require('../db/jsonDb');
const usersModel = jsonDb('users');
const usersTokenModel = jsonDb("usersTokens");

recordameMiddleware = function(req, res, next){
    
    if(req.cookies.userToken && !req.session.user){
        let userToken = usersTokenModel.findBy("token", req.cookies.userToken)

        if(userToken){
            let user = usersModel.findById(userToken.userId)
        
        if(user){
            delete user.password
            req.session.user = user
            res.locals.user = user
        } 
        } else { 
            res.clearCookie("usersTokens")
        }

    }
    
    next()
    
}

module.exports = recordameMiddleware