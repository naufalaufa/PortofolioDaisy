import { IoLogoReact } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className="min-h-screen grid place-content-center w-[100px] sm:w-[300px] m-auto">
        <div className="grid gap-2">
          <div className="font-bold text-lg whitespace-nowrap sm:text-4xl flex gap-2 items-center ">
            <h1>Welcome To</h1>
            <div className="bg-blue-400 shadow-md shadow-slate-800 w-[40px] h-[40px] rounded-full grid place-content-center">
              <span>
                <IoLogoReact className="animate-spin text-white" size={20} />
              </span>
            </div>
          </div>
          <h2 className="font-bold text-xl ">Portofolio</h2>
          <p className="text-xs sm:text-sm ">
            <div className="bg-white rounded my-1 p-2 shadow-sm shadow-slate-700 ">
              Hi iam Naufal Iam Front End Developer
            </div>
            focus in user interfaces and user experience , familiar with using
            technologies such as react js , tailwind css, javascript, html, css.
            Live in Jakarta Indonesia.
          </p>
        </div>
        <NavLink
          to="/personal"
          className="btn btn-primary mt-3 text-sm w-32 hover:bg-white hover:text-black"
        >
          Show More
        </NavLink>
      </div>
    </>
  );
};

export default Main;
