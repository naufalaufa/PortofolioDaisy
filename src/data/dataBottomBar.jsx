import { FaBlogger, FaHome } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { GrProjects } from "react-icons/gr";

export const dataBottomBar = [
  {
    id: 1,
    path: "/",
    icon: (
      <>
        <FaHome />
      </>
    ),
  },
  {
    id: 2,
    path: "/personal",
    icon: (
      <>
        <IoMdPerson />
      </>
    ),
  },
  {
    id: 3,
    path: "/project",
    icon: (
      <>
        <GrProjects />
      </>
    ),
  },
  {
    id: 4,
    path: "/blog",
    icon: (
      <>
        <FaBlogger />
      </>
    ),
  },
];
