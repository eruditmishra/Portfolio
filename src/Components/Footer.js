import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    // Footer Wrapper
    <div className="bg-[#2d2e32] w-full">
      {/* Footer Container */}
      <div className="flex flex-col gap-4 items-center max-w-[60rem] my-0 mx-auto  py-6 lg:flex-row lg:justify-between">
        {/* footer text container */}
        <div className="text-[#ffffff] text-[1.08rem] leading-[0.9rem] font-bold">
          <p>Copyright © 2023. All rights are reserved</p>
        </div>
        {/* Footer Icon Container */}
        <div className="flex gap-4 items-center">
          <div className="text-[#fff] text-[1.5rem]">
            <a href="https://github.com/eruditmishra" target="blank">
              <AiFillGithub />
            </a>
          </div>
          <div className="text-[#fff] text-[1.5rem]">
            <a href="https://www.linkedin.com/in/uditmishra" target="blank">
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
