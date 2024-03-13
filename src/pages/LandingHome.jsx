import CarouselWalpapper from "../components/CarouselWalpapper";
import CarouselWalpapper2 from "../components/CarouselWalpapper2";
import Main from "../components/Main";
import BottomBar from "../components/BottomBar";
import Navbar from "../components/Navbar";

const LandingHome = () => {
  return (
    <>
      <div className="grid grid-cols-2 place-content-center place-items-center relative">
        <CarouselWalpapper />
        <CarouselWalpapper2 />
        <Main />
        <BottomBar />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default LandingHome;
