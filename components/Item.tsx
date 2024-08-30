import React from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

interface propstype{
  image:any,
  title:any,
  des:any,
  price:any,
  rating:any,
  bookmark:any,

}

function Item({image,title, des,price, rating,bookmark}:propstype) {
  return (
    <div className="relative drop-shadow-2xl overflow-hidden  flex justify-center flex-col bg-white p-10 lg:p-20 lg:w-[446px] lg:h-[523px] rounded-3xl transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
      <div className="absolute bg-primaryColor w-[87px] h-[75px] flex justify-center items-center top-0 right-0 object-cover rounded-bl-[3rem]">
        {bookmark ? (
          <IoHeart className="text-xl text-white" />
        ) : (
          <FaRegHeart className="text-xl text-white" />
        )}
      </div>
      <img src={image} alt="alt" />
      <p className="font-semibold text-[25px] lg:text-[30px] mt-4">{title}</p>
      <p className="font-semibold  lg:text-[22px] text-[#555555]">{des}</p>
      <div className="mt-4 lg:mt-8 flex justify-between items-center">
        <p className="font-semibold text-xl lg:text-3xl">
          <span className="text-[16px] lg:text-[24px] text-[#FF6868] ">$</span>
          {price}
        </p>
        <div className="mt-4 flex items-center font-semibold text-xl lg:text-2xl justify-center space-x-3">
          <FaStar className="text-[#FFE605]" />
          <p>4.9</p>
        </div>
      </div>
    </div>
  );
}

export default Item;
