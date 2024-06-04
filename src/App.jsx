import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/SideBar/Sidebar";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="w-[100%] 2xl:w-[1536px] mx-auto pl-1 pr-4">
      <Navbar />
      <div className="flex mt-4 gap-4">
        <Sidebar />
        <div className="xl:w-[85%] md:w-[95%] w-[100%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
