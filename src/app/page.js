
import HeroSection from "../components/home/HeroSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import SlidingLogos from "@/components/home/SlidingLogos";
import SupportSection from "@/components/home/SupportSection";
import CreativeSection from "@/components/home/CreativeSection";
import TableComponent from "@/components/home/TableComponent";
import DynamicOurWorks from "@/components/home/DynamicOurWorks";
import FeaturesSection from "@/components/home/FeaturesSection";
import NewFooter from "@/components/layout/NewFooter";
import TestimonialSlider from "@/components/about/TestimonialSlider";
import BottomAboutSection from "@/components/home/BottomAboutSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SlidingLogos />
    {/*  <SupportSection />
       <TestimonialsSection /> */}
      <CreativeSection />
      <TableComponent />
      <DynamicOurWorks />
      <TestimonialSlider />
      <FeaturesSection />
      <BottomAboutSection />
      <NewFooter />

    </div>
  );
}
