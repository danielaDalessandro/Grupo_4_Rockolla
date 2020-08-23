const jsonDb = require('../db/jsonDb');

const productsModel = jsonDb('products');

module.exports = {
    productCreate: (req, res) => {
        let newProduct = {
            titulo: req.body.titulo,
            artista: req.body.artista,
            genero: req.body.genero,
            sello: req.body.sello,
            descripcion: req.body.descripcion,
            precio: req.body.precio,
            fechaPublicacion: req.body.fechaPublicacion,
            pulgadas: req.body.pulgadas,
            //tapa:
        }

        let products = productsModel.readAll();

        newProduct.id = productsModel.getNextId();

        products.push(newProduct);

        productsModel.writeTable(products);

        res.redirect('/product');
    },

    viewProductCreate: (req, res) => {
        res.render('./admin/productCreate');
    },

    productEdit: (req, res) => {
        let product = productsModel.findById(req.params.id);
        res.render('./admin/productCreate', { product});
    },
}