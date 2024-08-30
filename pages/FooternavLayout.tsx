import React from 'react'

import Link from "next/link";


function FooternavLayout() {
  return (
    <section className="mt-40 flex justify-center mb-40">
      <div className="container px-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 justify-center  ">
          <div className=" lg:col-span-2 justify-self-center">
            <div className="text-2xl uppercase font-extrabold">
              <span className="bg-primaryColor text-white font-bold p-1 rounded-md  mr-[0.15rem]">
                F
              </span>
              oodi
            </div>
            <p className=" mt-4 lg:mt-8 text-textColor font-medium md:text-[17px] lg:text-[24px]">
              Savor the artistry where <br /> every dish is a culinary <br />{" "}
              masterpiece
            </p>
          </div>

          <div className="md:justify-self-center">
            <h3 className="font-semibold text-[20px] lg:text-[26px]">
              Usefull links
            </h3>

            <ul className="mt-4 text-[#555555] font-medium text-[15px] md:text-[17px] lg:text-[24px] lg:mt-8 flex flex-col lg:gap-4">
              <li className="hover:underline">
                <Link href="#"> About us</Link>{" "}
              </li>
              <li className="hover:underline">
                <Link href="#"> Events</Link>{" "}
              </li>
              <li className="hover:underline">
                <Link href="#"> Blogs</Link>{" "}
              </li>
              <li className="hover:underline">
                <Link href="#"> FAQ</Link>{" "}
              </li>
            </ul>
          </div>

          <div className='md:justify-self-center'>
            <h3 className="font-semibold text-[20px]  lg:text-[26px]">
              Main Menu
            </h3>

            <ul className="text-[#555555] font-medium lg:text-[24px] md:text-[17px] mt-4 lg:mt-8 flex flex-col lg:gap-4">
              <li className="hover:underline">
                <Link href="#"> Home</Link>{" "}
              </li>
              <li className="hover:underline">
                <Link href="#"> Offers</Link>{" "}
              </li>
              <li className="hover:underline">
                <Link href="#"> Menus</Link>{" "}
              </li>
              <li className="hover:underline">
                <Link href="#"> Reservation</Link>{" "}
              </li>
            </ul>
          </div>

          <div className='md:justify-self-center'>
            <h3 className="font-semibold text-[20px] lg:text-[26px]">
              Contact Us
            </h3>

            <ul className="text-[#555555] font-medium lg:text-[24px] md:text-[17px] mt-4 lg:mt-8 flex flex-col lg:gap-4">
              <li className="hover:underline">
                <Link href="#">example@email.com</Link>{" "}
              </li>
              <li className="hover:underline">
                <Link href="#">+64 958 248 966</Link>{" "}
              </li>
              <li className="hover:underline">
                <Link href="#"> Social media</Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FooternavLayout