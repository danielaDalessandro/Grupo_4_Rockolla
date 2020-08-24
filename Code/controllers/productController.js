const { search } = require("../routes");
const jsonDb = require("../db/jsonDb");

const productsModel = jsonDb("products");

module.exports = {
    list: (req, res) => {
        let products = productsModel.readAll();
        
        return res.render("./products/prodList", { products: products });
    },
    
    create: (req, res) => {
        let newProduct = {
            id: productsModel.getNextId(),
            titulo: req.body.titulo,
            artista: req.body.artista,
            sello: req.body.sello,
            genero: req.body.genero,
            fechaPublicacion: req.body.fechaPublicacion,
            tapa: req.file.filename,
            formato: req.body.formato,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
        };
        
        productsModel.createRow(newProduct);
        
        res.redirect("/products/" + newProduct.id);
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
    
    viewCreate: (req, res) => {
        res.render("./admin/productCreate");
    },
    
    viewEdit: (req, res) => {
        let productToEdit = productsModel.findById(req.params.id);
        if (productToEdit) {
            res.render("./products/productEdit", { product: productToEdit });
        } else {
            res.render("./404");
        }
    },
    
    productDelete: (req, res) => {
        console.log("inside product delete");
        let id = req.params.id;
        productsModel.deleteById(id);
        
        res.redirect("/products");
    },
    
    detail: (req, res) => {
        let product = productsModel.findById(req.params.id);
        if (product) {
            res.render("./products/productDetail", { product });
        } else {
            res.redirect("/products");
        }
    },
    
    search: (req, res) => {
        let query = req.query.search_query
        let tableBandas = productsModel.filterBy("artista", query)
        let tableDiscos = productsModel.filterBy("titulo", query)
        let resultados = [...tableBandas, ...tableDiscos]
        

        res.render("./products/prodList", {products : resultados});
    },
    
    viewCart: (req, res) => {
        let products = [
            productsModel.findById("308"),
            productsModel.findById("309"),
            productsModel.findById("311"),
        ];
        res.render("./products/productCart", { products });
    },
    
    addToCart: (req, res) => {
        let product = productsModel.findById(req.params.id);
        //Agregar a la cookie del usuario...
        //Retornar al producto...
        res.redirect("/products/" + req.params.id);
    },
};
