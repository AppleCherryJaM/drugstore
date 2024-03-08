const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
	user: { type: mongoose.Types.ObjectId , required: true, ref: 'User' },
	drugs: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Drug' }],
	store: { type: mongoose.Types.ObjectId , required: true, ref: "Store"},
	drug_count: { type: Number, required: true },
	paycheck: { type: Number, required: true }
});

mongoose.model("Order", orderSchema);