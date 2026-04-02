import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import CoreValuesSection from "./components/CoreValuesSection";
import WhyChooseSection from "./components/WhyChooseUsSection";
import ContactSection from "./components/ContactSection";
import { companyData } from "./data/companyData";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar companyName={companyData.companyName} />
      <HeroSection data={companyData} />
      <AboutSection data={companyData} />
      <ServicesSection services={companyData.services} />
      <CoreValuesSection values={companyData.coreValues} />
      <WhyChooseSection text={companyData.whyChooseUs} />
      <ContactSection companyName={companyData.companyName} />
      <Footer companyName={companyData.companyName} />
    </div>
  );
}

export default App;