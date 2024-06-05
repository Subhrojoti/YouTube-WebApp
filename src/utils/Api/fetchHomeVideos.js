import axios from "axios";

export const fetchHomeVideos = async () => {
  const options = {
    method: "GET",
    url: "https://youtube-data8.p.rapidapi.com/video/related-contents/",
    params: {
      id: "kJQP7kiw5Fk",
      hl: "en",
      gl: "US",
    },
    headers: {
      "X-RapidAPI-Key": "71c64329e8mshd870f6e8514d195p1dd0d6jsn4512c5fac084",
      "X-RapidAPI-Host": "youtube-data8.p.rapidapi.com",
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
