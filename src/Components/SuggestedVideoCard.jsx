import React from "react";
import cardPic from "../assets/thumnailSample.jpg";

const SuggestedVideoCard = () => {
  return (
    <div className="flex mb-3">
      <div className="relative h-24 lg:h-20 xl:h-24 w-40 min-w-[168px] lg:w-32 lg:min-w-[128px] xl:w-40 xl:min-w-[168px] rounded-xl bg-slate-800 overflow-hidden">
        <img className="h-full w-full object-cover" src={cardPic} />
      </div>
      <div className="flex flex-col ml-3 overflow-hidden">
        <span className="text-sm lg:text-xs xl:text-sm font-bold line-clamp-2 text-black">
          LIVE 100T vs. FUT - VCT Masters Shanghai - Playoffss
        </span>
        <span className="text-[12px] lg:text-[10px] xl:text-[12px] font-semibold mt-2 text-gray-400 flex items-center">
          Valorant Officials
        </span>
        <div className="flex text-[12px] lg:text-[10px] xl:text-[12px] font-semibold text-gray-400 truncate overflow-hidden">
          <span>227k views</span>
          <span className="flex text-[24px] leading-none font-bold text-gray-400 relative top-[-10px] mx-1">
            .
          </span>
          <span className="truncate">1 month ago</span>
        </div>
      </div>
    </div>
  );
};

export default SuggestedVideoCard;
