<<<<<<< HEAD
const mongoose = require('mongoose');

const drugSchema = new mongoose.Schema({
	name: { type: String, required: true },
	prise: { type: Number, required: true },
	image: { type: String, required: true },
	date: { type: String, required: true },
	stores: [{ type: mongoose.Types.ObjectId, required: true, ref: "Store" }]
});

mongoose.model("Drug", drugSchema);
=======
const mongoose = require('mongoose');

const drugSchema = new mongoose.Schema({
	name: { type: String, required: true },
	prise: {type: Number, required: true}
});

mongoose.model("Drug", drugSchema);
>>>>>>> 94e13a3b3b7b6e7a62dfcba1336a1838b6e7633a
