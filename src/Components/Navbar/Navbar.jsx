import logo from "../../assets/logo.png";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="h-[60px] flex w-full items-center justify-between">
      <div className="h-full">
        <img src={logo} alt="logo" className="h-[100%]" />
      </div>
      <div className="hidden mx-2 md:flex items-center w-[50%] rounded-full border bg-gray-100 h-10 my-2 ">
        <input
          type="text"
          placeholder="Search"
          name="searchBox"
          id="searchBox"
          className="flex-grow h-full rounded-l-full p-4 focus:outline-none"
        />
        <FiSearch className="w-[50px] text-lg cursor-pointer" />
      </div>
      <div>
        {/* need to apply logic that if logged in profile icon will display else sign up button  */}
        <button className="rounded-full bg-gray-100 w-[80px] h-10 cursor-pointer">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
