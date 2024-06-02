import React from "react";
import SearchResultVideoCard from "../Components/SearchResultVideoCard";
import Sidebar from "../Components/SideBar/Sidebar";

import { dummyData } from "../DummyData/dummyData";

const SearchResultPage = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="grow h-full w-[calc(100%-240px)] overflow-y-auto bg-white">
        <div className="grid grid-cols-1 gap-2 p-5">
          {dummyData.map((i, k) => (
            <SearchResultVideoCard />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResultPage;
