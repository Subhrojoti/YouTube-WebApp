import { LeftNavCategories } from "../../Constants/LeftNavCategories";
import React from "react";

const Sidebar = () => {
  // console.log(LeftNavCategories);
  return (
    <div className="md:block w-[240px] overflow-y-auto h-full py-4 bg-white absolute md:relative z-10 translate-x-[-240px] md:translate-x-0 transition-all">
      <div className="flex px-5 flex-col">
        {LeftNavCategories.map((item, k) => (
          <React.Fragment key={k}>
            <div
              className={
                "text-black text-sm cursor-pointer h-10 flex items-center px-3 mb-[1px] rounded-lg hover:bg-white/[0.15]"
              }
            >
              <span className="text-xl mr-5">{item.icon} </span>
              {item.name}
            </div>
            {item.divider && <hr className="my-5 border-white/[0.2]" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
