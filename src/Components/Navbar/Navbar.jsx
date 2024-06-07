import logo from "../../assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  const handleSearch = () => {
    if (searchTerm?.length > 0) {
      navigate(`/searchResult/${searchTerm}`);
    }
  };
  return (
    <div className="h-[60px] flex w-full items-center justify-between">
      <div className="h-full">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="h-[100%]" />
        </Link>
      </div>
      <div className="hidden mx-2 md:flex items-center w-[50%] rounded-full border bg-gray-100 h-10 my-2 ">
        <input
          type="text"
          placeholder="Search"
          name="searchBox"
          id="searchBox"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyUp={(e) => (e.key === "Enter" ? handleSearch() : "")}
          className="flex-grow h-full rounded-l-full p-4 focus:outline-none"
        />
        <FiSearch
          className="w-[50px] text-lg cursor-pointer"
          onClick={handleSearch}
        />
      </div>
      <div className="pr-3">
        {/* need to apply logic that if logged in profile icon will display else sign up button  */}
        <button
          className="rounded-full bg-gray-100 w-[80px] h-10 cursor-pointer"
          onClick={() => navigate(`/signUp`)}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
