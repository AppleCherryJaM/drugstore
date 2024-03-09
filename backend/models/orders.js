const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
	contactInfo: {
		name: {type: String, required: true},
		email: { type: String, required: true },
		phone: {type: String, required: true},
		address: {type: String, required: true}
	},
	orderedDrugs: [
		{
			drug: { type: mongoose.Types.ObjectId, required: true, ref: 'Drug' },
			quantity: { type: Number, required: true }
		}
	],
	// orderedDrug: { type: String, required: true },
	store: { type: mongoose.Types.ObjectId , required: true, ref: "Store"},
	totalPrice: { type: Number, required: true }
});

module.exports = mongoose.model("Order", orderSchema);