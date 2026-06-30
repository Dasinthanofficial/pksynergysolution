import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import CoreValuesSection from "./components/CoreValuesSection";
import WhyChooseSection from "./components/WhyChooseUsSection";
import ContactSection from "./components/ContactSection";
import InquiryModal from "./components/InquiryModal";
import { companyData } from "./data/companyData";

const SECTION_IDS = {
  home: "home",
  about: "about",
  services: "services",
  values: "values",
  contact: "contact",
};

function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const scrollToPath = (path) => {
    const normalizedPath = path === "/" ? "home" : path.replace(/^\/+/, "");
    const sectionId = SECTION_IDS[normalizedPath];

    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (sectionId) {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNavigate = (path) => {
    const nextPath = path === "/" ? "/" : `/${path.replace(/^\/+/, "")}`;

    if (window.location.pathname !== nextPath) {
      window.history.pushState({}, "", nextPath);
    }

    scrollToPath(nextPath);
  };

  useEffect(() => {
    const onPopState = () => scrollToPath(window.location.pathname);

    onPopState();
    window.addEventListener("popstate", onPopState);

    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar companyName={companyData.companyName} onNavigate={handleNavigate} />

      <HeroSection
        data={companyData}
        onOpenInquiry={() => setIsInquiryOpen(true)}
      />

      <AboutSection data={companyData} />
      <ServicesSection services={companyData.services} />
      <CoreValuesSection values={companyData.coreValues} />
      <WhyChooseSection text={companyData.whyChooseUs} />
      <ContactSection companyName={companyData.companyName} />
      <Footer companyName={companyData.companyName} onNavigate={handleNavigate} />

      <InquiryModal
        open={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        companyName={companyData.companyName}
      />
    </div>
  );
}

export default App;