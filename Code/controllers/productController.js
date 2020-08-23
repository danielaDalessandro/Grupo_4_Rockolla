const { search } = require("../routes");
const jsonDb = require('../db/jsonDb');

const productsModel = jsonDb('products');

module.exports = {
    list: (req, res) => {
        let products = productsModel.readAll();

        return res.render('./products/prodList', { products:products });
    },

    create: (req, res) => {

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
        res.render('./products/productCart');
    },
}