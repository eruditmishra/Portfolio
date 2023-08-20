import React from "react";
import AboutImg from "../Assets/about-img.webp";
import AboutWorking from "../Assets/about-working.png";
import SpinningImg from "../Assets/spinning text.svg";

const About = () => {
  return (
    // wrapper
    <div
      id="about"
      className="flex flex-col justify-center py-28 gap-8 mx-12 xl:flex-row lg:justify-start lg:mt-[8rem] xl:gap-[6rem] xl:mx-60 z-0"
    >
      {/* left conatianer */}
      <div className="flex justify-center relative">
        {/* left image */}
        <div className=" h-[22rem] relative">
          <img src={AboutImg} alt="" className=" rounded-2xl  h-full w-full " />
        </div>
        <div className="invisible xl:visible">
          {/* White Circle */}
          <div className="absolute bg-white rounded-full h-[11rem] w-[11rem] right-[-5rem] top-52"></div>
          {/* Overlapping Image */}
          <div className="absolute w-[5rem] h-[5rem] right-[-2rem] top-60">
            <img src={AboutWorking} alt="" />
          </div>
          {/* Spinning Image */}
          <div className="absolute w-[11rem] h-[11rem] right-[-5rem] top-[12.8rem]">
            <img
              src={SpinningImg}
              alt=""
              className=" animate-animationRotate"
            />
          </div>
        </div>
      </div>
      {/* Right COntainer */}
      <div className="flex flex-col flex-auto items-center xl:items-start">
        <p className=" text-center text-[#147EFB] text-[1.1rem] uppercase font-[750] leading-4 xl:text-left">
          About Me
        </p>
        <p className="text-center mt-[1rem] text-[#2D2E32] text-[1.6rem] leading-[2.2rem] font-bold xl:text-left">
          A dedicated Full Stack MERN Developer based in New Delhi, India 📍
        </p>
        <p className="text-center max-w-[40rem] mt-[1rem] text-[1.01rem] leading-[1.6rem] text-[#767676] xl:text-left">
          As a Full Stack MERN Developer, I possess an impressive arsenal of
          skills in MongoDb, React, Express, Node Js, HTML, CSS, JavaScript and
          Tailwind. I excel in designing and maintaining responsive websites
          that offer a smooth user experience. My expertise lies in crafting
          dynamic, engaging interfaces through writing clean and optimized code
          and utilizing cutting-edge development tools and techniques. I am also
          a team player who thrives in collaborating with cross-functional teams
          to produce outstanding web applications.
        </p>
      </div>
    </div>
  );
};

export default About;
