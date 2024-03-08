const mongoose = require('mongoose');

const drugSchema = new mongoose.Schema({
	name: { type: String, required: true },
	prise: {type: Number, required: true}
});

mongoose.model("Drug", drugSchema);
