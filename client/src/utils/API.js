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

    testCall: function (Data) {
        console.log("testCall..API.js");
        return axios.post("/testCall", Data);
    },

    getStrengths: function (Data) {
        console.log("getting strengths..API.js");
        return axios.post("students/getStrengths", Data);
    },

    updateStrengths: function (Data) {
        console.log("updating strengths..API.js");
        return axios.post("students/updateStrengths", Data);
    }
}