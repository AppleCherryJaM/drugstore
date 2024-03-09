const express = require("express");
const router = express.Router();

const storeController = require("../controllers/stores-controller");
const drugController = require("../controllers/drugs-controller");

router.get("/:sid", storeController.getStoreById);
router.get("/drugs/:sid", storeController.getDrugsByStoreId);
router.post("/drugs", drugController.createDrug);
router.post("/", storeController.createStore);
router.get("/", storeController.getAllStores);
router.patch("/:sid", storeController.addStoreDrugs);

module.exports = router;