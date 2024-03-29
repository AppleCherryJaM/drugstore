require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const HttpError = require("./models/httpError");
const ordersRouter = require("./routes/orders-router");
const storesRouter = require("./routes/stores-router");

const PORT = process.env.PORT;
const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use("/api/stores", storesRouter);
app.use("/api/orders", ordersRouter);

app.use((req, res, next) => {
	const error = new HttpError("Couldn't find this rout", 404);
	throw error;
});

app.use((error, req, res, next) => {
	if (res.headerSent) return next(error);
	res.status(error.code || 500);
	res.json({message: error.message || "An unknown error occurred"})
});

mongoose.connect(process.env.DB_URL)
	.then(() => {
		app.listen(PORT);
		console.log('Server starts');
	})
	.catch((error) => {
		console.log("Connection failed Error message: ", error.message);
	});