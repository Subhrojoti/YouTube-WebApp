import axios from "axios";
import {
  BaseUrl,
  X_RapidAPI_Host,
  X_RapidAPI_Key,
} from "../Constants/ApiConstant";

export const fetchRelatedVideo = async (videoId) => {
  const options = {
    method: "GET",
    url: `${BaseUrl}/video/related-contents/`,
    params: {
      id: videoId,
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
