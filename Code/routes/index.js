const express = require("express");
const router = express.Router();
const controller = require("../controllers/indexController");
const path = require("path");

router.get("/", controller.index);

router.get("/contact", controller.contact);

router.get("/about", controller.about);

module.exports = router;
