import React from "react";
import logo from "../assets/logo.jpg";
import WatchListCard from "../Components/CardForTesting/WatchListCard";
import { dummyData } from "../DummyData/dummyData";

const ChannelPage = () => {
  return (
    <div className="flex flex-col w-full  px-10 items-center pt-7 max-md:p-1 overflow-y-auto">
      <div className=" flex gap-2 max-md:flex-col max-md:items-center ">
        <div className="channel-logo w-44 h-44 bg-red-400 rounded-full overflow-hidden max-md:w-20 max-md:h-20">
          <img src={logo} className="object-cover w-full h-full" />
        </div>
        <div className="flex flex-col flex-wrap gap-2 w-[600px] max-md:w-[530px] justify-center max-md:items-center max-sm:w-[330px]">
          <p className="text-4xl font-semibold ">Valorant</p>
          <p className="text-gray-400 flex flex-wrap max-md:text-center">
            Small Description about the youtuber, this is just a sample text
            their is no meaning of this text so you can ignore it for now and i
            dont know what to write so i am writing what coming on my mind
          </p>
          <p>223k subscribers</p>
        </div>
      </div>
      <p className="text-5xl mt-4 font-bold max-md:text-4xl max-md:my-4 max-sm:text-2xl">
        All Watchlist
      </p>
      <div className="watchList  h-full w-[100%]">
        <div className="">
          {dummyData.map((i, k) => (
            <div key={k}>
              <WatchListCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChannelPage;
