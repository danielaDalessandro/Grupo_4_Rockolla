const express = require("express");
const router = express.Router();
const productsAPIController = require("../../controllers/api/productsAPIController")
const adminRoute = require("../../middlewares/adminRoute")

router.get("/", productsAPIController.list)

router.get("/latest", productsAPIController.latest)

router.get("/:id", productsAPIController.detail)


module.exports = router;