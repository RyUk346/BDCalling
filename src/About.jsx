import React from "react";
import MagneticButton from "./components/Button";
function About() {
  return (
    <>
      <div className="">
        <div className="bg-black text-white md:flex gap-[40px] px-2 sm:px-6 md:px-16 lg:px-32 py-[180px]">
          <div>
            <img
              src="/img.webp"
              alt=""
              className="w-[400px] sm:w-[560px] pt-[120px] py-20"
            />
          </div>
          <div className="font-bold">
            <h1 className="font-bold">WHO WE ARE</h1>
            <h1 className="text-[60px]">
              We are leading digital marketing agency
            </h1>
            <h1 className="lg:pl-[200px] text-[#999999] max-w-[600px] py-10">
              We’re a team of strategic mdigital marketing working globally with
              largest brands, We believe that progress only happens when you
              refused to play things safe. We combine ideas and behaviors, and
              insights with design, technological data to produce brand
              experiences that customers love our services.
            </h1>
            <div className="py-12">
              <MagneticButton distance={0.2}>
                <div className="w-[160px] h-[160px] border rounded-full flex items-center justify-center text-[#999999] hover:text-black font-bold hover:bg-white transition-colors duration-300 ease-in-out">
                  <h1>Explore Us</h1>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                    fill="none"
                  >
                    <path
                      d="M17 7L6 18"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M11 6.13151C11 6.13151 16.6335 5.65662 17.4885 6.51153C18.3434 7.36645 17.8684 13 17.8684 13"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
