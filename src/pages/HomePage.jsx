import Sidebar from "../Components/SideBar/Sidebar";

const HomePage = () => {
  return (
    <div className="flex mt-4 gap-4">
      <Sidebar />
      <div>Main Body</div>
    </div>
  );
};

export default HomePage;
