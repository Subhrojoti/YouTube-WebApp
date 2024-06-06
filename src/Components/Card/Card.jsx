import { MdOutlinePlaylistAdd } from "react-icons/md";
import moment from "moment";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { noOfViews } from "../../utils/helperFunction/noOfViews";
import { useDispatch, useSelector } from "react-redux";
import { addWatchList } from "../../Redux/features/userSlice";

const Card = ({ video, time, views }) => {
  const watchList = useSelector((state) => state.user.watchList);
  const isAdded = watchList.some((vid) => vid.videoId === video.videoId);
  const dispatch = useDispatch();
  let view = noOfViews(views);

  const handleWatchList = () => {
    // add logic that if not logged in redirect to login page
    if (!isAdded) dispatch(addWatchList(video));
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="relative aspect-video">
        <Link to={`/video/${video?.videoId}`}>
          <img
            src={video?.thumbnails[0]?.url}
            className="block w-full h-full object-cover rounded-xl"
          />
        </Link>
        <div className="absolute bottom-1 right-1 bg-black bg-opacity-50 text-white text-sm px-1 rounded">
          {time === null
            ? ""
            : moment()?.startOf("day")?.seconds(time)?.format("H:mm:ss")}
        </div>
        <div className="absolute top-1 right-1 z-10 bg-black w-7 h-7 flex items-center justify-center bg-opacity-60 rounded-full ">
          <MdOutlinePlaylistAdd
            color="white"
            size={21}
            onClick={handleWatchList}
          />
        </div>
      </div>
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex gap-2">
          <div className="flex-shrink-0">
            <img
              className="w-10 h-10 rounded-full"
              src={video?.author?.avatar[0]?.url}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold line-clamp-1">{video?.title}</span>
            <span className="text-gray-500 text-sm ">
              {video?.author?.title}
            </span>
            <div className="text-gray-500 text-sm">
              {views === undefined
                ? `Live`
                : `${view} views • ${video?.publishedTimeText}`}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
Card.propTypes = {
  video: PropTypes.object,
  views: PropTypes.number,
  time: PropTypes.number,
};
export default Card;
