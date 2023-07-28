import { FaWhatsapp } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';

const WhatsappIcon = () => {
  return (
    <>
 
       <a
      href="https://wa.me/+994503868998"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-icon "
    >
      <FaWhatsapp size={20} color="#fff" />
    </a>
    </>
 
  );
};

export default WhatsappIcon;