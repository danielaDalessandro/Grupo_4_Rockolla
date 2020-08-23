const { search } = require("../routes");
const jsonDb = require('../db/jsonDb');

const productsModel = jsonDb('products');

module.exports = {
    list: (req, res) => {
        let products = productsModel.readAll();

        return res.render('./products/prodList', { products:products });
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
            descripcion: req.body.descripcion
        }

        productsModel.createRow(newProduct);

        res.redirect('/products/' + newProduct.id);
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
            descripcion: req.body.descripcion
        }

        let table = productsModel.readAll();
        let oldProduct = productsModel.findById(req.params.id);
        let index = table.find((row) => row.id == req.body.id);
        if (req.file) {
            editedProduct.tapa = req.file.filename;
        }
        else {
            editedProduct.tapa = oldProduct.tapa;
        }

        table.splice(index, 1, editedProduct);

        productsModel.writeTable(table);

        res.redirect('/products/' + editedProduct.id);
    },

    viewCreate: (req, res) => {
        res.render('./admin/productCreate');
    },

    viewEdit: (req, res) => {
        let productToEdit = productsModel.findById(req.params.id);

        res.render('./products/productEdit', { product: productToEdit })
    },

    productDelete: (req, res) => {
        console.log('inside product delete');
        let id = req.params.id;
        productsModel.deleteById(id);

        res.redirect('/products');
    },


    detail: (req, res) => {
        let product = productsModel.findById(req.params.id);

        res.render('./products/productDetail', {product});
    },

    search: (req, res) => {
        res.render('./products/productSearch');
    },

    cart: (req, res) => {
        let products = [
            productsModel.findById('308'),
            productsModel.findById('309'),
            productsModel.findById('311')
        ];
        res.render('./products/productCart', { products });
    },

    addToCart: (req, res) => {
        res.redirect('/products/cart');    }
}