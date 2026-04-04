import { useState } from "react";
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

function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar companyName={companyData.companyName} />

      <HeroSection
        data={companyData}
        onOpenInquiry={() => setIsInquiryOpen(true)}
      />

      <AboutSection data={companyData} />
      <ServicesSection services={companyData.services} />
      <CoreValuesSection values={companyData.coreValues} />
      <WhyChooseSection text={companyData.whyChooseUs} />
      <ContactSection companyName={companyData.companyName} />
      <Footer companyName={companyData.companyName} />

      <InquiryModal
        open={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        companyName={companyData.companyName}
      />
    </div>
  );
}

export default App;