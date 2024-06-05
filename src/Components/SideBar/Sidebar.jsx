import { useNavigate } from "react-router-dom";
import { LeftNavCategories } from "../../utils/Constants/LeftNavCategories";
import React from "react";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleSideNav = (e) => {
    if (e.target.innerText === "Home") navigate("/");
    if (e.target.innerText === "Trending") navigate(`/searchResult/trending`);
    if (e.target.innerText === "Musics") navigate(`/searchResult/music`);
    if (e.target.innerText === "Movies") navigate(`/searchResult/movies`);
  };
  return (
    <div className="md:block xl:w-[240px] md:w-[100px] overflow-y-auto h-full py-4 bg-white absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all">
      <div className="flex px-5 flex-col">
        {LeftNavCategories.map((item, k) => (
          <React.Fragment key={k}>
            <div
              className={
                "text-black text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] hover:bg-gray-100 hover:rounded-lg"
              }
              onClick={handleSideNav}
            >
              <span className="text-xl mr-5">{item.icon} </span>
              <span className="hidden xl:block"> {item.name}</span>
            </div>
            {item.divider && <hr className="my-5 border-gray/[0.5]" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
