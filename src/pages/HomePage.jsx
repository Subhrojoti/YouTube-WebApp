import Sidebar from "../Components/SideBar/Sidebar";
import { dummyData } from "../DummyData/dummyData";
import Card from "../Components/Card.jsx";

const HomePage = () => {
  return (
    <div className="flex flex-row h-[calc(100%-60px)]">
      <Sidebar />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-white">
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] py-4 pr-4 max-sm:pl-4 max-md:pl-4">
          {dummyData.map((items, k) => (
            <Card key={k} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
