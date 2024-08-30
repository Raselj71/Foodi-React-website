import React from "react";

interface propstype {
  image: any;
  heading: any;
  des: any;
}
function Megamenu({ image, heading, des }: propstype) {
  return (
    <div className="lg:w-[277px] lg:h-[300px] w-[170px] md:w-[210px] p-4  lg:p-4 lg:py-2 md:p-8 drop-shadow-2xl rounded-[30px] bg-white flex flex-col justify-center items-center">
      <img src={image} alt="alt" />
      <h2 className="text-[#5FE26C] uppercase font-bold lg:text-[24px] mt-5 text-center">
        {heading}
      </h2>
      <p className="font-semibold text-[12px] lg:text-[20px] text-[#90BD95] mt-5 text-center">
        {des}
      </p>
    </div>
  );
}

export default Megamenu;
