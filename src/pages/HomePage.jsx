import { useEffect } from "react";
import Card from "../Components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchHomeVideos } from "../utils/Api/fetchHomeVideos";
import { addVideo } from "../Redux/features/homeVideoSlice";

const HomePage = () => {
  const videos = useSelector((state) => state.homeVideo.allVideos);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchHomeVideos();
        dispatch(addVideo(data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-white">
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] py-4 pr-4 max-sm:pl-4 max-md:pl-4">
        {videos &&
          videos.map((video, i) => {
            if (video.type !== "video") return false;
            return (
              <Card
                key={i}
                video={video?.video}
                time={video?.video?.lengthSeconds}
                views={video?.video?.stats?.views}
              />
            );
          })}
      </div>
    </div>
  );
};

export default HomePage;
