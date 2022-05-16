const ApiService = require("./api.service");

class RecommendationsService {
    constructor() {
        /**
         * @private
         * @type {ApiService}
         */
        this._apiService = new ApiService();
    }

    /**
     * @param {object} payload
     * @param {string} payload.price_range
     * @param {string} payload.address
     */
    async getRecommendations(payload) {
        try {
            const { price_range, address } = payload;
            const data = new FormData();
            data.append("price_range", price_range);
            data.append("address", address);

            const url = "/recommendations";
            const response = await this._apiService.post(url, data);
            return response.data;
        } catch (error) {
            console.log("getRecommendations - error", error);
            throw error;
        }
    }
}

module.exports = RecommendationsService;
