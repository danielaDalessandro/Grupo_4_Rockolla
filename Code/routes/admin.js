const express = require('express');
const router = express.Router();
const controller = require('../controllers/adminController');
const adminRoute = require("../middlewares/adminRoute");

router.get('/', adminRoute,  controller.dashboard);

router.get('/users', adminRoute,  controller.listUsers);

module.exports = router;