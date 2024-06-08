import logo from "../../assets/logo.png";
import { FiSearch } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import defaultUser from "../../assets/defaultUser.svg";
import { removeDetails } from "../../Redux/features/userSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);
  const iconRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const profilePic = useSelector((state) => state.user.profilePhoto);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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

  const handleSearch = () => {
    if (searchTerm?.length > 0) {
      navigate(`/searchResult/${searchTerm}`);
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
      <div className="pr-3">
        {/* need to apply logic that if logged in profile icon will display else sign up button  */}
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
