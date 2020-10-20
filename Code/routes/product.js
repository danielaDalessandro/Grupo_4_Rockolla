const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');
const cartController = require('../controllers/cartController');
const path = require('path');
const clientRoute = require('../middlewares/clientRoute');
const adminRoute = require("../middlewares/adminRoute");

const validate = require("../validators/products.js");

// middleware de multer para trabajar con archivos
const multer = require('../middlewares/multerConfig');
const upload = multer('tapas', 'tapa');

// Carrito
router.get('/cart', clientRoute, controller.viewCart);
router.post('/cart', cartController.processPurchase);

// Agregar/Quitar producto del Carrito
router.post('/cart/:id', clientRoute, controller.abmCart);

// Buscar productos
router.get('/search', controller.search);

// Crear productos
router.get('/create', adminRoute, controller.viewCreate);
router.post('/', adminRoute, upload.single('tapa'), validate.productForm, controller.create);


// Editar producto
router.get('/:id/edit', adminRoute, controller.viewEdit);
router.put('/:id', adminRoute, upload.single('tapa'), validate.productForm, controller.edit);

// Detalle producto
router.get('/:id', controller.detail);

// Eliminar producto
router.delete('/:id', adminRoute, controller.productDelete);

// Listar productos
router.get('/', controller.list);


module.exports = router;
