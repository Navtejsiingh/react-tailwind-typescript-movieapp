import Reac from "react";
import axios from "axios";


const baseUrl = process.env.REACT_APP_API_URL as string
const apiKey = process.env.REACT_APP_API_KEY

interface SearchParams {
    [key: string]: any
}
// GET

export const getMovies = async (searchParams: SearchParams) => {
    try {
        const params = { ...searchParams, apikey: apiKey }
        const response = await axios.get(baseUrl, { params })
        return response.data
    } catch (error) {
        console.log("Error", error)
    }
}