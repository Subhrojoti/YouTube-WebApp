import { BsMusicNoteList } from "react-icons/bs";
import { FaFireAlt } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { MdLocalMovies, MdOutlineAddToPhotos } from "react-icons/md";

export const bottomNavList = [
  { name: "Home", type: "top", icon: <GoHomeFill size={25} /> },
  { name: "You", type: "mid", icon: <MdOutlineAddToPhotos size={25} /> },
  { name: "Trending", type: "low", icon: <FaFireAlt size={25} /> },
  { name: "Musics", type: "low", icon: <BsMusicNoteList size={25} /> },
  { name: "Movies", type: "low", icon: <MdLocalMovies size={25} /> },
];
