import React from "react";

import Link from "next/link";

import { FaStar } from "react-icons/fa";

function TestimonialLayout() {
  return (
    <section className="flex justify-center mt-0 lg:mt-60 lg:mb-40">
      <div className="container px-10 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 h-[80vh] relative   ">
         
          <img
            src="/actor2.png"
            className="w-full h-auto absolute z-50 bottom-0  left-[40%] transform -translate-x-[40%]"
            alt="alt"
          />

        

          <div className="absolute -bottom-20 right-0">
            <div className="relative w-fit z-50">
              <img src="Rectangle 41.png" alt="alt" className='w-[250px] md:w-auto'/>
              <p className="absolute top-10 md:top-14 font-semibold text-[15px]  md:text-[20px] left-16 md:left-20">
                Our Best Chef 😁{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 h-[80vh] pt-24">
          <p className="font-bold text-[20px] text-[#FF6868] tracking-widest">
            TESTIMONIALS
          </p>
          <h2 className="font-bold text-[25px] md:text-[45px] text-left lg:text-[60px] lg:leading-[1.25] mt-5 lg:mt-10">
            What Our Customers <br /> Say About Us
          </h2>
          <p className="font-medium text-[12px] md:text-[20px] text-center lg:text-[26px] text-[#555555] mt-10">
            “I had the pleasure of dining at Foodi last night, and <br /> Im
            still raving about the experience! The attention to <br /> detail in
            presentation and service was impeccable”
          </p>

          <div className="mt-16 flex md:justify-center">
            <div className="flex ">
              <img src="/people1.png" className="size-[60px] md:size-[80px]" alt="alt" />
              <img
                src="/people2.png"
                className="size-[60px] md:size-[80px] relative -left-8"
                alt="alt"
              />
              <img
                src="/people3.png"
                className="size-[60px] md:size-[80px] relative -left-16"
                alt="alt"
              />
            </div>

            <div>
              <h2 className="font-semibold text-nowrap  text-[13px] lg:text-[26px]">
                Customer Feedback
              </h2>
              <div className="flex items-center lg:gap-4">
                <FaStar className="text-sm text-[#FFE605]" />{" "}
                <span className="text-[15px] lg:text-[24px] font-semibold text-textColor">
                  4.9
                </span>{" "}
                <span className="font-medium text-nowrap text-[15px] lg:text-[24px] text-[#807E7E]">
                  (18.6k Reviews)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialLayout;
