const Order = require("../models/orders");
const HttpError = require("../models/httpError");

const createOrder = async (req, res, next) => {
	const { user_id, drug_id, drug_count, paycheck } = req.body;
	const createdOrder = new Order(
		user_id, 
		drug_id, 
		drug_count, 
		paycheck
	);
	
	let order;

	try {
		await order.save(createdOrder);
	} catch (error) {
		return next(new HttpError(
			error.message,
			500
		));
	}

	res.status(201).json({order: createdOrder.toObject({getters: true})});
}
const findAllOrdersByUserEmail = async (req, res, next) => {

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
exports.findAllOrdersByUserEmail = findAllOrdersByUserEmail;
