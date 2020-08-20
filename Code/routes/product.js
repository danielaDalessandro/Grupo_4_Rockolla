const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');

router.get('/', controller.list);

router.post('/', controller.create);

router.get('/create', controller.viewCreate);

router.get('/:id', controller.detail);

router.get('/:id/edit', controller.viewEdit);

router.put('/:id', controller.edit);

//router.delete('/:id', controller.delete);

router.get('/search', controller.search);
router.post('/search', controller.search);

router.get('/cart', controller.cart);

module.exports = router;