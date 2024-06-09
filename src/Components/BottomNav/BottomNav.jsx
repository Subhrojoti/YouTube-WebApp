import React from "react";
// import { bottomNavList } from "../../utils/Constants/BottomNavList";
import { useNavigate } from "react-router-dom";
import { bottomNavList } from "../../utils/Constants/BottomNavList";

const BottomNav = () => {
  const navigate = useNavigate();

  // handles the navigation of the bottom nav
  const handleSideNav = (name) => {
    if (name === "Home") navigate("/");
    if (name === "You") navigate("/auth/channel");
    if (name === "Trending") navigate(`/searchResult/trending`);
    if (name === "Musics") navigate(`/searchResult/songs`);
    if (name === "Movies") navigate(`/searchResult/movies`);
  };
  return (
    <div className="flex px-5 ">
      {bottomNavList.map((item, k) => (
        <React.Fragment key={k}>
          <div
            className={
              "text-black text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] hover:bg-gray-100 hover:rounded-lg"
            }
            onClick={() => handleSideNav(item.name)}
          >
            <span className="text-xl mr-5">{item.icon} </span>
            <span className="hidden"> {item.name}</span>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default BottomNav;
