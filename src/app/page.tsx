
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/sections/HeroSection";
import CategoriesSection from "./components/sections/CategoriesSection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
                <CategoriesSection />
      </main>
    </>
  );
}
