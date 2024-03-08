const Order = require("../models/orders");
const HttpError = require("../models/httpError");

const createOrder = (req, res, next) => {
	const { user_id, drug_id, drug_count, paycheck } = req.body;
	const createdOrder = new Order(
		user_id, 
		drug_id, 
		drug_count, 
		paycheck
	);
	
	let order;

	try {
		order = Order.save(createdOrder);
	} catch (error) {
		
	}
}
const findAllOrdersByUserEmail = () => {}
const getOrderById = async(req, res, next) => {}

exports.createOrder = createOrder;