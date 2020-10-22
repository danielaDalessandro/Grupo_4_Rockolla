const db = require("../database/models");
const Sequelize = require("sequelize");

module.exports = {
  index: async (req, res) => {
    let destacados = await db.product
      .findAll({
        attributes: [
          "id",
          "cover",
          "title",
          "price",
          [Sequelize.col("artist.name"), "artist"],
        ],
        include: ["artist"],
        where: {
          highlight: 1,
        },
        raw: true,
      })
      .catch((e) => {
        console.log("INDEX; ", e);
      });

    let recientes = await db.sequelize
      .query(
        "SELECT * FROM rockolla_db.products where deleted_at is null order by updated_at desc limit 15"
      )
      .catch((e) => {
        console.log("INDEX; ", e);
      });
    console.log(recientes);
    res.render("index", { destacados, recientes: recientes[0] });
  },

  contact: (req, res) => {
    res.render("contact");
  }
};
