import React from "react";

import Link from "next/link";



import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";

function FooterLayout() {
  return (
    <footer className="flex justify-center mb-10">
      <div className="container px-10 flex flex-col space-y-4 lg:flex-row items-center ">
        <div className="flex  items-center gap-4">
          <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-[#FF6868] size-10 lg:size-14 bg-primaryColor   rounded-full flex items-center justify-center">
            <SlSocialFacebook className="text-xl text-white" />
          </button>

          <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300  hover:bg-[#FF6868] size-10 lg:size-14 bg-[#EDFFEF] rounded-full flex items-center justify-center">
            <SlSocialInstagram className="text-xl text-[#484848] " />
          </button>

          <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-[#FF6868] size-10 lg:size-14 bg-[#EDFFEF] rounded-full flex items-center justify-center">
            <SlSocialTwitter className="text-xl text-[#484848]" />
          </button>
          <button className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 hover:bg-[#FF6868] size-10 lg:size-14 bg-[#EDFFEF] rounded-full flex items-center justify-center">
            <SlSocialYoutube className="text-xl text-[#484848]" />
          </button>
        </div>

        <p className=" font-medium  lg:ml-40 lg:text-[22px] text-[#555555]">
          Copyright 2023 codewithrasel | All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default FooterLayout;
