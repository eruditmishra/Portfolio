import React from "react";
import data from "../data/data";
import { AiFillGithub } from "react-icons/ai";
import ArrowIcon from "../Assets/arrow-up.svg";

const Portfolio = () => {
  return (
    // Portfolio container
    <div id="portfolio" className="bg-[#f9f9f9]">
      <div className="flex flex-col mx-6 justify-center items-center  pt-12  pb-20 lg:mx-[16rem] lg:pt-40 lg:items-start">
        <h3 className="uppercase text-[1.08rem] leading-[0.9rem] text-[#147EFB] font-bold lg:text-left">
          portfolio
        </h3>
        <h2 className="text-[1.55rem] leading-[2rem] text-[#2D2E32] font-bold lg:text-left my-6">
          Each project is a unique piece of development 🧩
        </h2>
        {/* Cards Container*/}
        <div className="flex flex-col mt-8">
          {data.map((project) => {
            return project.id % 2 !== 0 ? (
              <div className="flex flex-col  mx-auto gap-12 items-center justify-center mb-12 bg-white rounded-xl shadow-card p-4 xl:flex-row lg:max-w-full">
                <div className=" shadow-card rounded-2xl overflow-hidden">
                  <a href={project.link} target="blank">
                    <img
                      src={project.image}
                      alt=""
                      className="w-[40rem] h-[18rem] rounded-2xl shadow-card "
                      //   style={{ boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
                    />
                  </a>
                </div>
                <div className="max-w-[25rem]">
                  <p className="uppercase text-[1.08rem] leading-[0.9rem] font-bold mb-4 ">
                    {project.Name}
                  </p>
                  <p className="text-[1.08rem] leading-[1.5rem] font-medium text-[#767676]">
                    {project.description}
                  </p>
                  <div className="flex gap-4 justify-center mt-6 items-center">
                    <span className=" shadow-card py-2 px-2 text-[1.08rem] leading-[1.5rem] font-bold ">
                      {project.technologies[0]}
                    </span>
                    <span className=" shadow-card py-2 px-2 text-[1.08rem] leading-[1.5rem] font-bold ">
                      {project.technologies[1]}
                    </span>
                  </div>
                  <div className="flex gap-4 mt-4 justify-center text-[1.08rem] leading-[1.5rem] font-medium text-[#2D2E32]">
                    <a href={project.code} target="blank">
                      <button className="flex gap-2 items-center">
                        <p>Code</p>
                        <AiFillGithub className="text-[2rem]" />
                      </button>
                    </a>
                    <a href={project.link} target="blank">
                      <button className="flex gap-2 items-center">
                        <p>Live Demo </p>
                        <img src={ArrowIcon} alt="" className="w-[1.5rem]" />
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col-reverse  mx-auto gap-12 items-center justify-center mb-12 bg-white rounded-xl shadow-card p-4 xl:flex-row lg:max-w-full ">
                <div className="max-w-[25rem]">
                  <p className="uppercase text-[1.08rem] leading-[0.9rem] font-bold mb-4 ">
                    {project.Name}
                  </p>
                  <p className="text-[1.08rem] leading-[1.5rem] font-medium text-[#767676]">
                    {project.description}
                  </p>
                  <div className="flex gap-4 justify-center mt-6 items-center">
                    <span className=" shadow-card py-2 px-2 text-[1.08rem] leading-[1.5rem] font-bold ">
                      {project.technologies[0]}
                    </span>
                    <span className=" shadow-card py-2 px-2 text-[1.08rem] leading-[1.5rem] font-bold ">
                      {project.technologies[1]}
                    </span>
                  </div>
                  <div className="flex gap-4 mt-4 justify-center text-[1.08rem] leading-[1.5rem] font-medium text-[#2D2E32]">
                    <a href={project.code} target="blank">
                      <button className="flex gap-2 items-center">
                        <p>Code</p>
                        <AiFillGithub className="text-[2rem]" />
                      </button>
                    </a>
                    <a href={project.link} target="blank">
                      <button className="flex gap-2 items-center">
                        <p>Live Demo </p>
                        <img src={ArrowIcon} alt="" className="w-[1.5rem]" />
                      </button>
                    </a>
                  </div>
                </div>
                <div className=" shadow-card rounded-2xl">
                  <a href={project.link} target="blank">
                    <img
                      src={project.image}
                      alt=""
                      className="w-[40rem] h-[18rem] rounded-2xl shadow-card"
                      //   style={{ boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
                    />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
