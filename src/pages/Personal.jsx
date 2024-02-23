import BottomBar from "../components/BottomBar";
import Image2 from "../assets/images/Opal.jpg";
import TechStack from "../components/TechStack";
import { BiSolidMessageDots } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Personal = () => {
  return (
    <>
      <div className="bg-black text-white min-h-screen">
        <div>
          <h1 className="text-5xl md:text-9xl font-semibold mb-5 relative animate-pulse">
            PORTOFOLIO
          </h1>

          <h2 className="text-5xl top-1 md:text-9xl font-semibold absolute md:top-2 ">
            PORTOFOLIO
          </h2>
          <div>
            <h2 className="text-5xl font-semibold md:text-9xl  rotate-180 relative">
              PORTOFOLIO
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen place-items-center">
          <div className="ml-2 text-2xl font-semibold bg-white p-2 shadow-sm shadow-slate-700 rounded-full h-[360px] w-[360px] grid whitespace-nowrap place-items-center relative md:w-[500px] md:h-[500px]   ">
            <img
              src={Image2}
              alt={Image2}
              className="absolute rounded-full aspect-square object-contain"
            />
            <div className="absolute top-0 w-full h-full grid hover:bg-black/30 duration-100 cursor-pointer bg-black/10  place-content-center place-items-center rounded-full">
              <p className="text-sm mt-9 ">Naufal Aufa</p>
              <p className="text-xs ">Front End Developer</p>
            </div>
          </div>
          <div>
            <p className="w-[400px] md:w-[300px] md:ml-20 lg:w-[500px] mt-2 font-extralight p-10 ">
              Hello , my name is
              <span className="font-bold"> Mochamad Naufal Aufa Rifqi</span> you
              can call me opal hehe. Selamat datang di portofolio saya! Saya
              adalah seorang pengembang perangkat lunak yang berfokus pada
              menciptakan pengalaman digital yang menarik , dengan teknologi
              <span className="font-bold"> React JS</span>
            </p>
            <button className="bg-white p-2 shadow-md w-[40%]  m-auto flex justify-center  items-center gap-2 shadow-slate-200 hover:bg-black hover:text-white duration-100 text-black rounded-md font-bold ">
              <a href="https://wa.me/6285156802452" target="_blank">
                Contact Me
              </a>
              <span>
                <BiSolidMessageDots size={20} />
              </span>
            </button>
            <section>
              <h1 className="text-5xl ml-8 p-2 md:ml-20 font-semibold mt-20 ">
                SOCIAL MEDIA ALERT
              </h1>
              <div className="flex items-center mt-8 gap-3  md:ml-20 ml-8">
                <div className="bg-white p-2 text-black rounded-md hover:bg-black hover:text-white shadow-sm shadow-slate-400 cursor-pointer">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/naufal-aufa-a7a415257/"
                  >
                    <FaLinkedin className="w-[50px] h-[50px]" />
                  </a>
                </div>
                <a
                  target="_blank"
                  href="https://github.com/naufalaufa"
                  className="bg-white p-2 text-black rounded-md hover:bg-black hover:text-white shadow-sm shadow-slate-400 cursor-pointer"
                >
                  <FaGithub className="w-[50px] h-[50px]" />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/_opal.jpg/?hl=id"
                  className="bg-white p-2 text-black rounded-md hover:bg-black hover:text-white shadow-sm shadow-slate-400 cursor-pointer"
                >
                  <FaInstagram className="w-[50px] h-[50px]" />
                </a>
              </div>
            </section>
          </div>
        </div>

        <div>
          <h2 className="text-6xl text-right ml-9 md:text-9xl md:text-right font-semibold   rounded mt-4 relative">
            2024
          </h2>
        </div>
        <TechStack />
        <BottomBar />
      </div>
    </>
  );
};

export default Personal;
