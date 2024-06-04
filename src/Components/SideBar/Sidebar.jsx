import { LeftNavCategories } from "../../Constants/LeftNavCategories";

const Sidebar = () => {
  return (
    <div className="xl:w-[15%] md:w-[5%] hidden md:block">
      <div className="flex flex-col gap-1 justify-center">
        {LeftNavCategories.map((item, i) => (
          <>
            <div
              key={i}
              className="flex xl:gap-2 h-[40px] items-center text-lg xl:pl-2 mx-auto xl:mx-0 cursor-pointer hover:bg-gray-100 hover:rounded-lg"
            >
              <span>{item.icon}</span>
              <span className="hidden xl:block">{item.name}</span>
            </div>
            {item.divider && <hr className="bg-black my-2" />}
          </>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
