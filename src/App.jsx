import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/SideBar/Sidebar";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="container mx-auto px-4 ">
      <Navbar />
      <div className="flex mt-4 gap-4">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
