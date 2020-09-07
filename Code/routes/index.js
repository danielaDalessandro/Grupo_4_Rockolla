const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexController');
const loggedRoute = require('../middlewares/loggedRoute');

router.get('/', loggedRoute, controller.index);

module.exports = router;