const express = require("express");
const router = express.Router();
const cartsAPIController = require("../../controllers/api/cartsAPIController");
const adminRoute = require("../../middlewares/adminRoute");

// Traigo información de Ventas
router.get("/", adminRoute, cartsAPIController.listCarts);

module.exports = router;
