<<<<<<< HEAD
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
	email: {type: String, required: true, unique: true}, 
	password: {type: String,  required: true, minlength: 5},
	orders: [{ type: mongoose.Types.ObjectId, required: true, ref: "Order" }]
});
userSchema.plugin(uniqueValidator);

=======
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
	email: {type: String, required: true, unique: true}, 
	password: {type: String,  required: true, minlength: 5}
});
userSchema.plugin(uniqueValidator);

>>>>>>> 94e13a3b3b7b6e7a62dfcba1336a1838b6e7633a
mongoose.model("User", userSchema);