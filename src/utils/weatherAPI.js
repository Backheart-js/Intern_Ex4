import httpRequest from "./httpRequest";
import apiConfig from "../config/apiConfig";

const weatherAPI = {
    getForecast: function(params) {
        const url = `forecast.json?key=${apiConfig.apiKey}`;
        return httpRequest.get(url, params)
    }
}

export default weatherAPI;