const express = require("express");
const router = express.Router();

const storeController = require("../controllers/stores-controller");

router.get("/:sid", storeController.getStoreById);
router.get("/drugs/:sid", storeController.getDrugsByStoreId); //может быть не нужным методом, желательно обсудить
router.post("/", storeController.createStore);

module.exports = router;