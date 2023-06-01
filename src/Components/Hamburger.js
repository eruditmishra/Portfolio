import React, { useState } from "react";
import { Link } from "react-scroll";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const downloadHandler = () => {
    window.open(
      `https://docs.google.com/document/d/1LdHF_SDpY4MEbPHF-j9Ey14LaWpm8i347QsHefTu1y8/export?format=pdf`
    );
    toggleMenu();
  };

  return (
    <div className="flex justify-between px-8 fixed bg-white w-full z-40">
      <div>
        <Link to="home" span={true} smooth={true} activeClass="active">
          <p className="py-6 text-xl font-bold">Udit Mishra </p>
        </Link>
      </div>
      <div>
        <button
          className="fixed top-4 right-4 z-50 rounded-md p-2 text-gray-800  focus:outline-none "
          onClick={toggleMenu}
        >
          <svg
            className={`h-8 w-8 `}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={isOpen ? 4 : 2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <div
          className={`${
            isOpen ? "visible" : "invisible"
          } fixed inset-y-0 left-0 max-w-full flex flex-col w-full bg-white shadow-lg z-40`}
          style={{
            transform: isOpen ? "translateX(0)" : "translateX(-100%)",
            transition: "transform 0.3s ease-in-out",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="fixed inset-y-0 right-0 max-w-full flex flex-col w-full bg-white shadow-lg z-50">
            <div className="flex items-center justify-center flex-grow py-6 px-4 sm:px-6">
              <ul className="flex gap-8 flex-col space-y-4">
                {/* <nav className="flex flex-col space-y-4"> */}
                <Link
                  to="home"
                  span={true}
                  smooth={true}
                  activeClass="active"
                  onClick={toggleMenu}
                >
                  <li className=" cursor-pointer text-[1.5rem] font-bold  hover:text-[#147EFB] ">
                    Home
                  </li>
                </Link>
                <Link to="about" span={true} smooth={true} onClick={toggleMenu}>
                  <li className=" cursor-pointer hover:text-[#147EFB] text-[1.5rem] font-bold">
                    About
                  </li>
                </Link>
                <Link
                  to="portfolio"
                  span={true}
                  smooth={true}
                  onClick={toggleMenu}
                >
                  <li className=" cursor-pointer hover:text-[#147EFB] text-[1.5rem] font-bold">
                    Projects
                  </li>
                </Link>
                <Link
                  to="contact"
                  span={true}
                  smooth={true}
                  onClick={toggleMenu}
                >
                  <li className=" cursor-pointer hover:text-[#147EFB] text-[1.5rem] font-bold">
                    Contact
                  </li>
                </Link>

                <li
                  onClick={downloadHandler}
                  className=" cursor-pointer hover:text-[#147EFB] text-[1.5rem] font-bold "
                >
                  Resume
                </li>
                {/* </nav> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
