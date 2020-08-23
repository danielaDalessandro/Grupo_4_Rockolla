const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');
const path = require('path');

//multer para trabajar con archivos
const multer = require('multer');
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/images/tapas'),
    filename: (req, file, callback) => {
        callback(null, 'tapa-' + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({ storage })

router.get('/', controller.list);

router.post('/', upload.single('tapa'), controller.create);

router.get('/create', controller.viewCreate);

router.get('/search', controller.search);
router.post('/search', controller.search);

router.get('/cart', controller.cart);
router.post('/cart', controller.addToCart);

router.delete('/:id', controller.productDelete);

router.get('/:id', controller.detail);

router.get('/:id/edit' ,controller.viewEdit);

router.put('/:id', upload.single('tapa'), controller.edit);

module.exports = router;