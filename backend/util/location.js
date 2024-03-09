require("dotenv").config()
const axios = require("axios");
const HttpError = require("../models/httpError");

const API_KEY = process.env.GOOGLE_PLATFORM_API_KEY;

const getCoordsByAddress = async(address) => {
	const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${API_KEY}`);
	const data = response.data;

	if (!data || data.status === "ZERO_RESULTS" || data.status === "REQUEST_DENIED") {
		// throw new HttpError(
		// 	"Could not find location of store!",
		// 	422
		// );
		console.log("Used default coordinates");
		return {
			lat: 46.5806817,
			lng: 30.7838931
		}
	}

	console.log("LOCATION DATA: ", data);
	const location = data.results[0].geometry.location
	return location;;
}

module.exports = getCoordsByAddress;