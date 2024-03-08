const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
	user_id: { type: mongoose.Types.ObjectId , required: true, ref: 'User'},
	drug_id: { type: mongoose.Types.ObjectId, required: true, ref: 'Drug' },
	drug_count: {type: Number, required: true},
	paycheck: {type: Number, required: true}
});

mongoose.model("Order", orderSchema);