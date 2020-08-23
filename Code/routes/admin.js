const express = require('express');
const router = express.Router();
const controller = require('../controllers/adminController');

router.get('/products/create', controller.viewProductCreate);
router.post('/products/', controller.productCreate);

router.get('/products/:id/edit', controller.productEdit);
router.post('/productEdit', controller.productEdit);

module.exports = router;