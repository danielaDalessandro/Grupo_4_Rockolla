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

    },

    viewCreate: (req, res) => {
        res.render('./admin/productCreate');
    },

    viewEdit: (req, res) => {

    },

    productDelete: (req, res) => {

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
}