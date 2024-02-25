import axios from "axios";

const key = "92963632715247cfbc8558abdc610b2e";
const axiosCreate = axios.create({
    baseURL: "https://api.rawg.io/api"
}

)

const getGenreList = axiosCreate.get('/genres?key='+key)
const getAllGames = axiosCreate.get('/games?key='+key)
export default {
    getGenreList,
    getAllGames 
}