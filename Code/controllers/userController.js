const db = require("../database/models");
const crypto = require("crypto")
const fs = require('fs');
const path = require('path');

const bcrypt = require("bcryptjs")

const { validationResult } = require("express-validator")

module.exports = {
    // Muestra la vista del Login 
    login: (req, res) => {
        res.render('./users/login');
    },

    // Muestra la vista del registro
    registro: (req, res) => {
        res.render('./users/registro');
    },

    // Procesa el login
    processLogin: (req, res) => {
        let errors = validationResult(req)
        // si no vinieron errores...
        if(errors.isEmpty()){
            // busco el usuario en la db
            let user = db.user.findOne({where : { email: req.body.email}})
            .then( async function (user) {
                // si el usuario existe y la contraseña es correcta
                if (user && bcrypt.compareSync(req.body.password, user.dataValues.password) ) {
                    // creo la sesion con el usuario
                    req.session.user = {
                        fname: user.dataValues.fname,
                        lname: user.dataValues.lname,
                        email: user.dataValues.email,
                        role: user.dataValues.role_id,
                        avatar: user.dataValues.avatar
                    }

                    // si desea permanecer logueado
                    if(req.body.recordar){
                       const token = crypto.randomBytes(64).toString("base64");
                        let newToken = await db.user_token.create({ 
                            user_id: user.id, 
                            token
                        })
                        .catch( e => console.log("TOKEN ERROR: \n", e));        

                        res.cookie("userToken", token, { maxAge: 1000 * 60 * 60 * 24 * 5})
                    }
                    // redirijo al inicio
                    res.redirect("/")
                }
                // si hay error en los valores ingresados
                else {
                    errors = {
                        login: 
                            {msg:'Por favor verifique los datos ingresados y vuelva a intentar'}
                    };
                    return res.render('./users/login', { errors });
                }
            })
            .catch( function (e){ console.log("ERROR LOGIN: \n", e)});            
        }
        // si vinieron errores... 
        else {
        res.render("./users/login", {errors:errors.mapped()})
    }
    },

    // Procesa el logout
    logout: (req, res) => {
        // Si hay token lo elimino de la db
        if(req.cookies && req.cookies.userToken){
            db.user_token.destroy({
                where: {
                    token: req.cookies.userToken
                }
            })
            .catch( e => console.log("COOKIE ERROR: \n", e));
        }

        // elimino la sesión del usuario        
        req.session.destroy();
        res.clearCookie("userToken");

        // redirijo al usuario al inicio
        return res.redirect('/');
    },

    // Crea nuevo usuario y devuelve al inicio con sesión iniciada
    createUser: (req, res) => {
        let errors = validationResult(req)
        // si no hay errores...
        if(errors.isEmpty()){
            // creo el nuevo usuario
            let newUser = {
                fname: req.body.nombre,
                lname: req.body.apellido,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 10),
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
                // creo la sesion con el usuario
                req.session.user = {
                    fname: user.dataValues.fname,
                    lname: user.dataValues.lname,
                    email: user.dataValues.email,
                    role: user.dataValues.role_id,
                    avatar: user.dataValues.avatar
                };
               // redirijo al inicio
               return res.redirect('/');
            })
            .catch( e => console.log("USER CREATE ERROR: ", e));
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
    },

    // Muestra la vista del perfil de usuario
    profile: (req, res) => {
        res.render('./users/profile');
    }
}