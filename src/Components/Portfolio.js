import React from "react";
import data from "../data/data";
import Card from "./Card";

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
                <Card project={project} />
              </div>
            ) : (
              <div className="flex flex-col  mx-auto gap-12 items-center justify-center mb-12 bg-white rounded-xl shadow-card p-4 xl:flex-row-reverse lg:max-w-full">
                <Card project={project} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
