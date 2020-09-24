const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');
const path = require('path');
const loggedRoute = require('../middlewares/loggedRoute');

// middleware de multer para trabajar con archivos
const multer = require('../middlewares/multerConfig');
const upload = multer('tapas', 'tapa');

// Listar productos
router.get('/', controller.list);

// Buscar productos
router.get('/search', controller.search);

// Crear productos
router.get('/create', loggedRoute, controller.viewCreate);
router.post('/', loggedRoute, upload.single('tapa'), controller.create);

// Detalle producto
router.get('/:id', controller.detail);

// Editar producto
router.get('/:id/edit' ,controller.viewEdit);
router.put('/:id', upload.single('tapa'), controller.edit);

// Eliminar producto
router.delete('/:id', loggedRoute, controller.productDelete);

// Carrito
router.get('/cart', controller.viewCart);
router.post('/cart', controller.viewCart);
router.post('/cart/:id', controller.addToCart);



module.exports = router;
