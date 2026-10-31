
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";
import CategoriesSection from "./components/sections/CategoriesSection";
import PopularDishesSection from "./components/sections/PopularDishesSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <CategoriesSection />
        <PopularDishesSection />

      </main>
    </>
  );
}
