const jsonDb = require("../db/jsonDb");

const productsModel = jsonDb("products");
const db = require("../database/models");
const Sequelize = require('sequelize');
const { Op } = require("sequelize");


module.exports = {
    list: (req, res) => {
        let products = db.product.findAll({
            attributes: [
                'id',
                'cover',
                'title',
                'price',
                [Sequelize.col('artist.name'), 'artist']
            ],
            include : [
                "artist"
            ],
            raw: true
        }
        );
        products.then(function(products){
            return res.render("./products/list", { products: products });
        })
    },
    
    viewCreate: (req, res) => {
        res.render("./products/create");
    },

    create: (req, res) => {
        let request = req.body;

        // verifico si existe el artista
        let artist = db.artist.findOne({where : { name : request.artista}})
        .then( function(response) {
            if (response == null) {
                return db.artist.create({
                    name: request.artista
                 });
            }
            else {
                return response;
            }
        })
        .catch( e =>{console.log('artist create error: ', e)});

        // verifico si existe el sello
        let label = db.label.findOne({where : { name : request.sello}})
        .then( function(response) {
            if (response == null) {
                return db.label.create({
                    name: request.sello 
                 });
            }
            else {
                return response;
            }
        })
        .catch( e =>{console.log('label create error: ', e)});

        // verifico si existe el genero
        let genre = db.genre.findOne({where : { name : request.genero}})
        .then( function(response) {
            if (response == null) {
                return db.genre.create({
                    name: request.genero 
                 });
            }
            else {
                return response;
            }
        })
        .catch( e =>{console.log('genre create error: ', e)});

        // verifico si existe el formato
        let format = db.format.findOne({where : { 
            name : request.formato, 
            diameter: request.pulgadas,
            rpm: request.rpm
        }})
        .then( function(response) {
            if (response == null) {
                return db.format.create({
                    name: request.formato,
                    diameter: request.pulgadas,
                    rpm: request.rpm
                 });
            }
            else {
                return response;
            }
        })
        .catch( e =>{console.log('format create error: ', e)});

        // Una vez resuelto todo, creo el producto
        Promise.all([artist, label, genre, format])
        .then( function (result){
            return newProduct = db.product.create(          
                {title: request.titulo,
                artist_id: result[0].dataValues.id,
                label_id: result[1].dataValues.id,
                genre_id: result[2].dataValues.id,
                publish_date: request.fechaPublicacion,
                cover: req.file.filename,
                format_id: result[3].dataValues.id,
                price: request.precio,
                description: request.descripcion,
                stock: request.stock
                }
            ).then( function (newProduct){
                res.redirect("/products/" + newProduct.id);
            })
        })
    },
    
    viewEdit: (req, res) => {
        db.product.findByPk(req.params.id, {
            include : ["format", 
                "artist",
                "label",
                "genre"
            ]
        })
        .then(function (product){
            if (product) {
                let productToEdit = {
                    id: product.dataValues.id,
                    title: product.dataValues.title,
                    artist: product.artist.dataValues.name,
                    cover: product.dataValues.cover,
                    label: product.label.dataValues.name,
                    genre: product.genre.dataValues.name,
                    price: product.dataValues.price,
                    stock: product.dataValues.stock,
                    format: product.format.dataValues.name,
                    rpm: product.format.dataValues.rpm,
                    diameter: product.format.dataValues.diameter,
                    publishDate: product.dataValues.publishing_date,
                    description: product.dataValues.description
                }
                res.render("./products/edit", { product: productToEdit });
            } else {
                res.render("./404");
            }
        })
        .catch( e => {console.log(e);})
    },
    
    edit: (req, res) => {
        let editedProduct = {
            id: req.params.id,
            title: req.body.titulo,
            price: req.body.precio,
            publish_date: req.body.fechaPublicacion,
            description: req.body.descripcion,
            cover: req.file.filename,
            stock: req.body.stock,
            format: req.body.formato,
            diameter: req.body.pulgadas,
            rpm: req.body.rpm,
            artist: req.body.artista,
            label: req.body.sello,
            genre: req.body.genero
        };
        db.product.findByPk(query, {
            include: [
                "format", 
                "artist",
                "label",
                "genre"
            ]
        })
        .then( function (oldProduct) {
            if (!editedProduct.cover) {
                editedProduct.cover = oldProduct.cover;
            }
            
        })
        
        db.product.update({ editedProduct }, {
            where: {
              id: editedProduct.id
            }
          })
        .then( function (editedProduct) {
            res.redirect("/products/" + editedProduct.id);
        })
        productsModel.update(editedProduct);
    },
    
    productDelete: (req, res) => {
        let id = req.params.id;
        productsModel.deleteById(id);
        
        res.redirect("/products");
    },
    
    detail: (req, res) => {
        if(req.session.user.role==2){
            res.redirect("/products/" + req.params.id + "/edit");
        }
        db.product.findByPk(req.params.id, {
            include : [
                "format", 
                "artist",
                "label",
                "genre"
            ]
        })
        .then(function (product){
            if (product) {
                res.render("./products/detail", { product });
            } else {
                res.redirect("/products");
            }
        })
        .catch( e => {console.log(e);})
    },
    
    search: (req, res) => {
        let query = req.query.search_query;

        db.product.findAll({
            attributes: [
                'id',
                'cover',
                'title',
                'price',
                [Sequelize.col('artist.name'), 'artist'],
                [Sequelize.col('genre.name'), 'genre']
            ],
            include : [
                "artist",
                "genre"
            ],
            where: { 
                [Op.or]: {
                    title: { [Op.like]: '%'+query+'%' },
                    '$artist.name$': { [Op.like]: '%'+query+'%'},
                    '$genre.name$': { [Op.like]: '%'+query+'%'},
                }
            },
            raw:true
          })
         .then(function (results) {
            res.render("./products/list", { products: results });
        })
    },
    
    viewCart: (req, res) => {
        if(req.session.cart) {
            let cart = req.session.cart;
            let ids = [];
            cart.forEach(product => {
                ids.push(product.id);   
            });
            db.product.findAll({
                where: {
                  id: {
                    [Op.or]: [ ...ids]
                  }
                }
              })
            .then(function (products) {
                let total = 0;
                res.render('./products/cart', {products, cart, total})
            })
        }
        else {
            let products = [];
            let total = 0; 
            res.render('./products/cart', { products, total})
        }

/*         let total = 0;
        products.forEach(product => total += parseInt(product.precio));
        res.render("./products/cart", { products, total }); */
    },
    
    addToCart: (req, res) => {
        //Agregar a la cookie del usuario...
        let productAdded = {
            id: req.params.id,
            ammount: req.body.cantidad
        }; 
        if (req.session && req.session.cart){
            req.session.cart.push(productAdded);
        }
        else {
            req.session.cart = [productAdded];
        }     
        //Retornar al producto...
        res.redirect("/products/" + req.params.id);
    },
};
