function Footer() {
  const menuItems = ["ABOUT US", "CONTACT", "CAREER", "FAQS"];
  return (
    <>
      <div className="border-[#999999]">
        <footer className="footer bg-black text-white lg:flex px-10 border-b border-[#999999]">
          <nav className="py-14">
            <img src="/logo2.webp" alt="" className="mb-[30px]" />
            <h1 className="max-w-[310px] text-[#999999] text-[16px]">
              When do they work well, and when do they on us and finally, when
              do we actually need how can we avoid them.
            </h1>
          </nav>
          <div className="flex flex-col gap-0 ">
            <a className="link link-hover w-[172px] h-[100px] flex justify-center items-center border border-b-0">
              FACEBOOK
            </a>
            <a className="link link-hover  w-[172px] h-[100px] flex justify-center items-center border border-b-0">
              TWITTER
            </a>
            <a className="link link-hover w-[172px] h-[100px] flex justify-center items-center border border-b-0">
              LINKEDIN
            </a>
            <a className="link link-hover w-[172px] h-[100px] flex justify-center items-center border">
              INSTAGRAM
            </a>
          </div>
          <nav className="">
            <div>
              <h1
                id="design"
                className="text-[40px] lg:text-[80px] font-bold animate-gradient-text bg-gradient-to-r from-white via-purple-500 to-red-500 text-transparent bg-clip-text text-center py-[180px]"
              >
                LET'S TALK
              </h1>
            </div>
          </nav>
        </footer>
        <div className="bg-black text-white justify-between items-center lg:flex px-2 sm:px-6 md:px-16">
          <div>
            <h1 className="text-center">
              © 2022 - 2025 | Alrights reserved <br />
              by Wealcoder
            </h1>
          </div>
          <div className=" flex justify-center">
            <ul className="flex justify-between items-center w-[330px]">
              {menuItems.map((item, itemIndex) => (
                <li key={itemIndex} className="cursor-pointer group">
                  {item.split("").map((letter, letterIndex) => (
                    <span
                      key={letterIndex}
                      className="inline-block group-hover:animate-rotateUp h-[10px]"
                      style={{
                        animationDelay: `${letterIndex * 0.1}s`,
                        display: "inline-block",
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Tailwind custom styles */}
      <style>
        {`
            @keyframes gradient-slide {
              0% { background-position: 0% 50%; }
              100% { background-position: 200% 50%; }
            }
  
            @keyframes wave {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
            }
  
            .animate-gradient-text {
              background-size: 200% 200%;
              animation: gradient-slide 3s linear infinite, wave 1s infinite ease-in-out;
            }
          `}
      </style>
    </>
  );
}

export default Footer;
