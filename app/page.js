

import HeadingLayout from "/pages/HeadingLayout.tsx";
import HeroLayout from "/pages/Herolayout.tsx";
import CategoryLayout from "/pages/CategoryLayout.tsx";
import SepcialdishesLayout from "/pages/SpecialdishesLayout.tsx";
import TestimonialLayout from "/pages/TestimonialLayout.tsx";
import ServiceLayout from '/pages/ServiceLayout.tsx'
import FooternavLayout from '/pages/FooternavLayout.tsx'
import FooterLayout from '/pages/FooterLayout.tsx'

export default function Home() {
  return (
    <main className="">
      {/* Heading start */}
      <HeadingLayout />

      <HeroLayout />

      <CategoryLayout />

      <SepcialdishesLayout />

      <TestimonialLayout/>

      <ServiceLayout/>

      <FooternavLayout/>

      <FooterLayout/>

      {/* Heding Ended */}
      {/* Hero Started */}

      {/* hero section ended */}

      {/* popular categories */}

      {/* popular categories ended */}

     

     

     
    </main>
  );
}
