import { NavLink, Outlet , Link } from "react-router-dom"
import Logo from '../../assets/logo.png'

import React, { useEffect, useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";




function Footer() {
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
                  {/* <Image
                    className=" rounded cover  "
                    src="/images/kmplast10.PNG"
                    alt="Picture of the author"
                    width={200}
                    height={120}
                  /> */}
                  <img src={Logo} alt=""  style={{width:'12.5rem', height:'7.5rem'}}/>
                </Link>
              </h2>
            </div>
            <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
              <h2 className="footer-heading">Mehsullar</h2>
              <ul className="list-unstyled">
                <li>


                  <NavLink

                    to="autoseksiyonalqapi"
                    className="fT py-1 d-block text-decoration-none text-white rounded rounded"
                  >
                    AVTOMATİK Seksiyonal QAPILAR
                  </NavLink>
                </li>
                <li>
                  <NavLink

                    to="autojaluzqapi"
                    className="fT py-1 d-block fT text-decoration-none text-white rounded"
                  >
                    AVTOMATİK JALÜZ QAPILAR

                  </NavLink>
                </li>
                <li>
                  <NavLink

                    to="autofotoseldonerqapi"
                    className="fT py-1 d-block text-decoration-none text-white rounded"
                  >
                    AVTOMATİK FOTOSEL ve Doner QAPILAR
                  </NavLink>
                </li>
                <li>
                  <NavLink

                    to="autodarvaza"
                    className="fT py-1 d-block text-decoration-none text-white rounded"
                  >
                    AVTOMATİK DARVAZALAR
                  </NavLink>
                </li>
                <li>
                  <NavLink

                    to="pergoletent"
                    className="fT py-1 d-block text-decoration-none text-white rounded"
                  >
                    PERGOLE VƏ TENT SİSTEMLƏRİ
                  </NavLink>
                </li>

                <li>
                  <NavLink

                    to="servisqurasdirma"
                    className="fT py-1 d-block text-decoration-none text-white rounded"
                  >
                    Servis/ Qurasdirma
                  </NavLink>
                </li>
                <li>
                  <NavLink

                    to="saunabesetka"
                    className="fT py-1 d-block text-decoration-none text-white rounded"
                  >
                    Sauna/ Besetka
                  </NavLink>
                </li>
                <li>
                  <NavLink

                    to="autobaryer"
                    className="fT py-1 d-block text-decoration-none text-white rounded"
                  >
                    Avtomatik Baryer Sistemleri
                  </NavLink>
                </li>
                <li>
                  <NavLink

                    to="autosuse"
                    className="fT py-1 d-block text-decoration-none text-white rounded"
                  >
                    Avtomatik Suse Sistemleri
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
              <h2 className="footer-heading">Səhifələr</h2>
              <ul className="list-unstyled">
                <li>
                  <NavLink

                    to="/"
                    className="fT py-1 d-block text-decoration-none text-white rounded"
                  >
                    Ana Səhifə
                  </NavLink>
                </li>
                <li>
                  <NavLink

                    to="contact"
                    className="fT py-1 d-block text-decoration-none text-white rounded"
                  >
                    Əlaqə
                  </NavLink>
                </li>
                <li>
                  <NavLink

                    to="questions"
                    className="fT py-1 d-block text-decoration-none text-white rounded"
                  >
                    Çox verilən suallar
                  </NavLink>
                </li>
                <li>
                  <NavLink

                    to="about"
                    className="fT py-1 d-block text-decoration-none text-white rounded"
                  >
                    Şirkət haqqında
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
              <h2 className="footer-heading ">Follow us</h2>
              <ul className="ftco-footer-social p-0 ms-2">
                <li>
                  <a to="https://www.instagram.com/kenan060584/">
                    <span>
                      <AiOutlineInstagram className="" size={25} />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>
                      <BsFacebook className="" size={23} />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-100  border-top py-1 bg-success text-white text-end">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-8">
                <p className="copyright">
                  Copyright &copy;All rights reserved | This template is made
                  with <i className="ion-ios-heart" aria-hidden="true"></i> by
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;