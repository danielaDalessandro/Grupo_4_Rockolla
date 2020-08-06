

module.exports = {
    productCreate: (req, res) => {
        res.render('./admin/productCreate');
    },

    productEdit: (req, res) => {
        res.render('./admin/productEdit');
    },
}