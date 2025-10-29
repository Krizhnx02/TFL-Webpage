import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import OurApproach from "./components/OurApproach";
import OurServices from "./components/OurServices";
import OurNetwork from "./components/OurNetwork";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutUs />
      <OurApproach />
      <OurServices />
      <OurNetwork />
      <Footer />
    </div>
  );
}
