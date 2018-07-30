import axios from "axios";

export default {

	// Saves a Account to the database
	registerAccount: function (Data) {
		console.log("registering..API.js");
		return axios.post("accounts/register", Data);
	},

	// Saves a Account to the database
	loginAccount: function (Data) {
		console.log("login..API.js ", Data);
		return axios.post("accounts/login", Data);
	},

	// retrieve all students from the database
	getAllStudents: function (Data) {
		console.log("getting all students..API.js");
		return axios.post("students/getAllStudents", Data);
	},

	// retrieve strengths from database
	getStudentInfo: function (Data) {
		console.log("getting strengths..API.js");
		return axios.post("students/getStudentInfo", Data);
	},

	// retrieve strengths from database
	getStrengths: function (Data) {
		console.log("getting strengths..API.js");
		return axios.post("students/getStrengths", Data);
	},

	// update strengths in database
	updateStrengths: function (Data) {
		console.log("updating strengths..API.js");
		return axios.post("students/updateStrengths", Data);
	},

	// retrieve meyers-briggs info from database
	getMBTI: function (Data) {
		console.log("getting mbti..API.js");
		return axios.post("students/getMBTI", Data);
	},

	// update meyers-briggs type indicators in the database
	updateMBTI: function (Data) {
		console.log("updating mbpi..API.js");
		return axios.post("students/updateMBTI", Data);
	},

	// retrieve Spiritual Gifts info from database
	getGifts: function (Data) {
		console.log("getting mbti..API.js");
		return axios.post("students/getGifts", Data);
	},

	// update spiritual gifts in the database
	updateGifts: function (Data) {
		console.log("updating gifts..API.js");
		return axios.post("students/updateGifts", Data);
	},

	// retrieve love languages info from database
	getLoveLanguages: function (Data) {
		console.log("getting mbti..API.js");
		return axios.post("students/getLoveLanguages", Data);
	},

	// update love languages in the database
	updateLoveLanguages: function (Data) {
		console.log("updating loveLanguages..API.js");
		return axios.post("students/updateLoveLanguages", Data);
	},

	// retrieve multiple intelligence info from database
	getIntelligences: function (Data) {
		console.log("getting intelligences..API.js");
		return axios.post("students/getIntelligences", Data);
	},

	// update multiple intelligences in the database
	updateIntelligences: function (Data) {
		console.log("updating intelligences..API.js");
		return axios.post("students/updateIntelligences", Data);
	},

	// save a cv
	saveDocument: function (Data) {
		console.log("saving document..API.js");
		return axios.post("students/saveDocument", Data);
	},

	// save jahari window document
	saveJahari: function (Data) {
		console.log("saving jahari..API.js");
		return axios.post("students/saveJahari", Data);
	},

	// save learning styles document
	saveLearningStyles: function (Data) {
		console.log("saving learningStyles..API.js");
		return axios.post("students/saveLearningStyles", Data);
	}
}