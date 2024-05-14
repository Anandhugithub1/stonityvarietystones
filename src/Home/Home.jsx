import NavbarComponent from "../Navbar/Navbar";
import HeroSection from "../sections/hero/Hero";
import ProjectSection from "../project/Project";
import Services from "../sections/services/Service";
import { HeroParallaxDemo } from "../utlis/about";
import Footer from "../sections/footer/footer";
import { GlobeDemo } from "../ui/globedemo";
import { SignupFormDemo } from "../components/contact";

const Home = () => {

 

  

  return (

        <>
          <NavbarComponent />

          <HeroSection />
          <HeroParallaxDemo />
          <ProjectSection />
          <Services />

          <div className="bg-green-50" loading="lazy" >
            <h1 className="text-center text-2xl pt-3 text-customColors-customgreen font-bold font-custom">
              Contact Us
            </h1>
            <div className="md:flex md:justify-center md:items-center  " loading="lazy">
              <SignupFormDemo />
              <GlobeDemo />
            </div>
          </div>

          <Footer />
        </>
  );
};

export default Home;
