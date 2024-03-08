require("dotenv").config()
const axios = require("axios");
const HttpError = require("../models/httpError");

const API_KEY = process.env.GOOGLE_PLATFORM_API_KEY;

const getCoordsByAddress = async(address) => {
	const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${API_KEY}`);
	const data = response.data;

	if(!data || data.status === "ZERO_RESULTS") {
		throw new HttpError(
			"Could not find location of store!",
			422
		);
	}

	const location = data.results[0].geometry.location
	return location;;
}

module.exports = getCoordsByAddress;