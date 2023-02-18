import axios from "axios";
const BASE_URL = "https://newsapi.org/v2/everything?q="

export const getNews = async (query) => {
const response = await axios.get(BASE_URL + query, {
    headers: {
        Authorization: "09f92d771dab49b1843a2a7ee19fbfa1"
    }
})
return response
}
