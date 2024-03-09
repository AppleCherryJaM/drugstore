const mongoose = require("mongoose");

const getCoordsForAddress = require("../util/location");
const Store = require("../models/stores");
const Drug = require("../models/drugs");
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
	res.json({ store: store.toObject( {getters: true} )});
}

const getDrugsByStoreId = async(req, res, next) => {
	const storeId = req.params.sid;

	let store;
	let storeDrugs = [];

	try {
		store = await Store.findById(storeId);
	} catch (error) {
		console.log("Error in getDrugsByStoreId: ", error);
		return next(
			new HttpError(
				error.message,
				500
			)
		);
	}
	if (!store || store.drugs.length === 0) {
		return next(
			new HttpError(
				'Could not find drugs in store',
				404
			)
		);
	}

	try {
		for (const drug of store.drugs) {
			const storedDrug = await Drug.findById(drug);
			storeDrugs.push(storedDrug);
		}
	} catch (error) {
		return next(
			new HttpError(
				error.message,
				500
			)
		);
	}

	res.json({ drugs: storeDrugs.map(drug => drug.toObject({getters: true})) }).status(200);
}

const createStore = async(req, res, next) => {
	const {name, address} = req.body;
	const drugs = req.body.drugs || [
		"65ec886d472483b3fade13bd", 
		"65ec8932472483b3fade13bf", 
		"65ec8993472483b3fade13c1", 
		"65ec89f5472483b3fade13c3", 
		"65ec8a56472483b3fade13c5", 
		"65ec8a7b472483b3fade13c7", 
		"65ec8ae7472483b3fade13c9"
	];

	let location;
	try {
		location = await getCoordsForAddress(address);	
	} catch (error) {
		return next(error);
	}

	const createdStore = new Store({
		name, location, address, drugs
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

const addStoreDrugs = async (req, res, next) => {
	const storeId = req.params.sid;
	const {drugs} = req.body;

	let updatedStore;
	try {
		updatedStore = await Store.findById(storeId);
	} catch (error) {
		return next(
			new HttpError(
				error.message,
				500
			)
		)
	}

	if (!updatedStore) {
		return next(
			new HttpError(
				"Can not find store with this id",
				404
			)
		)
	}

	if (updatedStore.drugs || updatedStore.drugs.length > 0) {
		updatedStore.drugs = updatedStore.drugs.concat(drugs);
	} else {
		updatedStore.drugs = drugs;
	}

	try {
		await updatedStore.save();
	} catch (error) {
		return next(
			new HttpError(
				error.message,
				500
			)
		)
	}

	res.status(200).json({updatedStore: updatedStore.toObject({getters:true})});
}

exports.getDrugsByStoreId = getDrugsByStoreId;
exports.getStoreById = getStoreById;
exports.createStore = createStore;
exports.getAllStores = getAllStores;
exports.addStoreDrugs = addStoreDrugs;
