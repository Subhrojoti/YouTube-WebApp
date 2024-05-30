import React from "react";
import cardPic from "../assets/thumnailSample.jpg";
import Channellogo from "../assets/logo.jpg";

const Card = () => {
  return (
    <div className="card-main h-[271px] w-[348px]  flex flex-col gap-2">
      <div className="bg-fuchsia-300 w-full h-[196px] rounded-lg overflow-hidden ">
        <img src={cardPic} className="w-full h-full object-cover" />
      </div>
      <div className="title-and-logo">
        <div className="logo flex items-start gap-2">
          <div className="">
            <img src={Channellogo} className=" rounded-full w-[50px] " />
          </div>
          <div className="font-semibold flex flex-col">
            <p>LIVE 100T vs. FUT - VCT Masters Shanghai Playoffs</p>
            <p className="text-gray-500 font font-normal text-sm">
              Valorant Officials
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
