import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,  faInstagram, faWhatsapp, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="p-4 bg-customColors-customgreen md:p-8 lg:p-10 dark:bg-gray-800 font-custom" id="footer" > 
      <div className="mx-auto max-w-screen-xl text-center">
        <a href="#" className="flex justify-center items-center text-2xl font-semibold text-white dark:text-white">
          ꜱᴛᴏɴɪᴛʏ
        </a>
        <p className="my-6 text-white dark:text-gray-400">Your trusted partner for all landscaping needs..</p>
        <ul className="flex flex-wrap justify-center items-center mb-6 text-white dark:text-white">
          <li>
            <a href="#about" className="mr-4 hover:underline md:mr-6">About</a>
          </li>
         
          <li>
            <a href="#services" className="mr-4 hover:underline md:mr-6">Services</a>
          </li>
          <li>
            <a href="#contact" className="mr-4 hover:underline md:mr-6">Contact</a>
          </li>
        </ul>
        <div className="flex justify-center items-center mb-4 text-white">
          <a href="https://www.facebook.com/people/Natural-STONE-Paving/100063899140081/?mibextid=ZbWKwL" className="mr-4" id="socialmedia">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://api.whatsapp.com/send?phone=919645675570" className="mr-4">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
          <a href="https://www.instagram.com/naturalstonepavings/?igshid=MzRlODBiNWFlZA%3D%3D" className="mr-4">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="https://www.youtube.com/@aryanstonitystones9556" className="mr-4">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
        </div>
        <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2024-2025       ꜱᴛᴏɴɪᴛʏ
          <a href="#" className="hover:underline"></a>. All Rights Reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;