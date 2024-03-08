const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
	email: {type: String, required: true, unique: true}, 
	password: {type: String,  required: true, minlength: 5},
	orders: [{ type: mongoose.Types.ObjectId, required: true, ref: "Order" }]
});
userSchema.plugin(uniqueValidator);

mongoose.model("User", userSchema);