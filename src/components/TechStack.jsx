import { FaReact } from "react-icons/fa6";
import { AiOutlineAntDesign } from "react-icons/ai";
import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiDaisyui } from "react-icons/si";

const TechStack = () => {
  return (
    <div className="mt-20">
      <div>
        <h1 className="font-bold text-5xl md:text-8xl my-9">
          TECHSTACK OVERVIEW
        </h1>
        <h1 className="font-bold text-5xl md:text-8xl rotate-180">
          TECHSTACK OVERVIEW
        </h1>
      </div>
      <section className="grid grid-cols-2 md:grid md:grid-cols-4 p-8 place-items-center gap-4">
        <span className="shadow-sm shadow-slate-100 hover:bg-white cursor-pointer">
          <FaReact className="w-[100px] h-[100px] p-4 text-blue-300 hover:text-black" />
        </span>
        <span className="shadow-sm shadow-slate-100 hover:bg-white">
          <AiOutlineAntDesign className="w-[100px] h-[100px] p-4 hover:text-black cursor-pointer" />
        </span>
        <span className="shadow-sm shadow-slate-100 hover:bg-white cursor-pointer">
          <SiTailwindcss className="w-[100px] h-[100px] p-4 text-blue-100 hover:text-black" />
        </span>
        <span className="shadow-sm shadow-slate-100 hover:bg-white">
          <SiRedux className="w-[100px] h-[100px] p-4 text-blue-700 hover:text-black cursor-pointer" />
        </span>
        <span className="shadow-sm shadow-slate-100 hover:bg-white">
          <SiDaisyui className="w-[100px] h-[100px] p-4 text-red-300 hover:text-black cursor-pointer" />
        </span>
        <span className="shadow-sm shadow-slate-100 hover:bg-white">
          <SiNextdotjs className="w-[100px] h-[100px] p-4 text-white hover:text-black cursor-pointer" />
        </span>
      </section>
    </div>
  );
};

export default TechStack;
