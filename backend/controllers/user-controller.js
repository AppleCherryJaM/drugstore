// const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const User = require('../models/users');
const HttpError = require("../models/httpError");

const getUsers = async (req, res, next) => {
	let users;
	try {
		users = await User.find({}, "email orders");
	} catch (error) {
		return next(
			new HttpError(
				error.message,
				500
			)
		);
	}

	res.status(200).json({
		users: users.map(
			user => user.toObject({
				getters: true
			})
		)
	});
}

const _findUserByEmail = async (email) => {
	let user;
	try {
		user = await User.find({ email: email });
	} catch (error) {
		return next(
			new HttpError(
				error.message,
				500
			)
		);
	}
	return user;
}

const signUp = async (req, res, next) => {
	// const error = validationResult(req);

	// if (!error.isEmpty) {
	// 	return next(
	// 		new HttpError('Invalid input', 422)
	// 	);
	// }

	const { email, password } = req.body;

	const isUserExist = Object.keys(await _findUserByEmail(email)).length > 0;
	if (isUserExist) {
		return next(
			new HttpError(
				'This email is already used',
				422
			)
		);
	}

	const createdUser = new User({
		email,
		password,
		orders: []
	});

	try {
		await createdUser.save()
	} catch (error) {
		return next(
			new HttpError(
				error.message,
				500
			)
		);
	}

	res.status(201).json({ user: createdUser.toObject({ getters: true }) });
}

const login = async (req, res, next) => {
	const { email, password } = req.body;

	const identifiedUser = await _findUserByEmail(email);

	if (!identifiedUser || identifiedUser.password !== password) {
		return next(
			new HttpError(
				'Could not identify user, credentials are wrong',
				401
			)
		);
	}

	res.json({ message: 'Logged in' }).status(200);
}

exports.getUsers = getUsers;
exports.signUp = signUp;
exports.login = login;