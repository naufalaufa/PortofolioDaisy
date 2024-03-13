import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { IoMoon } from "react-icons/io5";
import { FaSun } from "react-icons/fa6";

const Navbar = () => {
  const { dark, setIsDark } = useContext(GlobalContext);
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white p-1 shadow-sm shadow-slate-700 z-[999999999999] mb-14 ">
      <button
        onClick={() => setIsDark(!dark)}
        className="p-2 rounded-full bg-blue-400 text-white ml-3"
      >
        {dark === true ? <IoMoon /> : <FaSun />}
      </button>
    </nav>
  );
};

export default Navbar;
