import { useState, useEffect } from "react";
import NavbarComponent from "../Navbar/Navbar";
import HeroSection from "../sections/hero/Hero";
import ProjectSection from "../project/Project";
import Services from "../sections/services/Service";
import { HeroParallaxDemo } from "../utlis/about";
import { SparklesPreview } from "../ui/sparkles";
import Footer from "../sections/footer/footer";
import { GlobeDemo } from "../ui/globedemo";
import { SignupFormDemo } from "../components/contact";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 3 seconds (adjust as needed)
    }, 3000);

    // Clear the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <SparklesPreview /> // Show the preloader if loading is true
      ) : (
        <>
          <NavbarComponent />

          <HeroSection />
          <HeroParallaxDemo />
          <ProjectSection />
          <Services />

          <div className="bg-green-50">
            <h1 className="text-center text-2xl pt-3 text-customColors-customgreen font-bold font-custom">
              Contact Us
            </h1>
            <div className="md:flex md:justify-center md:items-center ">
              <SignupFormDemo />
              <GlobeDemo />
            </div>
          </div>

          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
