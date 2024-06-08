import { MdOutlinePlaylistAdd } from "react-icons/md";
import moment from "moment";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { noOfViews } from "../../utils/helperFunction/noOfViews";
import { useDispatch, useSelector } from "react-redux";
import { addWatchList } from "../../Redux/features/userSlice";
import { useEffect, useState } from "react";
import { Zoom, toast } from "react-toastify";
import { UpdateFireStore } from "../../utils/helperFunction/updateFireStore";

const Card = ({ video, time, views }) => {
  const watchList = useSelector((state) => state.user.watchList);
  const isAdded = watchList.some((vid) => vid.videoId === video.videoId);
  const dispatch = useDispatch();
  let view = noOfViews(views);
  const [showTooltip, setShowTooltip] = useState(false);
  const token = localStorage.getItem("token");
  const userState = useSelector((state) => state.user);
  const [user, setUser] = useState(userState);
  // console.log(user);

  useEffect(() => {
    setUser(userState);
  }, [userState, dispatch]);

  const handleWatchList = async () => {
    // add logic that if not logged in redirect to login page
    if (token) {
      if (!isAdded) {
        dispatch(addWatchList(video));
        toast.success("Added to WatchList", { transition: Zoom });
        await UpdateFireStore(user);
      } else {
        toast.info("Already added", { transition: Zoom });
      }
    } else {
      toast.info("need to login", { transition: Zoom });
    }
  };

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
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
        <div
          className="absolute top-1 right-1 z-10 cursor-pointer hover:w-[40px] hover:h-[40px]
           bg-black w-7 h-7 border border-gray-300 flex items-center justify-center bg-opacity-60 rounded-full "
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <MdOutlinePlaylistAdd
            color="white"
            size={21}
            className="hover:w-[80px]"
            onClick={handleWatchList}
          />
          {showTooltip && (
            <div className="absolute bottom-[-70px] left-0 max-w-fit transform -translate-x-1/2 mb-2 p-2 bg-gray-800 text-white text-sm rounded shadow-lg z-10">
              Add to WatchList
            </div>
          )}
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
