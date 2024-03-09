const Drug = require("../models/drugs");
const HttpError = require("../models/httpError");

const createDrug = async (req, res, next) => {
	const {name, price, image} = req.body;
	const createdDrug = new Drug({
		name, price, image, stores: [], date: new Date()
	});

	try {
		await createdDrug.save()
	} catch (error) {
		return next(
			new HttpError(
				error.message,
				500
			)
		)
	}
	res.status(200).json({ store: createdDrug.toObject({ getters: true }) });
}

const findStoresByDrugId = async (req, res, next) => {
	const drugId = req.param.did;
	let drug;
	try {
		drug = await Drug.findById(drugId);
	} catch (error) {
		return next(
			new HttpError(
				error.message,
				500
			)
		)
	}

	if (!drug) {
		return next(
			new HttpError(
				"Can not find this medicine",
				404
			)
		)
	}

	res.status(200).json({
		stores: drug.stores
	});
}

exports.findStoresByDrugId = findStoresByDrugId;
exports.createDrug = createDrug;