import React from "react";
import { Link } from "react-router-dom";
import thumnail from "../assets/thumnailSample.jpg";
import logo from "../assets/logo.jpg";

const SearchResultVideoCard = () => {
  return (
    <Link to="/video/1">
      <div className="flex flex-col md:flex-row mb-8 md:mb-3 lg:hover:bg-gray-200 rounded-xl md:p-4">
        <div className="relative flex shrink-0 h-48 md:h-28 lg:h-40 xl:h-48 w-full md:w-48 lg:w-64 xl:w-80 rounded-xl bg-slate-800 overflow-hidden">
          <img className="h-full w-full object-cover" src={thumnail} />
        </div>
        <div className="flex flex-col ml-4 md:ml-6 mt-4 md:mt-0 overflow-hidden">
          <span className="text-lg md:text-2xl font-semibold line-clamp-2 text-black">
            LIVE 100T vs. FUT - VCT Masters Shanghai - Playoffss
          </span>
          <span className="empty:hidden text-sm line-clamp-1 md:line-clamp-2 text-gray-500 md:pr-24 md:my-4">
            This channel is emotion , Sir If the way you describe the things
            will be adopted by the schools and colleges , Education will be as
            interesting as people found fun in reels ........️
          </span>
          <div className="hidden md:flex items-center">
            <div className="flex items-start mr-3">
              <div className="flex h-9 w-9 rounded-full overflow-hidden">
                <img className="h-full w-full object-cover" src={logo} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold mt-2 text-gray-500 flex items-center">
                Valorant Officials
              </span>
              <div className="flex text-sm font-semibold text-gray-500 truncate overflow-hidden">
                <span>22k views</span>
                <span className="flex text-[24px] leading-none font-bold text-gray-400 relative top-[-10px] mx-1">
                  .
                </span>
                <span className="truncate"> 1 month ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultVideoCard;
