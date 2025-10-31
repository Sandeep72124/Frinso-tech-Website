import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AwardsSection from "@/components/AwardsSection";
import ProductsSection from "@/components/ProductsSection";
import SolutionsSection from "@/components/SolutionsSection";
import ProjectsSection from "@/components/ProjectsSection";
import PartnersSection from "@/components/PartnersSection";
import WhyUs from "@/components/WhyUs";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ClientsSection from "@/components/ClientsSection";
import AboutSection from "@/components/AboutSection";
import DashboardShowcase from "@/components/DashboardShowcase";
import VisionMissionSection from "@/components/VisionMissionSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import StatsSection from "@/components/StatsSection";
import StatsSection2 from "@/components/StatsSection2";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsSection2 />
      <PartnersSection /> 
      <AboutSection/>
      <StatsSection/>
      <WhyUs />
      <ProductsSection />
      <ProjectsSection />
      <SolutionsSection />
      <DashboardShowcase/>
      <AwardsSection />
      <VisionMissionSection/>
      <ClientsSection />
      <CTA />
      <Footer />
      <ScrollToTopButton/>
    </main>
  );
}
