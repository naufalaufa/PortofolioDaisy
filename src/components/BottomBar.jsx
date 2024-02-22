import { FaHome } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { FaBlogger } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

const BottomBar = () => {
  return (
    <div className="fixed flex justify-center gap-5  bottom-1 w-[70%] lg:w-[35%] m-auto left-0 right-0 bg-white shadow-sm shadow-slate-700 p-3 rounded-md z-50 ">
      <NavLink
        to="/"
        className="p-2 bg-blue-400 rounded-full text-white hover:bg-black cursor-pointer shadow-sm shadow-slate-700 hover:scale-125 duration-200"
      >
        <FaHome />
      </NavLink>
      <NavLink
        to="/personal"
        className="p-2 bg-blue-400 rounded-full text-white hover:bg-black cursor-pointer shadow-sm shadow-slate-700 hover:scale-125 duration-200"
      >
        <IoMdPerson />
      </NavLink>
      <NavLink
        to="/project"
        className="p-2 bg-blue-400 rounded-full text-white hover:bg-black cursor-pointer shadow-sm shadow-slate-700 hover:scale-125 duration-200"
      >
        <GrProjects />
      </NavLink>
      <NavLink
        to="/blog"
        className="p-2 bg-blue-400 rounded-full text-white hover:bg-black cursor-pointer shadow-sm shadow-slate-700 hover:scale-125 duration-200"
      >
        <FaBlogger />
      </NavLink>
    </div>
  );
};

export default BottomBar;
