import axios from "axios";

export const DEFAULT_PLACEHOLDER_PAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";
const apiKey = "9735f200-e7d4-4a8e-ade2-2b6aedec5010";
const BASE_URL = "https://kinopoiskapiunofficial.tech/api/v2.2";

export const getFilms = ({ searchValue, page }) =>
  axios.get(`${BASE_URL}/films`, {
    headers: {
      "X-API-KEY": apiKey,
      "Content-Type": "application/json",
    },
    params: {
      keyword: searchValue,
      page,
    },
  });


export const getFilmDetails = (id) =>
  axios.get(`${BASE_URL}/films/${id}`, {
    headers: {
      "X-API-KEY": apiKey,
      "Content-Type": "application/json",
    },
  });
