import React from "react";
import { FaMapMarkedAlt, FaEnvelopeOpenText } from "react-icons/fa";

const Contact = () => {
  return (
    // Contact Wrapper
    <div id="contact" className="flex flex-col justify-center pt-20 bg-[#fff] ">
      <div className="flex flex-col justify-center items-center my-0 lg:mx-[20rem]">
        <h2 className="text-[1.08rem] leading-[1.5rem] font-bold text-[#147EFB] uppercase lg:text-left">
          contact
        </h2>
        <p className="text-[1.6rem] leading-[1.3rem] font-bold mt-4 lg:text-left">
          Reach Out To Me 👇 Reach Out To Me 👇
        </p>
        {/* COntact details wrapper */}
        <div className="flex flex-col justify-center items-center gap-12 my-16 lg:flex-row lg:gap-20">
          {/* Location Card */}
          <div className="flex flex-col justify-center items-center gap-2 lg:gap-8 lg:flex-row">
            {/* Map icon */}
            <div className=" text-[2rem] text-[#147EFB] rounded-full bg-[#fff] shadow-card p-6">
              <FaMapMarkedAlt />
            </div>
            {/* Location details */}
            <div>
              <p className="text-[1.08rem] leading-[1.5rem] font-bold lg:text-left">
                Location
              </p>
              <p className="text-[1.08rem] leading-[2rem] text-[#767676] lg:text-left">
                New Delhi, India
              </p>
            </div>
          </div>
          {/* Mail Card*/}
          <div className="flex flex-col justify-center items-center gap-2 lg:gap-8 lg:flex-row">
            {/* Mail Icon */}
            <div className=" text-[2rem] text-[#147EFB] rounded-full bg-[#fff] shadow-card p-6">
              <FaEnvelopeOpenText />
            </div>
            {/* Email Details */}
            <div>
              <p className="text-[1.08rem] leading-[1.5rem] font-bold lg:text-left">
                Mail
              </p>
              <a href="mailto:eruditmishra@gmail.com">
                <p className="text-[1.08rem] leading-[2rem] text-[#767676] lg:text-left">
                  eruditmishra@gmail.com
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
