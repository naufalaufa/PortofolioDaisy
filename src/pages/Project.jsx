import BottomBar from "../components/BottomBar";
import { dataProject } from "../data/dataProject.js";
import { IoMdLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const Project = () => {
  return (
    <>
      <div className=" p-8">
        <h1 className="font-bold text-3xl text-center p-10">PROJECT</h1>
      </div>
      <div className="p-10  grid grid-cols-1 md:grid-cols-3 gap-5">
        {dataProject?.map((item) => {
          const { id, image, text, url, article, github } = item;
          return (
            <>
              <div key={id} className=" p-5 rounded-lg">
                <div>
                  <img src={image} alt={image} />
                </div>
                <div>
                  <p className="font-bold my-5">{text}</p>
                  <p>{article}</p>
                </div>
                <div>
                  <a
                    href={url}
                    target="_blank"
                    className="btn btn-md btn-secondary my-5"
                  >
                    <p>VISIT LINK</p>
                    <span>
                      <IoMdLink />
                    </span>
                  </a>
                  <a
                    href={github}
                    target="_blank"
                    className="btn btn-md mx-2 my-5"
                  >
                    <p>GITHUB</p>
                    <span>
                      <FaGithub />
                    </span>
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <BottomBar />
    </>
  );
};

export default Project;
