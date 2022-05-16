const { default: axios } = require("axios");

class ApiService {
    constructor() {
        /**
         * @private
         */
        this._service = axios.create({
            baseURL: "https://localtest.me:8000",
        });
    }

    post(endpoint, data) {
        return this._service.post(endpoint, data);
    }
}

module.exports = ApiService;
