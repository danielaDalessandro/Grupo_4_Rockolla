const jsonDb = require("../db/jsonDb");

const productsModel = jsonDb("products");
const db = require("../database/models");


module.exports = {
    list: (req, res) => {
        let products = db.product.findAll();
        products.then(function(products){
            return res.render("./products/list", { products: products });
        })
    },
    
    viewCreate: (req, res) => {
        res.render("./products/create");
    },

    create: (req, res) => {
        let request = req.body;

        // verifico si existe el genero
        let artist = db.Artists.findOne({where : { name : request.artista}})
        .then( function(response) {
            if (response == null) {
                return db.Artists.create({
                    name: request.artista
                 });
            }
            else {
                return response;
            }
        })
        .catch( e =>{console.log('artist create error: ', e)});

        // verifico si existe el genero
        let label = db.Artists.findOne({where : { name : request.sello}})
        .then( function(response) {
            if (response == null) {
                return db.Label.create({
                    name: request.sello 
                 });
            }
            else {
                return response;
            }
        })
        .catch( e =>{console.log('label create error: ', e)});

        // verifico si existe el genero
        let genre = db.Genres.findOne({where : { name : request.genero}})
        .then( function(response) {
            if (response == null) {
                return db.Genres.create({
                    name: request.genero 
                 });
            }
            else {
                return response;
            }
        })
        .catch( e =>{console.log('genre create error: ', e)});

        // Una vez resuelto todo, creo el producto
        Promise.all([artist, label, genre])
        .then( function (result){
            console.log(result[1],' request', req.body);
            return newProduct = db.Products.create(          
                {title: request.titulo,
                artist_id: result[0].dataValues.id,
                label_id: 1/* result[1].dataValues.id */,
                genre_id: result[2].dataValues.id,
                publishing_date: request.fechaPublicacion,
                cover: req.file.filename,
                format_id: 1,
                price: request.precio,
                description: request.descripcion,
                views: 0,
                stock: 1,
                products_state_id: 1,
                }
            ).then( function (newProduct){
                console.log('\n\n',newProduct);
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
            console.log(product);
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
                console.log(productToEdit)
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
            cover: req.body.stock,
            format: req.body.formato,
            artist: req.body.artista,
            label: req.body.sello,
            genre: req.body.genero,
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
            if (req.file) {
                editedProduct.cover = req.file.filename;
            } else {
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
        db.product.findByPk(query, {
            include: [
                "format", 
                "artist",
                "label",
                "genre"
            ]
        })
        .then( function (product) {
            console.log(product);
        })
        .then(function () {
            res.redirect("/")
        })
    
/*         let tableBandas = productsModel.filterBy("artista", query);
        let tableDiscos = productsModel.filterBy("titulo", query);
        let resultados = [...tableBandas, ...tableDiscos];
        
        res.render("./products/list", { products: resultados }); */
    },
    
    viewCart: (req, res) => {
        let products = [
            productsModel.findById("314"),
            productsModel.findById("312"),
            productsModel.findById("313"),
            productsModel.findById("315"),
            productsModel.findById("1"),
        ];

        let total = 0;
        products.forEach(product => total += parseInt(product.precio));
        res.render("./products/cart", { products, total });
    },
    
    addToCart: (req, res) => {
        let product = productsModel.findById(req.params.id);
        //Agregar a la cookie del usuario...
        //Retornar al producto...
        res.redirect("/products/" + req.params.id);
    },
};
