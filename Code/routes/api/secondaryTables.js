const express = require("express");
const router = express.Router();
const secondaryTableAPIController = require("../../controllers/api/secondaryTableAPIController");
const artistAPIController = secondaryTableAPIController("artist");
const genreAPIController = secondaryTableAPIController("genre");
const formatAPIController = secondaryTableAPIController("format");
const labelAPIController = secondaryTableAPIController("label");

router.get("/artist", artistAPIController.list);
router.get("/artist/:id", artistAPIController.detail);

router.get("/genre", genreAPIController.list);
router.get("/genre/:id", genreAPIController.detail);

router.get("/format", formatAPIController.list);
router.get("/format/:id", formatAPIController.detail);

router.get("/label", labelAPIController.list);
router.get("/label/:id", labelAPIController.detail);

module.exports = router;
