const { type } = require('express/lib/response');
const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
	name: {type: String, required: true},
	location: {
		lat: {type: Number, required:true},
		lng: {type: Number, required:true}
	},
	address: {type: String, required: true}
});

mongoose.model("Store", storeSchema);