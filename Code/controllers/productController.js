const jsonDb = require("../db/jsonDb");

const productsModel = jsonDb("products");
const db = require("../database/models")


module.exports = {
    list: (req, res) => {
        let products = productsModel.readAll();
        
        return res.render("./products/list", { products: products });
    },
    
    viewCreate: (req, res) => {
        res.render("./products/create");
    },
    
    create: (req, res) => {
    
        db.Products.create(            /* id: productsModel.getNextId(), */
        {title: req.body.titulo,
        artist_id: 1,
        label_id: 1,
        genre_id: 1,
        publishing_date: req.body.fechaPublicacion,
        cover: req.file.filename,
        format_id: 1,
        price: req.body.precio,
        description: req.body.descripcion,
        views: 0,
        stock: 1,
        products_state_id: 1,
    });
        /* productsModel.createRow(newProduct); */
        
        res.redirect("/products/" + newProduct.id);
    },
    
    viewEdit: (req, res) => {
        let productToEdit = productsModel.findById(req.params.id);
        if (productToEdit) {
            res.render("./products/edit", { product: productToEdit });
        } else {
            res.render("./404");
        }
    },
    
    edit: (req, res) => {
        let editedProduct = {
            id: req.params.id,
            titulo: req.body.titulo,
            artista: req.body.artista,
            sello: req.body.sello,
            genero: req.body.genero,
            fechaPublicacion: req.body.fechaPublicacion,
            formato: req.body.formato,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
        };
        let oldProduct = productsModel.findById(req.params.id);
        
        if (req.file) {
            editedProduct.tapa = req.file.filename;
        } else {
            editedProduct.tapa = oldProduct.tapa;
        }
        productsModel.update(editedProduct);
        res.redirect("/products/" + editedProduct.id);
    },
    
    productDelete: (req, res) => {
        let id = req.params.id;
        productsModel.deleteById(id);
        
        res.redirect("/products");
    },
    
    detail: (req, res) => {
        let product = productsModel.findById(req.params.id);
        if (product) {
            res.render("./products/detail", { product });
        } else {
            res.redirect("/products");
        }
    },
    
    search: (req, res) => {
        let query = req.query.search_query;
        let tableBandas = productsModel.filterBy("artista", query);
        let tableDiscos = productsModel.filterBy("titulo", query);
        let resultados = [...tableBandas, ...tableDiscos];
        
        res.render("./products/list", { products: resultados });
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
