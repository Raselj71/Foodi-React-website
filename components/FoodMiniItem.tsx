import React from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

function FoodMiniItem() {
  return (
    <div className="bg-white w-40 md:w-fit drop-shadow-2xl p-2  md:p-3  lg:p-5 rounded-xl flex gap-1 md:gap-4 lg:gap-6 items-center">
      <img src="/Maskgroup.png" className="size-14  lg:size-20" alt='alt'/>

      <div className="space-y-1">
        <p className="font-semibold text-[11px] text-nowrap md:text-[16px] lg:text-[22px] text-[#2C2C2C]">
          Spicy noodles
        </p>
        <div className="flex items-center md:gap-1">
          <FaStar className="text-xs md:text-base lg:text-xl text-[#FFE605]" />{" "}
          <FaStar className="text-xs md:text-base lg:text-xl text-[#FFE605]" />{" "}
          <FaStar className="text-xs md:text-base lg:text-xl text-[#FFE605]" />
          <FaStar className="text-xs md:text-base lg:text-xl text-[#FFE605]" />
          <CiStar className="text-xs md:text-base  lg:text-xl text-[#2a2a2a]" />
        </div>
        <p className="font-semibold text-[12px] md:text-[17px]  lg:text-[24px] text-[#515151]">
          <span className=" md:text-[14px] lg:text-[18px] text-[#FF7979]">$</span>18.00
        </p>
      </div>
    </div>
  );
}

export default FoodMiniItem;
