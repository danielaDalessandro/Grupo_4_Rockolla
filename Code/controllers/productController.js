const db = require("../database/models");
const Sequelize = require("sequelize");
const { Op } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { validationResult } = require("express-validator");

module.exports = {
  // Listar todos los productos
  list: (req, res) => {
    let products = db.product.findAll({
      attributes: [
        "id",
        "cover",
        "title",
        "price",
        [Sequelize.col("artist.name"), "artist"],
      ],
      include: ["artist"],
      raw: true,
    });
    products.then(function (products) {
      return res.render("./products/list", { products: products });
    });
  },

  // Mostrar la vista de creación de productos
  viewCreate: (req, res) => {
    res.render("./products/create");
  },

  // Crear producto nuevo
  create: (req, res) => {
    let request = req.body;

    // verifico si existe el artista
    let artist = db.artist
      .findOne({ where: { name: request.artista } })
      .then(function (response) {
        if (response == null) {
          return db.artist.create({
            name: request.artista,
          });
        } else {
          return response;
        }
      })
      .catch((e) => {
        console.log("artist create error: ", e);
      });

    // verifico si existe el sello
    let label = db.label
      .findOne({ where: { name: request.sello } })
      .then(function (response) {
        if (response == null) {
          return db.label.create({
            name: request.sello,
          });
        } else {
          return response;
        }
      })
      .catch((e) => {
        console.log("label create error: ", e);
      });

    // verifico si existe el genero
    let genre = db.genre
      .findOne({ where: { name: request.genero } })
      .then(function (response) {
        if (response == null) {
          return db.genre.create({
            name: request.genero,
          });
        } else {
          return response;
        }
      })
      .catch((e) => {
        console.log("genre create error: ", e);
      });

    // verifico si existe el formato
    let format = db.format
      .findOne({
        where: {
          name: request.formato,
          diameter: request.pulgadas,
          rpm: request.rpm,
        },
      })
      .then(function (response) {
        if (response == null) {
          return db.format.create({
            name: request.formato,
            diameter: request.pulgadas,
            rpm: request.rpm,
          });
        } else {
          return response;
        }
      })
      .catch((e) => {
        console.log("format create error: ", e);
      });

    // Una vez resuelto todo, creo el producto
    Promise.all([artist, label, genre, format]).then(function (result) {
      return (newProduct = db.product
        .create({
          title: request.titulo,
          artist_id: result[0].dataValues.id,
          label_id: result[1].dataValues.id,
          genre_id: result[2].dataValues.id,
          publish_date: request.fechaPublicacion,
          cover: req.file.filename,
          format_id: result[3].dataValues.id,
          price: request.precio,
          description: request.descripcion,
          stock: request.stock,
        })
        .then(function (newProduct) {
          res.redirect("/products/" + newProduct.id);
        }));
    });
  },

  // Mostrar la vista de edición de productos
  viewEdit: (req, res) => {
    db.product
      .findByPk(req.params.id, {
        include: ["format", "artist", "label", "genre"],
        raw: true,
        nest: true,
      })
      .then(function (product) {
        if (product) {
          let productToEdit = {
            id: product.id,
            title: product.title,
            artist: product.artist.name,
            cover: product.cover,
            label: product.label.name,
            genre: product.genre.name,
            price: product.price,
            stock: product.stock,
            format: product.format.name,
            rpm: product.format.rpm,
            diameter: product.format.diameter,
            publishDate: product.publish_date,
            description: product.description,
            highlight: product.highlight,
          };
          res.render("./products/edit", { product: productToEdit });
        } else {
          res.render("./404");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  },

  // Editar producto existente
  edit: async (req, res) => {
    let errors = validationResult(req);

    // Guardo los datos del formulario
    const body = req.body;

    // Traigo el producto a editar
    let productToUpdate = await db.product
      .findByPk(req.params.id, {
        include: ["format", "artist", "label", "genre"],
        raw: true,
        nest: true,
      })
      .catch((e) => console.log("ERROR: ", e));

    if (errors.isEmpty()) {
      // Actualizo con valores del formulario
      productToUpdate.title = body.titulo;
      productToUpdate.price = body.precio;
      productToUpdate.publish_date = body.fechaPublicacion;
      productToUpdate.description = body.descripcion;
      productToUpdate.stock = body.stock;
      productToUpdate.highlight = body.highlight;

      // Si hay que actualizar la tapa
      if (req.file && req.file.filename) {
        // Borro la tapa anterior
        fs.unlinkSync(
          path.join(
            __dirname,
            "..",
            "public",
            "images",
            "tapas",
            productToUpdate.cover
          )
        );
        // Guardo la nueva
        productToUpdate.cover = req.file.filename;
      }

      // Si cambió el artista
      if (productToUpdate.artist.name != body.artista) {
        // Busco si existe el nuevo artista
        let newArtist = await db.artist
          .findOne({ where: { name: body.artista } })
          .then((result) => {
            if (result) {
              return result;
            }
            // Si no existe lo creo
            return db.artist.create({
              name: body.artista,
            });
          })
          .catch((e) => console.log("ARTIST ERROR: ", e));
        // Guardo el id del nuevo artista
        productToUpdate.artist_id = newArtist.id;
      }

      // Si cambió el sello
      if (productToUpdate.label.name != body.sello) {
        // Busco si existe el sello nuevo
        let newLabel = await db.label
          .findOne({ where: { name: body.sello } })
          .then((result) => {
            if (result) {
              return result;
            }
            // Si no existe lo creo
            return db.label.create({
              name: body.sello,
            });
          })
          .catch((e) => console.log("LABEL ERROR: ", e));
        // Guardo el id del sello nuevo
        productToUpdate.label_id = newLabel.id;
      }

      // Si cambió el genero
      if (productToUpdate.genre.name != body.genero) {
        // Busco si existe el genero nuevo
        let newGenre = await db.genre
          .findOne({ where: { name: body.genero } })
          .then((result) => {
            if (result) {
              return result;
            }
            // Si no existe lo creo
            return db.genre.create({
              name: body.genero,
            });
          })
          .catch((e) => console.log("GENRE ERROR: ", e));
        // Guardo el id del genero nuevo
        productToUpdate.genre_id = newGenre.id;
      }

      // Busco si cambio el formato
      if (
        productToUpdate.format.name != body.formato ||
        productToUpdate.format.rpm != body.rpm ||
        productToUpdate.format.diameter != body.pulgadas
      ) {
        // Busco si existe el nuevo formato
        let newformat = await db.format
          .findOne({
            where: {
              name: body.formato,
              rpm: body.rpm,
              diameter: body.pulgadas,
            },
          })
          .then((result) => {
            if (result) {
              return result;
            }
            // Si no existe lo creo
            return db.format.create({
              name: body.formato,
              rpm: body.rpm,
              diameter: body.pulgadas,
            });
          })
          .catch((e) => console.log("FORMAT ERROR: ", e));
        // Guardo el id del nuevo formato
        productToUpdate.format_id = newformat.id;
      }

      // Actualizo el producto editado
      db.product
        .update(productToUpdate, {
          where: { id: productToUpdate.id },
        })
        .then((result) => {
          // Redirijo a la pagina de productos
          res.redirect(`/products`);
        })
        .catch((e) => console.log("UPDATE ERROR: ", e));
    }
    // si vinieron errores...
    else {
      let product = {
        id: req.params.id,
        title: body.titulo,
        artist: body.artista,
        cover: productToUpdate.cover,
        label: body.sello,
        genre: body.genero,
        price: body.precio,
        stock: body.stock,
        format: body.formato,
        rpm: body.rpm,
        diameter: body.pulgadas,
        publishDate: body.fechaPublicacion,
        description: body.descripcion,
        highlight: body.highlight,
      };
      res.render("./products/edit", {
        product: product,
        errors: errors.mapped(),
      });
    }
  },

  // Eliminar un producto existente
  productDelete: (req, res) => {
    // Realizo soft-delete de producto
    db.product
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then((result) => {
        // Una vez eliminado redirijo a productos
        res.redirect("/products");
      })
      .catch((e) => console.log("DELETE ERROR: ", e));
  },

  // Mostrar vista del detalle de producto
  detail: (req, res) => {
    // Si es admin, lo redirijo a vista de edición
    if (req.session.user && req.session.user.role == 2) {
      res.redirect("/products/" + req.params.id + "/edit");
    }
    // Busco el producto solicitado
    db.product
      .findByPk(req.params.id, {
        include: ["format", "artist", "label", "genre"],
        nest:true, raw:true
      })
      .then(function (product) {
        // Si tengo el producto
        if (product) {
          // Si el producto esta en el carrito devuelvo un feedback...
          let feedback = "";
          if (req.session && req.session.cart) {
            let cart = req.session.cart;
            cart.forEach((disc) => {
              if (disc.id == req.params.id) {
                feedback = `Has añadido "${product.artist.name} - ${product.title}" al carrito`;
              }
            });
          }
          // Muestro el producto
          res.render("./products/detail", { product, feedback });
        } else {
          // si no redirijo a la lista de productos
          res.redirect("/products");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  },

  // Buscar productos y listar resultado
  search: (req, res) => {
    let query = req.query.search_query;

    db.product
      .findAll({
        attributes: [
          "id",
          "cover",
          "title",
          "price",
          [Sequelize.col("artist.name"), "artist"], // alias para artist.name as artist
          [Sequelize.col("genre.name"), "genre"],
        ],
        include: ["artist", "genre"],
        where: {
          [Op.or]: {
            title: { [Op.like]: "%" + query + "%" },
            "$artist.name$": { [Op.like]: "%" + query + "%" },
            "$genre.name$": { [Op.like]: "%" + query + "%" },
          },
        },
        raw: true,
      })
      .then(function (results) {
        res.render("./products/list", { products: results });
      });
  },

  // Mostrar la vista del carrito de compras
  viewCart: (req, res) => {
    if (req.session.cart && req.session.cart.length) {
      // Busco el carro en sessión
      let cart = req.session.cart;
      let productIds = [];

      // Por cada producto en el carro
      cart.forEach((product) => {
        //  Pongo los ids en un array
        productIds.push(product.id);
      });

      // Busco los productos con los ids
      db.product
        .findAll({
          include: [
              "artist"
          ],
          where: {
            id: {
              [Op.or]: [...productIds],
            },
          },
          nest:true,
          raw: true,
        })
        .then(function (products) {
          let total = 0;
          products.forEach( product => {
              product.ammount = cart.filter( item => {
                  return item.id == product.id;
              })[0].ammount;
              total += product.price * product.ammount;
          });
          res.render("./products/cart", { products, cart, total });
        });
    } else {
      let products = [];
      let total = 0;
      res.render("./products/cart", { products, total });
    }
  },

  // Añadir producto al carrito de compras
  abmCart: (req, res) => {
    // Producto a agregar...
    let productCart = {
      id: req.params.id,
      ammount: req.body.cantidad,
    };

    // Si el usuario ya tiene cookie de carrito...
    if (req.session && req.session.cart) {
      // Verifico si el disco ya existe en el carrito
      let inCart = req.session.cart.filter((disc) => {
        return disc.id == productCart.id;
      });

      // Si existe en el carrito...
      if (inCart.length) {
        // Lo quito del carrito
        req.session.cart = req.session.cart.filter((disc) => {
          return disc.id != productCart.id;
        });
      } else {
        // Si no, lo agrego al carrito...
        req.session.cart.push(productCart);
      }
    } else {
      // Si no tiene cookie, la creo y agrego el producto
      req.session.cart = [productCart];
    }
    //Retornar al producto...
    res.redirect("/products/" + req.params.id);
  },
};
