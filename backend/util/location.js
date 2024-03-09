require("dotenv").config()
const axios = require("axios");
const HttpError = require("../models/httpError");

const API_KEY = process.env.API_KEY;
// https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${API_KEY}
const getCoordsByAddress = async(address) => {
	const response = await axios.get(`https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=${API_KEY}`);
	const data = response.data;

	if (!data || data.status === "ZERO_RESULTS" || data.status === "REQUEST_DENIED") {
		console.log("Used default coordinates");
		return {
			lat: 46.5799227,
			lng: 30.7840081
		}
	}
	
	const location = {
		lat: data.features[0].geometry.coordinates[1],
		lng: data.features[0].geometry.coordinates[0]
	};
	return location;;
}

module.exports = getCoordsByAddress;