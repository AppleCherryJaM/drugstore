const Order = require("../models/orders");
const HttpError = require("../models/httpError");

const createOrder = async (req, res, next) => {
	const { contactInfo, totalPrice, store, orderedDrugs } = (typeof req.body) === "String" ? JSON.parse(req.body) : req.body;
	console.log("ContactInfo: ", contactInfo);
	const createdOrder = new Order({
		contactInfo: contactInfo,
		totalPrice: totalPrice,
		store: store,
		orderedDrugs: orderedDrugs
	});

	try {
		await createdOrder.save();
	} catch (error) {
		return next(new HttpError(
			error.message,
			500
		));
	}

	res.status(201).json({order: createdOrder.toObject({getters: true})});
}

const findAllOrdersByEmail = async (req, res, next) => {
	const email = req.params.email;
	console.log("Email: ", email);
	let orderList;
	try {
		orderList = await Order.find({}).where('contactInfo.email').equals(email)
	} catch (error) {
		return next(
			new HttpError(
				error.message,
				500
			)
		);
	}

	console.log("orderList: ", orderList);
	res.status(201).json({orderList: orderList.map(
		order => order.toObject(
			{ getters: true }
		)
	)});
}

const getOrderById = async (req, res, next) => {
	const orderId = req.param.oid;
	let order;
	try {
		order = await Order.findById(orderId);
	} catch (error) {
		return next(
			new HttpError(
				error.message,
				500
			)
		);
	}

	if (!order) {
		return next(
			new HttpError(
				"Could not find order",
				404
			)
		)
	}
	res.status(201).json({order: order.toObject({getters: true})})
}

exports.createOrder = createOrder;
exports.getOrderById = getOrderById;
exports.findAllOrdersByEmail = findAllOrdersByEmail;
