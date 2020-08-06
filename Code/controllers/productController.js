const { search } = require("../routes");

module.exports = {
    detail: (req, res) => {
        res.render('./products/productDetail');
    },

    search: (req, res) => {
        res.render('./products/productSearch');
    },

    cart: (req, res) => {
        res.render('./products/productCart');
    },
}