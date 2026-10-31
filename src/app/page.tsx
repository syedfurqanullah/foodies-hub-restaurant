
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";
import CategoriesSection from "./components/sections/CategoriesSection";
import PopularDishesSection from "./components/sections/PopularDishesSection";
import DealsSection from "./components/sections/DealsSection";
import WhyChooseUsSection from "./components/sections/WhyChooseUsSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <CategoriesSection />
        <PopularDishesSection />
        <DealsSection />
        <WhyChooseUsSection />

      </main>
    </>
  );
}
