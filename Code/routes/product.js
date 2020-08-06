const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');

router.get('/detail', controller.detail);

router.get('/search', controller.search);
router.post('/search', controller.search);

router.get('/cart', controller.cart);

module.exports = router;