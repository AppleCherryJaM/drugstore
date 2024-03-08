<<<<<<< HEAD
const express = require("express");
const router = express.Router();

const ordersController = require("../controllers/orders-controller");

router.post("/new", ordersController.createOrder);

router.get("/:oid", ordersController.getOrderById);

module.exports = router;
=======
const express = require("express");
const router = express.Router();

const ordersController = require("../controllers/orders-controller");

router.post("/order", ordersController.createOrder);
>>>>>>> 94e13a3b3b7b6e7a62dfcba1336a1838b6e7633a
