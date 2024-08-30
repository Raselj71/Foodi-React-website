import React from 'react'

import Link from "next/link";

import Megamenu from "../components/Megamenu";


function ServiceLayout() {
  return (
    <section className="flex justify-center  lg:mt-80 mb-40">
      <div className="container px-10 flex flex-col lg:flex-row space-x-5">
        <div className="w-full lg:w-1/2">
          <p className="text-[#FF6868] text-[20px] font-bold uppercase tracking-widest">
            Our Story & Services
          </p>
          <h2 className="font-bold text-[25px] md:text-[50px] lg:text-[60px] mt-8 lg:mt-14 lg:leading-[4rem]">
            Our Culinary Journey <br /> And Services
          </h2>
          <div className="md:flex  md:flex-col md:justify-center md:items-center lg:justify-normal lg:items-start">
            <p className="font-medium text-[12px] lg:text-[26px] text-textColor mt-10 md:text-center  lg:text-left md:text-[20px] ">
              Rooted in passion, we curate unforgettable dining <br />{" "}
              experiences and offer exceptional services, <br /> blending
              culinary artistry with warm hospitality.
            </p>

            <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-[#FF6868] lg:px-14 md:w[60px] px-10 py-3 lg:py-4 md:px-14 md:py-4 font-semibold lg:text-[26px] bg-primaryColor text-white rounded-full mt-14">
              Explore
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 space-y-4 md:gap-5 lg:gap-7 mt-8 ">
          <Megamenu
            image={"/salad.png"}
            heading={"catering"}
            des={"Delight your guests with our flavors and presentation"}
          />
          <Megamenu
            image={"/fast.png"}
            heading={"fast delivery"}
            des={"We delivery our order promptly to your door"}
          />
          <Megamenu
            image={"/cart.png"}
            heading={"online ordering"}
            des={"Explore menu & order with ease using our Online Ordering"}
          />
          <Megamenu
            image={"/catering.png"}
            heading={"gift cards"}
            des={"Give the gift of exceptional dining with Foodi Gift Cards"}
          />
        </div>
      </div>
    </section>
  );
}

export default ServiceLayout