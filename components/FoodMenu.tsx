import React from "react";

interface propstype{
   image:any,
   title:any,
   dish:any
}

function FoodMenu({image ,title,dish}:propstype) {
  return (
    <div className="drop-shadow-2xl bg-white w-[326px] h-[326px] p-4 flex flex-col rounded-2xl justify-center items-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
      <div className="bg-[#C1F1C6] w-[150px] h-[150px] flex items-center justify-center rounded-full">
        <img src={image} alt="alt" />
      </div>
      <p className="mt-4 font-semibold text-[30px] text-[#1E1E1E]">{title}</p>
      <p className="font-medium text-[22px] text-[#555555]">({dish})</p>
    </div>
  );
}

export default FoodMenu;
