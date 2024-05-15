import { motion } from 'framer-motion';
import './Hero.css';
import { Button } from '../../ui/button';
const HeroSection = () => {
  return (
    <div className="relative bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* You can use Swiper.js or any other slider library here */}
        <img className="w-full h-full object-cover" src="https://img.freepik.com/premium-photo/nature39s-palette-rich-palette-nature39s-hues-organic-elements-serene-tranquility-comes-together-harmonious-fusion-painting-serene-captivating-picture-natural-world_271410-7434.jpg" alt="Landscaping Business" />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      </div>
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:py-32 lg:px-8"> {/* Adjusted py values for increased height */}
        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Stonity Variety Stones
        </motion.h1>
        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-6 max-w-3xl text-xl text-gray-300"
        >
          We specialize in creating beautiful outdoor spaces that enhance the beauty and functionality of your property.
        </motion.p>
        {/* Call-to-action Button */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10"
        >
         <a href='#contact' loading="lazy">

         <Button
            borderRadius="1rem"
            className="inline-block px-6 py-2 text-base font-medium rounded-md text-white  hover:bg-green-700 button" >
Get Started
          </Button>
         </a>

        </motion.div>
      </div>
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0">
        
      </div>
    </div>
  );
}

export default HeroSection;
