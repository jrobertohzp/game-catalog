import axios from "axios";

const key = "f810ebf01eef47fc9bc8d24899583e70";
const axiosCreate = axios.create({
    baseURL: "https://api.rawg.io/api"
})

const getGenreList = axiosCreate.get("/genres?key=" + key);
const getAllGames = axiosCreate.get("/games?key=" + key);



export default {
    getGenreList,
    getAllGames
}