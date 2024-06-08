import { GoHomeFill } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { RiPlayList2Fill } from "react-icons/ri";
import { FaFireAlt } from "react-icons/fa";
import { BsMusicNoteList } from "react-icons/bs";
import { MdLocalMovies } from "react-icons/md";

// sidebar navigation list
export const LeftNavCategories = [
  { name: "Home", type: "top", icon: <GoHomeFill /> },
  { name: "Shorts", type: "top", icon: <SiYoutubeshorts /> },
  {
    name: "Subscripitions",
    type: "top",
    icon: <MdSubscriptions />,
    divider: true,
  },
  { name: "You", type: "mid", icon: <MdOutlineAddToPhotos /> },
  { name: "Watch List", type: "mid", icon: <RiPlayList2Fill />, divider: true },
  { name: "Trending", type: "low", icon: <FaFireAlt /> },
  { name: "Musics", type: "low", icon: <BsMusicNoteList /> },
  { name: "Movies", type: "low", icon: <MdLocalMovies /> },
];
