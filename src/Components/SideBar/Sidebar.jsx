import { LeftNavCategories } from "../../Constants/LeftNavCategories";

const Sidebar = () => {
  console.log(LeftNavCategories);
  return (
    <div className="w-[15%] ml-4">
      <div className="flex flex-col gap-1 justify-center">
        {LeftNavCategories.map((item, i) => (
          <>
            <div
              key={i}
              className="flex gap-2 h-[40px] items-center text-lg pl-2 cursor-pointer hover:bg-gray-100 hover:rounded-lg"
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </div>
            {item.divider && <hr className="bg-black my-2" />}
          </>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
