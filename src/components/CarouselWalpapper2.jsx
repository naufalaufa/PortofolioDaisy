import Image1 from "../assets/images/1.jpg";
import Image2 from "../assets/images/Opal.jpg";
import Image3 from "../assets/images/3.jpg";
import Image4 from "../assets/images/4.jpg";

const CarouselWalpapper2 = () => {
  return (
    <>
      <div className="h-96 carousel carousel-vertical rounded-box md:flex min-h-screen lg:hidden ">
        <div className="carousel-item h-full">
          <img className="object-contain p-3" src={Image1} />
        </div>
        <div className="carousel-item h-full">
          <img className="object-contain p-3" src={Image2} />
        </div>
        <div className="carousel-item h-full">
          <img className="object-contain p-3" src={Image3} />
        </div>
        <div className="carousel-item h-full">
          <img className="object-contain p-3" src={Image4} />
        </div>
      </div>
    </>
  );
};

export default CarouselWalpapper2;
