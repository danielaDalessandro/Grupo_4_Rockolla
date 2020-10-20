const db = require("../database/models");
const Sequelize = require("sequelize");

module.exports = {
  processPurchase: async (req, res) => {
    console.log(req.body);
    let userEmail = req.session.user.email;
    let productIds = [...req.body.product];
    let ammount = [...req.body.cantidad];
    let products = [];
    productIds.forEach((element, i) => {
      products.push({ id: element, ammount: ammount[i] });
    });
    let price = await db.product.findAll({
      where: {
        id: productIds,
      },
      nest: true,
      raw: true,
    });

    price.forEach((dbProduct) => {
      products.forEach((product) => {
        if (product.id == dbProduct.id) {
          return (product.price = dbProduct.price);
        }
      });
    });

    let total = 0;

    products.forEach((product, i) => {
      total += product.price * product.ammount;
    });

    let user = await db.user.findOne({
      where: { email: userEmail },
      nest: true,
      raw: true,
    });

    let shipping = await db.shipping.create({ price: 0 });

    let cart = {
      date: new Date(),
      total,
      shipping_id: shipping.dataValues.id,
      user_id: user.id,
      state_id: 1,
    };

    let createdCart = await db.cart.create(cart);
    console.log(createdCart);

    products.forEach((product) => {
      db.cart_product.create({
        price: product.price,
        ammount: product.ammount,
        cart_id: createdCart.dataValues.id,
        product_id: product.id,
      });
    });
    
    res.render("./cart/confirm");
  },
};
