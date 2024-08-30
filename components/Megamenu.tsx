import React from "react";

interface propstype {
  image: any;
  heading: any;
  des: any;
}
function Megamenu({ image, heading, des }: propstype) {
  return (
    <div className="w-[170px] h-[170px] lg:w-[277px] lg:h-[300px]  md:w-[210px] md:h-[210px] px-4 py-2   lg:p-4 lg:py-2 md:p-8 drop-shadow-2xl rounded-[30px] bg-white flex flex-col justify-center items-center">
      <img src={image} alt="alt" className="size-7 md:size-auto" />
      <h2 className="text-[#5FE26C] text-[12px] uppercase font-bold lg:text-[24px] mt-2 md:mt-5 text-center">
        {heading}
      </h2>
      <p className="font-semibold text-[10px] lg:text-[20px] text-[#90BD95] mt-3 md:mt-5 text-center">
        {des}
      </p>
    </div>
  );
}

export default Megamenu;
