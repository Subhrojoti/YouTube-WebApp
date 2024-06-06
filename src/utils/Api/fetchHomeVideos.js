import axios from "axios";
import {
  BaseUrl,
  X_RapidAPI_Host,
  X_RapidAPI_Key,
} from "../Constants/ApiConstant";

export const fetchHomeVideos = async () => {
  const options = {
    method: "GET",
    url: `${BaseUrl}/search/`,
    params: {
      q: "videos",
      hl: "en",
      gl: "US",
    },
    headers: {
      "X-RapidAPI-Key": X_RapidAPI_Key,
      "X-RapidAPI-Host": X_RapidAPI_Host,
    },
  };
  try {
    const response = await axios.request(options);
    return response.data.contents;
    //   dispatch(addVideo());
  } catch (error) {
    console.log(error);
  }
};
