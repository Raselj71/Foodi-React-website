import React from 'react'

import Link from "next/link";

import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import Item from "../components/Item";





function SpecialdishesLayout() {
  return (
    <section className="flex justify-center mt-40">
      <div className="container px-10 ">
        <div className="text-[#FF6868] font-bold text-[20px] tracking-widest">
          {" "}
          SPECIAL DISHES{" "}
        </div>

        <div className="flex justify-between mt-7 lg:mt-10">
          <p className="font-bold text-[25px] lg:text-[60px] lg:leading-[4rem]">
            Standout Dishes <br /> From Our Menu
          </p>

          <div className="flex items-center space-x-5">
            <button className="size-[40px] lg:size-[60px] bg-[#EFEFEF] rounded-full flex justify-center items-center">
              <GrFormPrevious className="text-[#6F6E6E] text-xl font-extrabold" />
            </button>
            <button className="size-[40px] lg:size-[60px] bg-primaryColor rounded-full flex justify-center items-center">
              <GrFormNext className="text-white" />
            </button>
          </div>
        </div>

        <div className="mt-16 mb-16 flex justify-center flex-wrap gap-10">
          <Item
            image={"/Fattoush salad.png"}
            title="Fattoush Salad"
            des={"Description of the item"}
            price={"24.00"}
            rating={"4.9"}
            bookmark={true}
          />
          <Item
            image={"/Vegetable salad.png"}
            title="Vegetable salad"
            des={"Description of the item"}
            price={"26.00"}
            rating={"4.6"}
            bookmark={false}
          />

          <Item
            image={"/Egg salad.png"}
            title="Egg vegi salad"
            des={"Description of the item"}
            price={"23.00"}
            rating={"4.5"}
            bookmark={false}
          />
        </div>
      </div>
    </section>
  );
}

export default SpecialdishesLayout