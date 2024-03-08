const DB = require("../models/db");
const Store = require("../models/stores");
const HttpError = require("../models/httpError");

const getStoreById = (req, res, next) => {
	const storeId = req.params.sid;
	const store = DB.stores.find(store => Number(store.id) === Number(storeId));
	
	if (!store) {
		return next(
			new HttpError(
				'Could not find store',
				404
			)
		);
	}

	res.json({ store });
}
const getDrugsByStoreId = (req, res, next) => {
	const storeId = req.params.sid;

	const store = DB.stores.find(store => Number(store.id) === Number(storeId));
	if (!store) {
		return next(
			new HttpError(
				'Could not find store',
				404
			)
		);
	}
	res.json({ drugs: store.drugs });
}

const createStore = async(req, res, next) => {
	const {name, location, address} = req.body;
	const createdStore = new Store(
		name, location, address
	);
	try {
		await createStore.save();
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