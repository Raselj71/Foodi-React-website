import React from "react";

import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import FoodMiniItem from "../components/FoodMiniItem";

function Herolayout() {
  return (
    <section className="flex justify-center  lg:mt-8  ">
      <div className="container flex flex-col-reverse lg:flex-row items-center px-10 gap-8">
        <div className="">
          <h2 className="text-[30px] md:text-[55px] lg:text-[62px] font-extrabold my-10 lg:leading-[6rem]">
            Dive into Delights <br /> Of Delectable{" "}
            <span className="text-primaryColor">Food</span>
          </h2>

          <p className="text-[16px] text-pretty font-medium md:text-[20px] lg:text-[26px] mb-10">
            Where Each Plate Weaves a Story of Culinary <br /> Mastery and
            Passionate Craftsmanship
          </p>

          <div className="flex items-center">
            <button className="bg-primaryColor text-nowrap text-[12px] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-[#FF6868]  text-white font-semibold lg:text-[26px] md:text-[20px] px-10 py-4 rounded-full drop-shadow-lg">
              Order Now
            </button>

            <button className="ml-5 text-[12px] text-nowrap hover:bg-white  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:drop-shadow-xl px-4 py-2 rounded-full flex items-center lg:text-[26px] md:text-[20px] font-semibold text-subHeadingColor">
              Watch Video
              <div className="size-8 md:size-12 ml-5 flex items-center justify-center rounded-full drop-shadow-lg bg-white">
                <FaPlay className=" text-sm md:text-xl" />
              </div>
            </button>
          </div>
        </div>
        <div className="w-full lg:w-[55%] relative h-[70vh] flex justify-center items-center  float-left">
          <div className="absolute bg-primaryColor rounded-full w-[260px] md:w-[410px] md:h-[410px]  h-[260px] top-[30%] md:top-[29%] left-[10%] md:left-[22%] lg:w-[450px] lg:h-[450px] lg:top-[23%] lg:left-[25%] "></div>
          <img
            src="/Intersect.png"
            className="absolute w-[500px] h-auto   lg:w-[500px] lg:h-[550px]"
            alt="alt"
          />

          <img
            src="/hot.png"
            className=" w-[150px] md:w-[300px]  lg:w-auto absolute -left-10 top-[35%]  lg:top-[22%] lg:left-0"
            alt="alt"
          />

          <div className=" absolute bottom-14 lg:-bottom-6 flex space-x-3 lg:gap-10">
            <FoodMiniItem />
            <FoodMiniItem />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herolayout;
