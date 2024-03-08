<<<<<<< HEAD
const express = require("express");
const router = express.Router();

const storeController = require("../controllers/stores-controller");

router.get("/:sid", storeController.getStoreById);
router.get("/drugs/:sid", storeController.getDrugsByStoreId); //может быть не нужным методом, желательно обсудить
router.post("/", storeController.createStore);

=======
const express = require("express");
const router = express.Router();

const DB = require("../models/db");
const storeController = require("../controllers/stores-controller");

router.get("/:sid", storeController.getStoreById);

router.get("/drugs/:sid", storeController.getDrugsByStoreId)

>>>>>>> 94e13a3b3b7b6e7a62dfcba1336a1838b6e7633a
module.exports = router;