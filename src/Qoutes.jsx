import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function Quotes() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <>
      <div className="bg-black text-white p-12">
        <Carousel
          swipeable={false}
          draggable={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true} // Removed deviceType logic
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          className="max-w-[1200px] py-12"
        >
          <div className="relative flex">
            <div className="absolute z-10 p-4 pl-[30px] sm:pl-[60px] md:pl-[150px] lg:pl-[200px] py-[10px]">
              <h1 className="text-[20px] font-bold pb-[160px] text-center">
                1/<span className="text-[12px] items-baseline">4</span>
              </h1>
              <h1 className="font-bold text-[60px]">
                BENJON <br />
                <span className="pl-[40px] md:pl-[80]">
                  WEBSITE
                </span> <br /> 2012
              </h1>
            </div>
            <img
              src="/c1.jpg"
              alt=""
              className="z-0 pl-[40px] sm:pl-[80px] md:pl-[250px] lg:pl-[450px]"
            />
          </div>
          <div className="relative flex">
            <div className="absolute z-10 p-4 pl-[30px] sm:pl-[60px] md:pl-[150px] lg:pl-[200px] py-[10px]">
              <h1 className="text-[20px] font-bold pb-[160px] text-center">
                1/<span className="text-[12px] items-baseline">4</span>
              </h1>
              <h1 className="font-bold text-[60px]">
                BENJON <br />
                <span className="pl-[40px] md:pl-[80]">
                  WEBSITE
                </span> <br /> 2012
              </h1>
            </div>
            <img
              src="/c2.jpg"
              alt=""
              className="z-0 pl-[40px] sm:pl-[80px] md:pl-[250px] lg:pl-[450px]"
            />
          </div>
          <div className="relative flex">
            <div className="absolute z-10 p-4 pl-[30px] sm:pl-[60px] md:pl-[150px] lg:pl-[200px] py-[10px]">
              <h1 className="text-[20px] font-bold pb-[160px] text-center">
                1/<span className="text-[12px] items-baseline">4</span>
              </h1>
              <h1 className="font-bold text-[60px]">
                BENJON <br />
                <span className="pl-[40px] md:pl-[80]">
                  WEBSITE
                </span> <br /> 2012
              </h1>
            </div>
            <img
              src="/c3.jpg"
              alt=""
              className="z-0 pl-[40px] sm:pl-[80px] md:pl-[250px] lg:pl-[450px]"
            />
          </div>
          <div className="relative flex">
            <div className="absolute z-10 p-4 pl-[30px] sm:pl-[60px] md:pl-[150px] lg:pl-[200px] py-[10px]">
              <h1 className="text-[20px] font-bold pb-[160px] text-center">
                1/<span className="text-[12px] items-baseline">4</span>
              </h1>
              <h1 className="font-bold text-[60px]">
                BENJON <br />
                <span className="pl-[40px] md:pl-[80]">
                  WEBSITE
                </span> <br /> 2012
              </h1>
            </div>
            <img
              src="/c4.jpg"
              alt=""
              className="z-0 pl-[40px] sm:pl-[80px] md:pl-[250px] lg:pl-[450px]"
            />
          </div>
        </Carousel>
      </div>
    </>
  );
}
export default Quotes;
