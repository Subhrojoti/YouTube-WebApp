import WatchListCard from "../Components/WatchListCard/WatchListCard";

import { dummyData } from "../DummyData/dummyData";

const WatchListPage = () => {
  return (
    <div className="grow h-full w-[calc(100%-240px)] overflow-y-auto bg-white">
      <div className="grid grid-cols-1 gap-2 p-5">
        {dummyData.map((i, k) => (
          <WatchListCard key={k} />
        ))}
      </div>
    </div>
  );
};

export default WatchListPage;
