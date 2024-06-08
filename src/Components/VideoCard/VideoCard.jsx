import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { noOfViews } from "../../utils/helperFunction/noOfViews";
import { IoMdMore } from "react-icons/io";
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWatchList, removeWatchList } from "../../Redux/features/userSlice";
import { published } from "../../utils/helperFunction/published";
import { Zoom, toast } from "react-toastify";
import { UpdateFireStore } from "../../utils/helperFunction/updateFireStore";

const VideoCard = ({ cardType, video, views }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);
  const iconRef = useRef(null);
  const userState = useSelector((state) => state.user);
  const [user, setUser] = useState(userState);
  const watchList = useSelector((state) => state?.user?.watchList);
  const isAdded = watchList.some((vid) => vid?.videoId === video?.videoId);
  const dispatch = useDispatch();
  let view = noOfViews(views);
  const token = localStorage.getItem("token");

  // console.log(user);

  useEffect(() => {
    setUser(userState);
  }, [userState, dispatch]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleWatchList = async () => {
    if (cardType === "watchList") {
      dispatch(removeWatchList(video));
      toast.success("Removed from watchList", { transition: Zoom });
      await UpdateFireStore(user);
    } else if (token) {
      if (!isAdded) {
        dispatch(addWatchList(video));
        toast.success("Added to watchList", { transition: Zoom });
        await UpdateFireStore(user);
      } else {
        toast.info("Already added", { transition: Zoom });
      }
    } else {
      toast.info("Need to Login", { transition: Zoom });
    }
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (
      popupRef.current &&
      !popupRef.current.contains(event.target) &&
      iconRef.current &&
      !iconRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="flex flex-col md:flex-row mb-8 md:mb-3 lg:hover:bg-gray-200 rounded-xl md:p-4">
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex flex-col md:flex-row mb-8 md:mb-3 lg:hover:bg-gray-200 rounded-xl md:p-4 ">
          <div className="relative flex shrink-0 h-48 md:h-28 lg:h-40 xl:h-48 w-full md:w-48 lg:w-64 xl:w-80 rounded-xl bg-slate-800 overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={video?.thumbnails[0]?.url}
            />
          </div>
          <div className="flex flex-col ml-4 md:ml-6 mt-4 md:mt-0 overflow-hidden">
            <span className="text-lg md:text-2xl font-semibold line-clamp-2 text-black">
              {video?.title}
            </span>
            <span className="empty:hidden text-sm line-clamp-1 md:line-clamp-2 text-gray-500 md:pr-24 md:my-4">
              {video?.descriptionSnippet || video?.description}
            </span>
            <div className="hidden md:flex items-center">
              <div className="flex items-start mr-3">
                <div className="flex h-9 w-9 rounded-full overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={video?.author?.avatar[0]?.url}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold mt-2 text-gray-500 flex items-center">
                  {video?.author?.title}
                </span>
                <div className="flex text-sm font-semibold text-gray-500 truncate overflow-hidden">
                  <span>{view}</span>
                  <span className="flex text-[24px] leading-none font-bold text-gray-400 relative top-[-10px] mx-1">
                    .
                  </span>
                  <span className="truncate">
                    {video?.publishedTimeText === undefined
                      ? published(video?.publishedDate?.slice(0, 10))
                      : video?.publishedTimeText}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      <span className="mt-4 relative " ref={iconRef}>
        <IoMdMore size={25} onClick={toggleMenu} className="" />
        {isOpen && (
          <span
            className="absolute right-0 bg-gray-100 rounded-md min-w-max p-2 cursor-pointer"
            onClick={handleWatchList}
            ref={popupRef}
          >
            {cardType === "watchList" ? "Remove WatchList" : "Add To WatchList"}
          </span>
        )}
      </span>
    </div>
  );
};

VideoCard.propTypes = {
  video: PropTypes.object,
  views: PropTypes.number,
  cardType: PropTypes.string,
};
export default VideoCard;
