import { NavLink } from "react-router-dom";
import { dataBottomBar } from "../data/dataBottomBar";

const BottomBar = () => {
  return (
    <div className="fixed flex justify-center gap-5  bottom-1 w-[70%] lg:w-[35%] m-auto left-0 right-0 bg-white shadow-sm shadow-slate-700 p-3 rounded-md  z-[99999]">
      {dataBottomBar?.map((item) => {
        const { icon, id, path } = item;
        return (
          <>
            <NavLink key={id} to={path} className="bg-white ">
              <span className="btn btn-primary">{icon}</span>
            </NavLink>
          </>
        );
      })}
    </div>
  );
};

export default BottomBar;
