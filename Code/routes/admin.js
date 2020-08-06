const express = require('express');
const router = express.Router();
const controller = require('../controllers/adminController');

router.get('/productCreate', controller.productCreate);
router.post('/productCreate', controller.productCreate);

router.get('/productEdit', controller.productEdit);
router.post('/productEdit', controller.productEdit);

module.exports = router;