const express = require("express");
const router = express.Router();

const DB = require("../models/db");
const storeController = require("../controllers/stores-controller");

router.get("/:sid", storeController.getStoreById);

router.get("/drugs/:sid", storeController.getDrugsByStoreId)

module.exports = router;