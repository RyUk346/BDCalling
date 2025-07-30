import { useState } from "react";

function NavBar() {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const menuItems = [
    "HOME",
    "ABOUT",
    "PAGES",
    "SERVICES",
    "TEAM",
    "BLOG",
    "CONTACT",
  ];

  const toggleSearchBox = () => {
    setShowSearchBox((open) => !open);
  };

  const toggleSidebar = () => {
    setShowSidebar((open) => !open);
  };

  return (
    <div className="top-0 fixed z-50 bg-white w-full h-[85px] px-[15px] lg:px-[50px] py-[20px] flex items-center justify-between">
      <div>
        <img src="/logo.png" alt="" />
      </div>
      <div>
        <ul className="lg:flex justify-between hidden min-w-[803px]">
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
      <div className="flex w-[89px] justify-between relative">
        {showSearchBox ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            color="#000000"
            fill="none"
            id="close"
            onClick={toggleSearchBox}
            className="cursor-pointer"
          >
            <path
              d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            color="#000000"
            fill="none"
            id="search"
            onClick={toggleSearchBox}
            className="cursor-pointer"
          >
            <path
              d="M17.5 17.5L22 22"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        )}
        {showSearchBox && (
          <div className="absolute top-[40px] right-0 w-[200px] sm:w-[300px] p-2 border border-gray-300 rounded shadow-md bg-gray-200">
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none outline-gray-300 focus:ring-2 focus:ring-blue-500"
              placeholder="Search."
            />
          </div>
        )}
        {showSidebar ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            color="#000000"
            fill="none"
            id="close-sidebar"
            onClick={toggleSidebar}
            className="cursor-pointer"
          >
            <path
              d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            color="#000000"
            fill="none"
            id="menu"
            onClick={toggleSidebar}
            className="cursor-pointer"
          >
            <path
              d="M4 5L16 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 12L20 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 19L12 19"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        {showSidebar && (
          <div className="px-6 gap-[60px] fixed inset-0 bg-black text-white flex items-center justify-between z-50">
            <button
              onClick={toggleSidebar}
              className="absolute top-4 right-4 text-2xl"
            >
              &times;
            </button>
            <div className="w-1/5">
              <ul className="">
                <li className="text-2xl font-bold py-2">Follow Us</li>
                <li>Dribble</li>
                <li>Follow Us</li>
                <li>Dribble</li>
                <li>Follow Us</li>
                <li>Dribble</li>
              </ul>
            </div>
            <div className="w-4/5">
              <ul className="space-y-4 text-4xl font-bold ">
                {menuItems.map((item, index) => (
                  <li key={index} className="cursor-pointer group">
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
            <div className="w-1/5">
              <div className="flex items-center max-w-[300px] p-2 border border-gray-300 rounded-full shadow-md  ">
                <input
                  type="text"
                  className="w-full bg-transparent p-2 rounded focus:outline-none outline-gray-300 focus:ring-2 focus:ring-blue-500"
                  placeholder="Search keyword"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  color="#ffffff"
                  fill="none"
                  id="search"
                  onClick={toggleSearchBox}
                  className="cursor-pointer"
                >
                  <path
                    d="M17.5 17.5L22 22"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C15.9706 20 20 15.9706 20 11Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="py-[120px]">
                <h1>Get in touch</h1>
                <h1>+(02) - 094 980 547</h1>
                <h1>info@extradesign.com</h1>
                <h1>230 Norman Street New York, QC (USA) H8R 1A1</h1>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
