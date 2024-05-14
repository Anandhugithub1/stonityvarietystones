import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useScroll } from 'framer-motion';
import './Project.css';
import { useRef } from 'react';

const ProjectSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref =useRef(null);
  // eslint-disable-next-line no-unused-vars
  const {scrollProgress} =  useScroll({
        target:'',
        offset:["01" ,"1.33 1"]
    })
  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.project-section');
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight) {
        setIsVisible(true);
        // Remove the scroll event listener once section is visible
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Only run once on component mount

  return (
    <motion.section className="project-section bg-green-50 py-20" ref={ref}  initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
   >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-lg mb-8">Over 300 projects completed with 300+ happy clients and more than 6 years of experience</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="mb-8 md:mb-0 md:mr-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="text-6xl font-bold mb-2"
            >
              <CountUp start={isVisible ? 1 : 0} end={isVisible ? 300 : 0} duration={7} className='count' />
            </motion.div>
            <p className="text-xl text-gray-800">Projects Completed</p>
          </div>
          <div className="mb-8 md:mb-0 md:mr-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-6xl font-bold mb-2"
            >
              <CountUp start={isVisible ? 1 : 0} end={isVisible ? 300 : 0} duration={7} />
            </motion.div>
            <p className="text-xl text-gray-800">Happy Clients</p>
          </div>
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-6xl font-bold mb-2"
            >
              <CountUp start={isVisible ? 0 : 0} end={isVisible ? 6 : 0} duration={6} />
            </motion.div>
            <p className="text-xl text-gray-800">Years of Experience</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default ProjectSection;