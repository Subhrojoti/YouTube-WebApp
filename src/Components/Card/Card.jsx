import { MdOutlinePlaylistAdd } from "react-icons/md";
import moment from "moment";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { noOfViews } from "../../utils/noOfViews";

const Card = ({ video, time, views }) => {
  let view = noOfViews(views);

  return (
    <Link to={`/video/${video?.videoId}`}>
      <div className="flex flex-col gap-2">
        <a href="#" className="relative aspect-video">
          <img
            src={video?.thumbnails[0]?.url}
            className="block w-full h-full object-cover rounded-xl"
          />
          <div className="absolute bottom-1 right-1 bg-black bg-opacity-50 text-white text-sm px-1 rounded">
            {time === null
              ? ""
              : moment()?.startOf("day")?.seconds(time)?.format("H:mm:ss")}
          </div>
          <div className="absolute top-1 right-1 bg-black w-7 h-7 flex items-center justify-center bg-opacity-60 rounded-full ">
            <MdOutlinePlaylistAdd color="white" size={21} />
          </div>
        </a>
        <div className="flex gap-2">
          <a href="#" className="flex-shrink-0">
            <img
              className="w-10 h-10 rounded-full"
              src={video?.author?.avatar[0]?.url}
            />
          </a>
          <div className="flex flex-col">
            <a href="#" className="font-bold line-clamp-1">
              {video?.title}
            </a>
            <a href="#" className="text-gray-500 text-sm ">
              {video?.author?.title}
            </a>
            <div className="text-gray-500 text-sm">
              {views === undefined
                ? `Live`
                : `${view} views • ${video?.publishedTimeText}`}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
Card.propTypes = {
  video: PropTypes.object,
  views: PropTypes.number,
  time: PropTypes.number,
};
export default Card;
