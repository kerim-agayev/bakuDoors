
import { NavLink,  Link } from "react-router-dom"
import Logo from '../../assets/logo.png'
import { motion, useInView, useAnimation } from 'framer-motion'
import { useEffect, useState , useRef} from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { useTranslation } from 'react-i18next';




function Footer() {
  const {t} = useTranslation()
  const ref = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const isinview = useInView(ref)
  const isinview2 = useInView(ref2)
  const isinview3 = useInView(ref3)
  const maincontrols = useAnimation()
  const maincontrols2 = useAnimation()
  const maincontrols3 = useAnimation()

  useEffect(() => {

    if (isinview) {
      maincontrols.start('visible')

    }
    if (isinview2) {
      maincontrols2.start('visible')
    }
    if (isinview3) {
      maincontrols3.start('visible')
    }
  }, [isinview, isinview2, isinview3])



  useEffect(() => {
 
    const handleScroll = () => {
      const scrollY = window.scrollY; 
    
      setFooterMarginTop(scrollY >= 350 ? 200 : 350);
    };

    window.addEventListener('scroll', handleScroll);

    // Unmount olduğunda event listener'ı legv edririk
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [footerMarginTop, setFooterMarginTop] = useState(350); 
  return (
    <>
      <footer className="footer-04  p-2 mx-2 mt-100" style={{ marginTop: `${footerMarginTop}px`}}>
        <div className="container-fluid bg-success rounded-2 p-3 text-white">
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
              <h2 className="footer-heading">
                <Link to="/" className="logo text-decoration-none text-white">
                
                  <img src={Logo} alt=""  style={{width:'12.5rem', height:'7.5rem'}}/>
                </Link>
              </h2>
            </div>
            <motion.div ref={ref} className="col-md-6 col-lg-3 mb-md-0 mb-4"
              variants={{
                hidden: { opacity: 0, translateX: -300 },
                visible: { opacity: 1, translateX: 0 }
  
              }}
              initial='hidden'
              animate={maincontrols}
              transition={{ duration: 1 }}
            
            
            >
              <h2 className="footer-heading">  {t('products')}</h2>
              <ul className="list-unstyled">
                <li>


                  <NavLink

                    to="autoseksiyonalqapi"
                    className="fT py-1 d-block text-decoration-none text-white rounded rounded"
                  >
                   {t('a')}
                  </NavLink>
                </li>
                <li>
                  <NavLink

                    to="autojaluzqapi"
                    className="fT py-1 d-block fT text-decoration-none text-white rounded"
                  >
                  {t('b')}

                  </NavLink>
                </li>
                <li>
                  <NavLink

                    to="autofotoseldonerqapi"
                    className="fT py-1 d-block text-decoration-none text-white rounded"
                  >
                {t('i')}
                  </NavLink>
                </li>
                <li>
                  <NavLink

                    to="autodarvaza"
                    className="fT py-1 d-block text-decoration-none text-white rounded"
                  >
                {t('d')}
                  </NavLink>
                </li>
                <li>
                  <NavLink

                    to="pergoletent"
                    className="fT py-1 d-block text-decoration-none text-white rounded"
                  >
                   {t('e')}
                  </NavLink>
                </li>
                <li>
                  <NavLink

                    to="servisqurasdirma"
                    className="fT py-1 d-block text-decoration-none text-white rounded"
                  >
                 {t('c')}
                  </NavLink>
                </li>
                <li>
                  <NavLink

                    to="saunabesetka"
                    className="fT py-1 d-block text-decoration-none text-white rounded"
                  >
                   {t('h')}
                  </NavLink>
                </li>
                <li>
                  <NavLink

                    to="autobaryer"
                    className="fT py-1 d-block text-decoration-none text-white rounded"
                  >
                   {t('g')}
                  </NavLink>
                </li>
                <li>
                  <NavLink

                    to="autosuse"
                    className="fT py-1 d-block text-decoration-none text-white rounded"
                  >
                   {t('f')}
                  </NavLink>
                </li>
                <li>
                  <NavLink

                    to="yuklemerampasi"
                    className="fT py-1 d-block text-decoration-none text-white rounded"
                  >
                {t('j')}
                  </NavLink>
                </li>
              </ul>
            </motion.div>
            <motion.div ref={ref2} className="col-md-6 col-lg-3 mb-md-0 mb-4"
              variants={{
                hidden: { opacity: 0, translateX: -300 },
                visible: { opacity: 1, translateX: 0 }
  
              }}
              initial='hidden'
              animate={maincontrols2}
              transition={{ duration: 1 }}
            >
              <h2 className="footer-heading">{t('pages')}</h2>
              <ul className="list-unstyled">
                <li>
                  <NavLink

                    to="/"
                    className="fT py-1 d-block text-decoration-none text-white rounded"
                  >
                  {t('home')}
                  </NavLink>
                </li>
                <li>
                  <NavLink

                    to="contact"
                    className="fT py-1 d-block text-decoration-none text-white rounded"
                  >
                 {t('contact')}
                  </NavLink>
                </li>
                <li>
                  <NavLink

                    to="questions"
                    className="fT py-1 d-block text-decoration-none text-white rounded"
                  >
                   {t('questions')}
                  </NavLink>
                </li>
                <li>
                  <NavLink

                    to="about"
                    className="fT py-1 d-block text-decoration-none text-white rounded"
                  >
                 {t('about')}
                  </NavLink>
                </li>
              </ul>
            </motion.div>
            <motion.div ref={ref3} className="col-md-6 col-lg-3 mb-md-0 mb-4"
              variants={{
                hidden: { opacity: 0, translateX: -300 },
                visible: { opacity: 1, translateX: 0 }
  
              }}
              initial='hidden'
              animate={maincontrols3}
              transition={{ duration: 1 }}
            
            >
              <h2 className="footer-heading ">{t('follow')}</h2>
              <ul className="ftco-footer-social p-0 ms-2">
                <li>
                  <a href="https://www.instagram.com/bakudoors.com_/">
                    <span>
                      <AiOutlineInstagram className="" size={25} />
                    </span>
                  </a>
                </li>
                <li>
                <a href="https://www.facebook.com/bakudoors.mmc/">
                    <span>
                      <BsFacebook className="" size={23} />
                    </span>
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
        <motion.div className="w-100  border-top py-1 bg-success text-white text-end">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-8">
                <p className="copyright">
                  Copyright &copy;All rights reserved | This template is made
                  with <i className="ion-ios-heart" aria-hidden="true"></i> by K&A
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </footer>
    </>
  );
}

export default Footer;