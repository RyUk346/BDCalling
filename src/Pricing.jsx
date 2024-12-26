import React from "react";
import MagneticButton from "./components/Button";
function Pricing() {
  return (
    <>
      <div className="px-2 sm:px-6 md:px-16 lg:px-10 py-20 lg:flex gap-[40px] bg-[#F3ECEC]">
        <div className="lg:w-1/2 py-8">
          <div>
            <h1 className="text-[18px]">PRICING TABLE</h1>
            <h1 className="text-[40px]">BE KIND TO YOUR MIND</h1>
          </div>
          <div className="collapse collapse-plus border-y rounded-none border-black">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-xl font-bold">
              Design should enrich our day
            </div>
            <div className="collapse-content">
              <p>
                Our design services starts and ends with a best-in-class
                experience strategy that builds brands. Through a process of
                iteration and prototyping design interfaces that bring joy to
                people
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus border-b rounded-none border-black">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-bold">
              Bring their individual experience and creative
            </div>
            <div className="collapse-content">
              <p>
                This is the second `$item's` accordion body. It is hidden by
                default, until the collapse plugin adds the appropriate classes
                that we use to style each element. These classes.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus border-b rounded-none border-black">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-bold">
              Human centred design to challenges
            </div>
            <div className="collapse-content">
              <p>
                Our design services starts and ends with a best-in-class
                experience strategy that builds brands. Through a process of
                iteration and prototyping design interfaces that bring joy to
                people
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus border-b rounded-none border-black">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-bold">
              Design should enrich our day
            </div>
            <div className="collapse-content">
              <p>
                Our design services starts and ends with a best-in-class
                experience strategy that builds brands. Through a process of
                iteration and prototyping design interfaces that bring joy to
                people
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus border-b rounded-none border-black">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-bold">
              Developing core web applications
            </div>
            <div className="collapse-content">
              <p>
                Our design services starts and ends with a best-in-class
                experience strategy that builds brands. Through a process of
                iteration and prototyping design interfaces that bring joy to
                people
              </p>
            </div>
          </div>
        </div>
        <div className="py-12 ">
          <div className="max-w-[640px] h-[218px] bg-black px-[30px] py-[0px] rounded-lg flex items-center gap-[26px] relative text-white">
            <div className="bg-[#FF9776] rounded w-[40px] h-[40px] flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                color="#000000"
                fill="none"
                className=""
              >
                <path
                  d="M5 14L8.5 17.5L19 6.5"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="max-w-[70px] h-[32px] rounded-2xl text-[12px] text-[#999999] border border-[#999999] px-[12px] py-[5px]">
                <h1>YEARLY</h1>
              </div>
              <div className="max-w-[365px] py-2">
                <h1 className="text-[20px] font-bold">14 DAYS FREE</h1>
                <h1 className="text-[#999999] py-2">
                  Subscription fee is $129.99 USD and automatically renews each
                  year.
                </h1>
              </div>
            </div>
            <div>
              <h1 className="text-[26px] font-bold absolute top-8 right-2 pr-6">
                $129<span className="text-[12px]">.99</span>
              </h1>
              <div className="flex justify-center items-center w-[100px] h-[26px] bg-[#FF9776] rounded absolute top-[-10px] right-2">
                <h1 className="text-[12px]">BEST VALUE</h1>
              </div>
            </div>
          </div>
          <div className="max-w-[640px] h-[218px] bg-white px-[30px] my-[40px] rounded-lg flex items-center gap-[26px] relative">
            <div className="border border-[#999999] rounded w-[40px] h-[40px] flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                color="#999999"
                fill="none"
                className=""
              >
                <path
                  d="M5 14L8.5 17.5L19 6.5"
                  stroke="currentColor"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="max-w-[80px] h-[32px] rounded-2xl text-[12px] border border-black px-[12px] py-[5px]">
                <h1>MONTHLY</h1>
              </div>
              <div className="max-w-[365px] py-2">
                <h1 className="text-[20px] font-bold">7 DAYS FREE</h1>
                <h1 className="py-2">
                  Subscription fee is $12.99 USD and automatically renews each
                  year.
                </h1>
              </div>
            </div>
            <div>
              <h1 className="text-[26px] font-bold absolute top-8 right-2 pr-6">
                $12<span className="text-[12px]">.99</span>
              </h1>
            </div>
          </div>
          <div className=" px-10 ">
            <MagneticButton distance={0.2}>
              <div className="w-[160px] h-[160px] border border-black rounded-full flex items-center justify-center text-[#999999] hover:text-white font-bold hover:bg-black transition-colors duration-300 ease-in-out">
                <h1>
                  Try It <br />
                  Free Now
                </h1>
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
    </>
  );
}
export default Pricing;
