import cardPic from "../assets/thumnailSample.jpg";
import channellogo from "../assets/logo.jpg";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <Link to="/video/1">
      <div className="flex flex-col gap-2">
        <a href="#" className="relative aspect-video">
          <img
            src={cardPic}
            className="block w-full h-full object-cover rounded-xl"
          />
          <div className="absolute bottom-1 right-1 bg-black bg-opacity-50 text-white text-sm px-1 rounded">
            10.19
          </div>
          <div className="absolute top-1 right-1 bg-black w-7 h-7 flex items-center justify-center bg-opacity-60 rounded-full ">
            <MdOutlinePlaylistAdd color="white" size={21} />
          </div>
        </a>
        <div className="flex gap-2">
          <a href="#" className="flex-shrink-0">
            <img className="w-10 h-10 rounded-full" src={channellogo} />
          </a>
          <div className="flex flex-col">
            <a href="#" className="font-bold">
              LIVE 100T vs. FUT - VCT Masters Shanghai - Playoffss
            </a>
            <a href="#" className="text-gray-500 text-sm ">
              Valorant Officials
            </a>
            <div className="text-gray-500 text-sm">227K views • 2 days ago</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
