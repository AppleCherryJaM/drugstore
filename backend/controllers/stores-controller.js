const mongoose = require("mongoose");

const getCoordsForAddress = require("../util/location");
const Store = require("../models/stores");
const HttpError = require("../models/httpError");

const getAllStores = async (req, res, next) => {
	let stores;
	try {
		stores = await Store.find({}, "name address location drugs");
	} catch (error) {
		return next(
			new HttpError(
				error.message,
				500
			)
		);
	}

	if (!stores) {
		return next(
			new HttpError(
				"There are no stores in db",
				404
			)
		);
	}

	console.log(stores);
	// return res.status(200).json({message: "Hello"})
	res.status(200).json({
		stores: stores.map(
			store => store.toObject({
				getters: true
			})
		)
	});
}

const getStoreById = async(req, res, next) => {
	const storeId = req.params.sid;
	let store;

	try {
		store = await Store.findById(storeId);
	} catch (error) {
		return next(
			new HttpError(
				error.message,
				500
			)
		);
		
	}
	
	if (!store) {
		return next(
			new HttpError(
				'Could not find store',
				404
			)
		);
	}

	console.log(typeof stores);
	// res.json({ store: store.toObject( {getters: true} )});
}

const getDrugsByStoreId = async(req, res, next) => {
	const storeId = req.params.sid;

	let storeDrugs;

	try {
		storeDrugs = await Store.findById(storeId).drugs;
	} catch (error) {
		console.log("Error in getDrugsByStoreId: ", error);
		return next(
			new HttpError(
				error.message,
				500
			)
		);
	}
	if (!storeDrugs || storeDrugs.length === 0) {
		return next(
			new HttpError(
				'Could not find drugs in store',
				404
			)
		);
	}
	//res.json({ drugs: storeDrugs.toObject({getters: true}) }).status(200);
}

const createStore = async(req, res, next) => {
	const {name, address} = req.body;

	let location;
	try {
		location = await getCoordsForAddress(address);	
	} catch (error) {
		return next(error);
	}

	const createdStore = new Store({
		name, location, address, drugs: []
	});
	
	try {
		await createdStore.save();
	} catch(error) {
		return next(
			new HttpError(
				error.message,
				500
			)
		)
	}
	res.status(200).json({store: createdStore.toObject({getters: true})});
}

exports.getDrugsByStoreId = getDrugsByStoreId;
exports.getStoreById = getStoreById;
exports.createStore = createStore;
exports.getAllStores = getAllStores;
