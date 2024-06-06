import axios from "axios";
import {
  BaseUrl,
  X_RapidAPI_Host,
  X_RapidAPI_Key,
} from "../Constants/ApiConstant";

export const fetchSearchResult = async (searchTerm) => {
  const options = {
    method: "GET",
    url: `${BaseUrl}/search/`,
    params: {
      q: searchTerm,
      hl: "en",
      gl: "US",
    },
    headers: {
      "x-rapidapi-key": X_RapidAPI_Key,
      "x-rapidapi-host": X_RapidAPI_Host,
    },
  };
  try {
    const response = await axios.request(options);
    return response.data.contents;
  } catch (error) {
    console.error(error);
  }
};
