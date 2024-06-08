import { useSelector } from "react-redux";
import VideoCard from "../Components/VideoCard/VideoCard";

const WatchListPage = () => {
  // list of all the watch list videos from the redux state
  const watchList = useSelector((state) => state.user.watchList);

  return (
    <div className="grow h-full w-[calc(100%-240px)] overflow-y-auto bg-white">
      <div className="grid grid-cols-1 gap-2 p-5">
        {watchList.length === 0 ? (
          <h1 className="text-3xl font-bold">
            No Video is added to Watch List.
          </h1>
        ) : (
          watchList.map((video, k) => (
            <VideoCard
              key={k}
              cardType={"watchList"}
              video={video}
              views={video?.stats?.views}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default WatchListPage;
