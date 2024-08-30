"use client";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { TbPhoneCall } from "react-icons/tb";
import { IoChevronDownOutline } from "react-icons/io5";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";

function HeadingLayout() {
  const [menu, setMenu] = useState(true);
  const handleClick = () => {
    setMenu(!menu);
  };

  return (
    <section className="flex justify-center">
      <nav className="container flex justify-between items-center mt-8 px-10 relative">
        <div>
          <div className="text-2xl uppercase font-extrabold">
            <span className="bg-primaryColor text-white font-bold p-1 rounded-md  mr-[0.15rem]">
              F
            </span>
            oodi
          </div>
        </div>

        <ul
          className={`${
            menu ? "hidden" : "flex"
          } absolute top-full left-0 z-50  px-10 py-10 gap-4 right-0 mt-2 lg:relative lg:flex lg:top-auto lg:left-auto lg:right-auto lg:mt-0 flex-col lg:flex-row lg:gap-8 font-medium text-headingColor text-[20px] bg-white lg:bg-transparent`}>
          <li>
            <Link
              className="text-primaryColor transition ease-in-out delay-150  duration-300 "
              href="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-2 hover:text-primaryColor transition ease-in-out delay-150   duration-300"
              href="/">
              Menu{" "}
              <IoChevronDownOutline className="text-primaryColor text-lg" />
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-2 hover:text-primaryColor transition ease-in-out delay-150   duration-300"
              href="/">
              Services{" "}
              <IoChevronDownOutline className="text-primaryColor text-lg" />
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-primaryColor transition ease-in-out delay-150   duration-300"
              href="/">
              Offers
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-8">
          <button className="text-[30px]">
            <IoSearchOutline />
          </button>
          <button className="text-[30px] relative">
            <span className="text-sm absolute -top-3 -right-3 bg-primaryColor text-white size-4 p-3 flex items-center justify-center rounded-full">
              8
            </span>
            <IoCartOutline />
          </button>

          <button className=" hidden lg:flex transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-[#FF6868]   items-center text-[20px] bg-primaryColor text-white px-6 py-3 font-medium gap-2 rounded-full">
            <TbPhoneCall className="text-2xl" /> Contact
          </button>

          <button className="text-xl lg:hidden" onClick={handleClick}>
            <RiMenu3Line />
          </button>
        </div>
      </nav>
    </section>
  );
}

export default HeadingLayout;
