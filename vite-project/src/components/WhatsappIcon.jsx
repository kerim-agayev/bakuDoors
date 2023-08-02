import { FaWhatsapp } from 'react-icons/fa';


const WhatsappIcon = () => {
  return (
    <>
 
       <a
      href="https://wa.me/+994504003355"
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