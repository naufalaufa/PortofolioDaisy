import Image1 from "../assets/images/1.jpg";
import Image2 from "../assets/images/Opal.jpg";
import Image3 from "../assets/images/3.jpg";
import Image4 from "../assets/images/4.jpg";

const CarouselWalpapper = () => {
  return (
    <div className="carousel carousel-center max-w-md p-8 md:hidden hidden sm:hidden space-x-4 bg-neutral rounded-box ml-9 lg:flex z-[99999] ">
      <div className="carousel-item">
        <img src={Image1} className="rounded-box h-[520px]" />
      </div>
      <div className="carousel-item">
        <img src={Image2} className="rounded-box h-[520px]" />
      </div>
      <div className="carousel-item">
        <img src={Image3} className="rounded-box h-[520px]" />
      </div>
      <div className="carousel-item">
        <img src={Image4} className="rounded-box h-[520px]" />
      </div>
    </div>
  );
};

export default CarouselWalpapper;
