import axios from "axios";

export const fetchVideoDetails = async (videoId) => {
  const options = {
    method: "GET",
    url: "https://youtube-data8.p.rapidapi.com/video/details/",
    params: {
      id: videoId,
      hl: "en",
      gl: "US",
    },
    headers: {
      "x-rapidapi-key": "71c64329e8mshd870f6e8514d195p1dd0d6jsn4512c5fac084",
      "x-rapidapi-host": "youtube-data8.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
