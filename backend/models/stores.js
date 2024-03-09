const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
	name: {type: String, required: true},
	location: {
		lat: {type: Number, required:true},
		lng: {type: Number, required:true}
	},
	address: {type: String, required: true},
	drugs: [{ type: mongoose.Types.ObjectId, required: true, ref: "Drug" }]
});

module.exports = mongoose.model("Store", storeSchema);