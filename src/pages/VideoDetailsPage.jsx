import React, { useEffect, useState, useRef } from "react";
import ReactPlayer from "react-player";
import { AiOutlineLike } from "react-icons/ai";
import SuggestedVideoCard from "../Components/SuggestedVideoCard/SuggestedVideoCard";
import { useParams } from "react-router-dom";
import { fetchRelatedVideo } from "../utils/Api/fetchRelatedVideo";
import { fetchVideoDetails } from "../utils/Api/fetchVideoDetails";
import { noOfViews } from "../utils/helperFunction/noOfViews";
import { MdMoreHoriz } from "react-icons/md";
import { addWatchList } from "../Redux/features/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { Zoom, toast } from "react-toastify";
import { UpdateFireStore } from "../utils/helperFunction/updateFireStore";

const VideoDetailsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);
  const iconRef = useRef(null);
  const { videoId } = useParams();
  const [videoDetail, setVideoDetail] = useState({});
  const [getRelatedVideo, setGetRelatedVideos] = useState([]);
  const dispatch = useDispatch();
  const watchList = useSelector((state) => state.user.watchList);
  const isAdded = watchList.some((vid) => vid.videoId === videoId);
  const token = localStorage.getItem("token");
  const userState = useSelector((state) => state.user);
  const [user, setUser] = useState(userState);

  const handleWatchList = async () => {
    // add logic that if not logged in redirect to login page
    if (token) {
      if (!isAdded) {
        dispatch(addWatchList(videoDetail));
        toast.success("Added to WatchList", { transition: Zoom });
        await UpdateFireStore(user);
        setIsOpen(!isOpen);
      } else {
        toast.info("Already added", { transition: Zoom });
        setIsOpen(!isOpen);
      }
    } else {
      toast.info("need to login", { transition: Zoom });
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    setUser(userState);
  }, [userState, dispatch]);

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

  useEffect(() => {
    const handleRelatedVideo = async () => {
      try {
        const data = await fetchRelatedVideo(videoId);
        setGetRelatedVideos(data);
        const details = await fetchVideoDetails(videoId);
        setVideoDetail(details);
      } catch (error) {
        console.log(error);
      }
    };
    handleRelatedVideo();
  }, [videoId]);

  return (
    <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-white">
      <div className="flex justify-center flex-row h-[100%] bg-white w-full">
        <div className="w-full max-w-[1280px] flex flex-col lg:flex-row">
          <div className="flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 ">
            <div className="h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg:mr-0">
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${videoId}`}
                controls
                width="100%"
                height="100%"
                playing={true}
              />
            </div>
            <div className="text-black font-bold text-sm md:text-xl mt-4 line-clamp-2">
              {videoDetail?.title}
            </div>
            <div className="flex justify-between flex-col md:flex-row mt-4">
              <div className="flex">
                <div className="flex items-start">
                  <div className="flex h-11 w-11 rounded-full overflow-hidden">
                    <img
                      className="h-full w-full object-cover"
                      src={videoDetail?.author?.avatar[0]?.url}
                    />
                  </div>
                </div>
                <div className="flex flex-col ml-3">
                  <div className="text-black text-md font-semibold flex items-center">
                    {videoDetail?.author?.title}
                  </div>
                  <div className="text-gray-400 text-sm">{`${videoDetail?.author?.stats?.subscribersText}`}</div>
                </div>
              </div>
              <div className="flex text-black mt-4 md:mt-0">
                <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-black/30">
                  <AiOutlineLike className="text-xl text-black mr-2" />
                  {`${noOfViews(videoDetail?.stats?.likes)} likes`}
                </div>
                <div className="flex items-center justify-center h-11 px-6 rounded-3xl bg-black/30 ml-4">
                  {/* <AiOutlineLike className="text-xl text-balck mr-2 " /> */}
                  {`${noOfViews(videoDetail?.stats?.views)} views`}
                </div>
                <span
                  className="flex items-center justify-center h-11 w-11 rounded-full bg-black/30 ml-4 relative"
                  ref={iconRef}
                >
                  <MdMoreHoriz size={25} onClick={() => setIsOpen(!isOpen)} />
                  {isOpen && (
                    <span
                      className="absolute right-0 bottom-[-100%] z-10 bg-black/30 rounded-md min-w-max p-2 cursor-pointer"
                      onClick={handleWatchList}
                      ref={popupRef}
                    >
                      Add To WatchList
                    </span>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col py-6 px-4  lg:w-[350px] xl:w-[400px]">
            {getRelatedVideo.map((video, index) => {
              return (
                <React.Fragment key={index}>
                  <SuggestedVideoCard
                    video={video?.video}
                    views={video?.video?.stats?.views}
                  />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetailsPage;
