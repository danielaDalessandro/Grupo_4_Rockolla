const { response } = require("express");
const db = require("../../database/models");

module.exports = {
  listCarts: async (req, res) => {
    let carts = await db.cart.findAll({
      include: ["cart_state", "shipping", "user"],
      raw: true,
      nest: true,
    });

    for (let cart of carts) {
      cart.products = await db.cart_product.findAll({
        where: {
          cart_id: cart.id,
        },
        include: [{ model: db.product, paranoid: false }],
        paranoid: false,
        nest: true,
        raw: true,
      }).catch((e) => console.log("ERROR: ", e));
    }

    let response = {
        meta: {total: carts.length},
        data: carts
    }
    res.json(response);
  },
};
