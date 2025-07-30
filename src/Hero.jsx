import { useState } from "react";

function Hero() {
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideoBackground = () => {
    setShowVideo((prev) => !prev);
  };

  return (
    <>
      {/* Main Section */}
      <div
        className={`relative ${
          showVideo ? "bg-black" : ""
        } px-2 sm:px-6 md:px-16 lg:px-32 bg-fixed py-20`}
      >
        {showVideo && (
          <div className="absolute inset-0 z-0 pointer-events-none">
            <video
              src="/hero-3.mp4"
              autoPlay
              loop
              muted
              className="w-full h-full object-cover bg-fixed"
            ></video>
          </div>
        )}

        <div
          className={`relative z-10 ${showVideo ? "text-white" : "text-black"}`}
        >
          {/* Content */}
          <h1 className="text-left text-[30px] font-bold pl-4 animate-slideInRight">
            DIGITAL
          </h1>
          <div className="flex">
            <h1 className="text-left text-[100px] md:text-[200px] leading-[100px] md:leading-[180px] font-bold animate-slideInRight">
              MARK
            </h1>
            <div
              className="size-[180px] flex items-center cursor-pointer justify-end"
              id="btn"
              onClick={toggleVideoBackground}
            >
              <video
                src="/hero-3.mp4"
                className="rounded-full w-16 h-16 mr-4"
              ></video>
              <h1 className="text-lg font-bold">
                {showVideo ? "Close" : "Watch"} <br /> Video
              </h1>
            </div>
          </div>
          <div>
            <h1 className="text-right text-[100px] md:text-[200px] leading-[80px] md:leading-[180px] font-bold animate-slideInRight">
              ETING
            </h1>
            <h1 className="max-w-[400px] text-justify animate-slideInRight">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam
              dicta ipsum velit distinctio vitae magnam excepturi! Ex ut earum
              cupiditate, quos vel id, magnam eius modi voluptatum, officiis non
              molestias.
            </h1>
          </div>
        </div>
        <div className="flex justify-end mt-10">
          {!showVideo && (
            <img src="/hero.jpg" alt="Hero" className="rounded-lg" />
          )}
        </div>
      </div>

      <div>
        <h1 className="text-center text-xl sm:text-2xl font-bold mb-4">
          We worked with global largest brands
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4 sm:px-6 md:px-16 lg:px-32 py-8">
          <img src="/1.png" alt="Brand 1" className="w-full object-contain" />
          <img src="/2.png" alt="Brand 2" className="w-full object-contain" />
          <img src="/3.png" alt="Brand 3" className="w-full object-contain" />
          <img src="/4.png" alt="Brand 4" className="w-full object-contain" />
          <img src="/5.png" alt="Brand 5" className="w-full object-contain" />
          <img src="/6.png" alt="Brand 6" className="w-full object-contain" />
        </div>
      </div>
    </>
  );
}

export default Hero;
