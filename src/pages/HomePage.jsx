import { useEffect, useState } from "react";
import Card from "../Components/Card";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addVideo } from "../Redux/features/homeVideoSlice";
const HomePage = () => {
  const videos = useSelector((state) => state.homeVideo.allVideos);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://youtube-data8.p.rapidapi.com/video/related-contents/",
        params: {
          id: "kJQP7kiw5Fk",
          hl: "en",
          gl: "US",
        },
        headers: {
          "X-RapidAPI-Key":
            "71c64329e8mshd870f6e8514d195p1dd0d6jsn4512c5fac084",
          "X-RapidAPI-Host": "youtube-data8.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request(options);
        dispatch(addVideo(response.data.contents));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-auto-fit gap-4">
      {videos &&
        videos.map((video) => (
          <>
            {video.type === "video" && (
              <Card
                key={video.index}
                cardPic={video?.video?.thumbnails[0]?.url}
                channelLogo={video?.video?.author?.avatar[0]?.url}
                time={video?.video?.lengthSeconds}
                title={video?.video?.title}
                channelName={video?.video?.author?.title}
                published={video?.video?.publishedTimeText}
                views={video?.video?.stats?.views}
              />
            )}
          </>
        ))}
    </div>
  );
};

export default HomePage;
