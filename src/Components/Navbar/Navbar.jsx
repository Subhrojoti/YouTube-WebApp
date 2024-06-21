import logo from "../../assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import defaultUser from "../../assets/defaultUser.svg";
import { removeDetails } from "../../Redux/features/userSlice";
import { IoCloseCircle } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);
  const iconRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const profilePic = useSelector((state) => state.user.profilePhoto);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [submit, setSubmit] = useState(false);

  const handleOpenSearchOnSmallDevices = () => {
    // add logic to search on small devices
    setSubmit(true);
  };

  const handleCloseSubmit = () => {
    setSubmit(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // handles the show and hide functionality of sign in and logout
  const handleClickOutside = (event) => {
    if (
      popupRef.current &&
      !popupRef.current.contains(event.target) &&
      iconRef.current &&
      !iconRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // handles the search functionality
  const handleSearch = () => {
    if (searchTerm?.length > 0) {
      navigate(`/searchResult/${searchTerm}`);
      setSubmit(false);
    }
  };

  const handleLogout = () => {
    // logout functionality
    dispatch(removeDetails());
    localStorage.removeItem("token");
    navigate("/");
    setIsOpen(!isOpen);
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
      <span className="grow md:hidden"></span>
      <FiSearch
        className="w-[50px] md:hidden text-lg cursor-pointer"
        onClick={handleOpenSearchOnSmallDevices}
      />
      {submit && (
        <div className="fixed top-0 left-0 w-[100%] h-[100vh] overflow-auto bg-gray-500 bg-opacity-50 z-50">
          <div className=" w-[80%] relative mx-auto mt-2 flex items-center gap-2 bg-white border border-gray-300 shadow-md px-2  h-[50px]">
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
            <IoCloseCircle
              size={25}
              className=" text-gray-500 cursor-pointer"
              onClick={handleCloseSubmit}
            />
          </div>
        </div>
      )}
      <div className="pr-3">
        {token === null ? (
          <button
            className="rounded-full bg-youtube-red text-white w-[80px] h-10 cursor-pointer"
            onClick={() => navigate(`/signUp`)}
          >
            Sign In
          </button>
        ) : (
          <div className="rounded-full bg-gray-100 w-[40px] relative h-5 cursor-pointer  flex justify-center items-center">
            <img
              src={profilePic || defaultUser}
              alt="user"
              onClick={toggleMenu}
              ref={iconRef}
              className="rounded-full h-[40px] w-[40px]"
            />
            {isOpen && (
              <span
                className="absolute right-0 bottom-[-270%] z-10 bg-youtube-red text-white rounded-md min-w-max p-2 cursor-pointer"
                onClick={handleLogout}
                ref={popupRef}
              >
                Log Out
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
