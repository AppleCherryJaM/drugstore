const express = require("express");
const router = express.Router();

const ordersController = require("../controllers/orders-controller");

router.post("/new", ordersController.createOrder);

router.get("/:oid", ordersController.getOrderById);

module.exports = router;