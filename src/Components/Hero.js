import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import JavaScript from "../Assets/javascript.svg";
import ReactIcon from "../Assets/react.svg";
import TailWind from "../Assets/tailwind.svg";
import NextJs from "../Assets/nextJs.png";
import udit from "../Assets/udit.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    // Hero Section Wrapper
    <div
      id="hero"
      className="flex flex-col  bg-[#f9f9f9] h-full w-full  relative z-[0] lg:mt-[5rem]"
    >
      {/* Hero Content Wrpaaer */}
      <div className="flex flex-col-reverse gap-[5rem] items-center justify-center  relative mx-[10rem] mt-[7rem] lg:flex-row lg:gap-[8rem] lg:mx-[20rem] lg:items-start lg:justify-center">
        {/* Left container */}
        <div className="flex flex-col items-start  relative lg:max-w-[40vw] ">
          {/* Heading Container */}
          <div className="flex relative min-w-[30rem] ">
            <h1 className=" text-[#2d2e32] text-[2.5rem] px-16  mb-8  font-[750] lg:text-left lg:text-[3.4375rem] lg:leading-[4rem]">
              {/* Typing Animation */}
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  900,
                  "React JS Developer",
                  900,
                  "MERN Developer",
                  900,
                  "Front-End Developer",
                  900,
                  "Back-End Developer",
                  900,
                  "Web Designer",
                  900,
                ]}
                repeat={Infinity}
                speed={30}
                style={{ fontSize: "3.4375rem" }}
                className="font-[750] lg:text-left lg:text-[3.4375rem] text-[2.5rem] lg:leading-[4rem]"
              />
            </h1>
          </div>
          {/* Hero Text */}
          <p className=" text-[#767676] text-[1rem] px-16 lg:text-[1.15rem]  lg:font-[500] lg:leading-7 lg:text-left">
            Hi, I'm Udit Mishra. A passionate Full Stack Developer based in New
            Delhi, India📍
          </p>
          {/* Link Container */}
          <div className="flex justify-center mx-auto gap-4 px-16 text-[2rem] mt-[2rem] hover:cursor-pointer text-[#2d2e32] lg:mx-0 lg:justify-start">
            <div className="hover:cursor-pointer">
              <a
                href="https://www.linkedin.com/in/uditmishra"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </div>
            <div>
              <a
                href="https://github.com/eruditmishra"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </div>
          </div>
        </div>
        {/* Right COntainer */}
        <div className=" min-w-[20rem] max-w-[20rem]">
          <img
            src={udit}
            alt="Udit Mishra"
            className="  relative  animate-animationMorph border-2 border-black"
          />
        </div>
      </div>
      {/* Tech Stack Container */}
      <div className="flex flex-col justify-center gap-8 mt-[3rem] items-center mb-[5rem] lg:flex-row md:justify-start lg:gap-12 lg:mx-[22rem] lg:mt-[6.5rem]">
        {/* Tech Stack Text */}
        <div>
          <p className=" leading-[0.9rem]  text-[#2D2E32] font-[500] border-b-2 border-[#2D2E32] pb-[1rem] lg:pr-[1rem] lg:border-r-2 lg:border-b-0 lg:pb-0 lg:text-[1.1rem] lg:min-w-[7rem]">
            Tech Stack
          </p>
        </div>
        {/* Tech Stack Icons */}
        <div className="flex flex-row flex-wrap justify-center  gap-4  px-[2rem] items-center lg:gap-12 lg:flex-nowrap">
          <div className="flex items-center justify-center h-[4rem] w-[4rem]  rounded-full bg-[#fff] shadow-card p-4">
            <img src={JavaScript} alt="" />
          </div>
          <div className="flex items-center justify-center h-[4rem] w-[4rem]  rounded-full bg-[#fff] shadow-card p-4">
            <img src={ReactIcon} alt="" />
          </div>
          <div className="flex items-center justify-center h-[4rem] w-[4rem]   rounded-full bg-[#fff] shadow-card p-4 ">
            <img src={NextJs} alt="" />
          </div>
          <div className="flex items-center justify-center h-[4rem] w-[4rem]   rounded-full bg-[#fff] shadow-card p-4 ">
            <img
              src="https://account.mongodb.com/static/images/favicon.ico"
              alt=""
            />
          </div>
          <div className="flex items-center justify-center h-[4rem] w-[4rem]   rounded-full bg-[#fff] shadow-card p-4 ">
            <img
              src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
              alt=""
            />
          </div>

          <div className="flex items-center justify-center h-[4rem] w-[4rem]   rounded-full bg-[#fff] shadow-card p-4 ">
            <img
              src="https://pluralsight2.imgix.net/paths/images/nodejs-45adbe594d.png"
              alt=""
            />
          </div>

          <div className="flex items-center justify-center h-[4rem] w-[4rem]   rounded-full bg-[#fff] shadow-card p-4 ">
            <img src={TailWind} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
