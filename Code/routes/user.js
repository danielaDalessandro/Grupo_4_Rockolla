const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.get('/login', controller.login);
router.post('/login', controller.processLogin);

router.get('/registro', controller.registro);
router.post('/registro', controller.createUser);

module.exports = router;