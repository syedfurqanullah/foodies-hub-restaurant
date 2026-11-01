
import HeroSection from "./components/sections/HeroSection";
import HomeDetailsSection from "./components/sections/HomeDetailsSection";
import CategoriesSection from "./components/sections/CategoriesSection";
import PopularDishesSection from "./components/sections/PopularDishesSection";
import DealsSection from "./components/sections/DealsSection";
import WhyChooseUsSection from "./components/sections/WhyChooseUsSection";
import TestimonialsSection from "./components/sections/TestimonialsSection";
import WhatsAppButton from "./components/ui/WhatsAppButton";
import HomeGallerySection from "./components/sections/HomeGallerySection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <HomeDetailsSection />
        <PopularDishesSection />
        <CategoriesSection />
        <DealsSection />
        <WhyChooseUsSection />
        <HomeGallerySection />
        <TestimonialsSection />
        <WhatsAppButton />
     

      </main>
    </>
  );
}
