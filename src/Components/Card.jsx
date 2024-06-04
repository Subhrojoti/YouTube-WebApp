// import cardPic from "../assets/thumnailSample.jpg";
// import channelLogo from "../assets/logo.jpg";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import moment from "moment";

const Card = ({
  cardPic,
  channelLogo,
  time,
  title,
  channelName,
  published,
  views,
}) => {
  let noOfviews =
    Math.floor(views / 1000) === 0
      ? views
      : Math.floor(views / 1000000) === 0
      ? `${Math.floor(views / 1000)}K`
      : Math.floor(views / 1000000000) === 0
      ? `${Math.floor(views / 1000000)}M`
      : `${Math.floor(views / 1000000000)}B`;
  return (
    <div className="flex flex-col gap-2">
      <a href="#" className="relative aspect-video">
        <img
          src={cardPic}
          className="block w-full h-full object-cover rounded-xl"
        />
        <div className="absolute bottom-1 right-1 bg-black bg-opacity-50 text-white text-sm px-1 rounded">
          {moment().startOf("day").seconds(time).format("H:mm:ss")}
        </div>
        <div className="absolute top-1 right-1 bg-black w-7 h-7 flex items-center justify-center bg-opacity-60 rounded-full ">
          <MdOutlinePlaylistAdd color="white" size={21} />
        </div>
      </a>
      <div className="flex gap-2">
        <a href="#" className="flex-shrink-0">
          <img className="w-10 h-10 rounded-full" src={channelLogo} />
        </a>
        <div className="flex flex-col">
          <a href="#" className="font-bold line-clamp-1">
            {title}
          </a>
          <a href="#" className="text-gray-500 text-sm ">
            {channelName}
          </a>
          <div className="text-gray-500 text-sm">
            {noOfviews} views • {published}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
