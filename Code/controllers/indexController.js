const db = require("../database/models");
const Sequelize = require('sequelize');

module.exports = {
    index: (req, res) => {
        db.product.findAll({
            attributes: [
                'id',
                'cover',
                'title',
                'price',
                [Sequelize.col('artist.name'), 'artist']
            ],
            include : [
                "artist"
            ],
            where: {
                highlight: 1
            },
            raw: true
        })
        .then( function (destacados) {
            res.render('index', {destacados});
        })
        .catch( e => {console.log("indes error; ",e)})
        }
}