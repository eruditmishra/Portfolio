import React from "react";
import { AiFillGithub } from "react-icons/ai";
import ArrowIcon from "../Assets/arrow-up.svg";

const Card = ({ project }) => {
  return (
    <>
      <div className=" shadow-card rounded-2xl overflow-hidden">
        <a href={project.link} target="_blank" rel="noreferrer">
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
          {project.code && (
            <a href={project.code} target="_blank" rel="noreferrer">
              <button className="flex gap-2 items-center">
                <p>Code</p>
                <AiFillGithub className="text-[2rem]" />
              </button>
            </a>
          )}

          <a href={project.link} target="_blank" rel="noreferrer">
            <button className="flex gap-2 items-center">
              <p>Live Demo </p>
              <img src={ArrowIcon} alt="" className="w-[1.5rem]" />
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
