const db = require("../database/models");
const Sequelize = require("sequelize");

module.exports = {
  // Crea la compra del usuario
  processPurchase: async (req, res) => {
    // Guardo lo que vino del formulario
    let form = [];
    [...req.body.product].forEach((product, i) => {
      form.push({ id: product, ammount: req.body.cantidad[i] });
    });

    // Traigo los productos de la base de datos
    let products = await db.product
      .findAll({
        where: {
          id: req.body.product,
        },
        include: ["artist"],
        nest: true,
        raw: true,
      })
      .catch((e) => console.log("ERROR: ", e));

    // Añado la cantidad a comprar a los productos deseados
    products.forEach((dbProduct) => {
      form.forEach((formProduct) => {
        if (formProduct.id == dbProduct.id) {
          return (dbProduct.ammount = formProduct.ammount);
        }
      });
    });

    // Calculo el total de la compra
    let total = 0;
    products.forEach((product, i) => {
      total += product.price * product.ammount;
    });

    // Me traigo el usuario de la base de datos
    let user = await db.user
      .findOne({
        where: { email: req.session.user.email },
        nest: true,
        raw: true,
      })
      .catch((e) => console.log("ERROR: ", e));

    // Creo el envio correspondiente a la compra
    let shipping = await db.shipping.create({ price: 0 })
    .catch((e) => console.log("ERROR: ", e));

    // Creo el carrito en base de datos
    let createdCart = await db.cart
      .create({
        date: new Date(),
        total,
        shipping_id: shipping.dataValues.id,
        user_id: user.id,
        state_id: 1,
      })
      .catch((e) => console.log("ERROR: ", e));

    // Asocio cada producto al carrito de compras
    products.forEach((product) => {
      db.cart_product
        .create({
          price: product.price,
          ammount: product.ammount,
          cart_id: createdCart.dataValues.id,
          product_id: product.id,
        })
        .catch((e) => console.log("ERROR: ", e));

      db.product.update(
        { stock: product.stock - product.ammount },
        {
          where: {
            id: product.id,
          },
        }
      ).catch((e) => console.log("ERROR: ", e));
    });

    // Elimino el carrito de la session del navegador del usuario
    delete req.session.cart;

    // Renderizo la vista de confirmación y pago
    res.render("./cart/confirm", {
      products,
      total,
      cart: createdCart.dataValues,
    });
  },

  // Confirma el pago del usuario
  finishPurchase: async (req, res) => {
    let payment = req.body;

    db.cart.update(
      { state_id: 2 },
      {
        where: {
          id: payment.cart,
        },
      }
    ).catch((e) => console.log("ERROR: ", e));

    res.render("./cart/thanks");
  },

  payPending: async (req, res) => {
    let cart = await db.cart.findByPk(req.body.cart);
    let cartProduct = await db.cart_product.findAll({
      where: {cart_id: cart.id},
      include: [{model: db.product, paranoid: false}],
      raw: true, 
      nest: true
    })
    console.log(cartProduct)
    let products = [];

    for(let product of [...cartProduct.product]) {
      products.push(product.product)
    }
    
    for(product in products){
      console.log(product)
      product.artist = await db.artist.findByPk(product.artist_id)
      console.log(product.artist)
    }

    res.render("./cart/confirm", {
      products,
      total: cart.total,
      cart,
    });

  }
};

