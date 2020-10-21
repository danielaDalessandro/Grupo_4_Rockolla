const db = require("../../database/models");
const Sequelize = require("sequelize");
const sequelize = require("sequelize");
const { QueryTypes } = require('sequelize');

module.exports = {
    // Listar todos los productos
    list: (req, res) => {
      let products = db.product.findAll({
        attributes: [
          "id",
          "cover",
          "title",
          "price",
          "description",
          [Sequelize.col("artist.name"), "artist"],
          [Sequelize.col("genre.name"), "genre"],
        ],
        include: ["artist", "genre"],
        raw: true,
        nest: true
      });
      products.then(async function (products) {
          let artist = await db.sequelize.query("SELECT  artists.name, COUNT(*) as Quantity FROM products join artists on artist_id = artists.id GROUP BY artists.id")
          let genre = await db.sequelize.query("SELECT  genres.name, COUNT(*) as Quantity FROM products join genres on genre_id = genres.id GROUP BY genres.id")
          let respuesta = {
              meta: {
                  status: 200,
                  total: products.length,
                  countByArtist: artist,
                  countByGenre: genre
              },
              data: products
          }
        return res.json(respuesta);
      });
    },

    detail: async (req, res) => {
        let product = await db.product.findByPk(req.params.id, {
        include: ["format", "artist", "label", "genre"],
        nest:true, raw:true
      })

      delete product.createdAt
      delete product.updatedAt
      delete product.deletedAt

      delete product.label.createdAt
      delete product.label.updatedAt
      delete product.label.deletedAt

      delete product.genre.createdAt
      delete product.genre.updatedAt
      delete product.genre.deletedAt

      delete product.artist.createdAt
      delete product.artist.updatedAt
      delete product.artist.deletedAt

      delete product.format.createdAt
      delete product.format.updatedAt
      delete product.format.deletedAt

      product.cover = "/images/tapas/" + product.cover

      let respuesta = {
          meta: {
              status: 200,
          },
          data: product
      }
      res.json(respuesta)
    }
}