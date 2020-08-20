const { search } = require("../routes");
const jsonDb = require('../db/jsonDb');

const productsModel = jsonDb('products');

module.exports = {
    list: (req, res) => {
        let products = productsModel.readAll();

        console.log(typeof products);

        return res.render('./products/prodList', { products:products });
    },

    create: (req, res) => {

    },

    edit: (req, res) => {

    },

    viewCreate: (req, res) => {

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