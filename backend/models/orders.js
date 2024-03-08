<<<<<<< HEAD
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
	user: { type: mongoose.Types.ObjectId , required: true, ref: 'User' },
	drugs: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Drug' }],
	store: { type: mongoose.Types.ObjectId , required: true, ref: "Store"},
	drug_count: { type: Number, required: true },
	paycheck: { type: Number, required: true }
});

=======
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
	user_id: { type: mongoose.Types.ObjectId , required: true, ref: 'User'},
	drug_id: { type: mongoose.Types.ObjectId, required: true, ref: 'Drug' },
	drug_count: {type: Number, required: true},
	paycheck: {type: Number, required: true}
});

>>>>>>> 94e13a3b3b7b6e7a62dfcba1336a1838b6e7633a
mongoose.model("Order", orderSchema);