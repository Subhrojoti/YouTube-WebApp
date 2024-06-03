import React from "react";
import WatchListCard from "../Components/WatchListCard";
import Sidebar from "../Components/SideBar/Sidebar";

import { dummyData } from "../DummyData/dummyData";

const WatchListPage = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="grow h-full w-[calc(100%-240px)] overflow-y-auto bg-white">
        <div className="grid grid-cols-1 gap-2 p-5">
          {dummyData.map((i, k) => (
            <WatchListCard />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WatchListPage;
