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
    }
}