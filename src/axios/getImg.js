import axios from "axios"
import { API_KEY, BASE_URL } from "../helpers/api"

axios.defaults.baseURL = BASE_URL

export const getImg = async (serchText, page = 1) => {
    
    const res = await axios.get("", {
      params: {
        query: serchText,
        page: page,
        per_page: 5,
        client_id: API_KEY,
        //   lang: uk,
      }
    });
    return res.data.results
}