import axios from "axios";

export default {

    // Saves a Account to the database
    loginAccount: function () {
        console.log("login..API.js");
        return axios.get("accounts/auth/google");
    },

    testCall: function (Data) {
        console.log("testCall..API.js");
        return axios.post("/testCall", Data);
    }
}