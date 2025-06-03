import { useMediaQuery } from "react-responsive";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import OurServices from "./components/OurServices";
import "./App.css";
import Testimonials from "./components/Testimonials";
import CaseStudies from "./components/CaseStudies";
import TrustUs from "./components/TrustUs";
import TestimonialsMobile from "./components/TestimonialsMobile";
import Footer from "./components/Footer";
import TimelineSmall from "./components/TimelineSmall";
import Hire from "./components/Hire";
import PreviousProjects from "./components/PreviousProjects";
import DevelopmentApproach from "./components/DevelopmentApproach";
import TechStack from "./components/TechStack";
import FeaturedResources from "./components/FeaturedResources";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";

function App() {
  const isMobile = useMediaQuery({ maxWidth: 940 });

  return (
    <div className="">
      <NavBar />
      <HeroSection />
      <OurServices />
      <TrustUs />
      {isMobile ? <TestimonialsMobile /> : <Testimonials />}
      <CaseStudies />
      <PreviousProjects />
      <DevelopmentApproach />
      <TechStack />
      <TimelineSmall />
      <FeaturedResources />
      <Hire />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
