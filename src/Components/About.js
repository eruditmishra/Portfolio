import React from "react";
import AboutImg from "../Assets/about-img.webp";
import AboutWorking from "../Assets/about-working.png";
import roundText from "../Assets/round-text.png";

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
          <div className="absolute w-[5rem] h-[5rem] right-[-2rem] top-60 z-20">
            <img src={AboutWorking} alt="" />
          </div>
          {/* Spinning Image */}
          <div className="absolute w-[11rem] h-[11rem] right-[-5rem] top-[12.8rem] z-10">
            <img src={roundText} alt="" className=" animate-animationRotate" />
          </div>
        </div>
      </div>
      {/* Right COntainer */}
      <div className="flex flex-col flex-auto items-center xl:items-start">
        <p className=" text-center text-[#147EFB] text-[1.1rem] uppercase font-[750] leading-4 xl:text-left">
          About Me
        </p>
        <p className="text-center mt-[1rem] text-[#2D2E32] text-[1.6rem] leading-[2.2rem] font-bold xl:text-left">
          A dedicated Full Stack Developer based in New Delhi, India 📍
        </p>
        <p className="text-center max-w-[40rem] mt-[1rem] text-[1.01rem] leading-[1.6rem] text-[#767676] xl:text-left">
          A skilled full stack developer with strong expertise in creating
          exceptional web applications and stunning user interfaces. With a
          comprehensive understanding of both front-end and back-end
          development, I seamlessly integrate design and functionality to
          deliver user-friendly, high-performance web solutions. Passionate
          about leveraging the latest technologies and best practices, I ensure
          that every project not only meets but exceeds client expectations.
        </p>
      </div>
    </div>
  );
};

export default About;
