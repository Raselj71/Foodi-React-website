import React from "react";

import Link from "next/link";


import FoodMenu from "../components/FoodMenu";







function CategoryLayout() {
  return (
    <section className="flex justify-center mt-40 lg:mt-52 mb-10 ">
      <div className="container px-10 flex flex-col justify-center items-center ">
        <h2 className="font-bold text-xl text-[#FF6868] tracking-widest">
          CUSTOMER FAVORITES
        </h2>
        <h2 className="font-bold text-[30px] mt-3 md:text-[50px] lg:text-[60px] text-black">
          Popular Categories
        </h2>

        <div className="mt-10 flex flex-wrap justify-center  gap-10">
          <FoodMenu
            image={"/pngwing 4.png"}
            title={"Main Dish"}
            dish={"86 dishes"}
          />
          <FoodMenu
            image={"/pngwing 6.png"}
            title={"Break Fast"}
            dish={"12 break fast"}
          />
          <FoodMenu
            image={"/pngwing 3.png"}
            title={"Dessert"}
            dish={"48 dessert"}
          />
          <FoodMenu
            image={"/pngwing 7.png"}
            title={"Browse All"}
            dish={"255 Items"}
          />
        </div>
      </div>
    </section>
  );
}

export default CategoryLayout;
