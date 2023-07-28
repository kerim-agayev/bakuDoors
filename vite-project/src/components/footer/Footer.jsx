import { NavLink, Outlet } from "react-router-dom"


import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";





function Footer() {
  return (
    <>
      <footer className="footer-04 mt-5 p-2 mx-2 mB">
        <div className="container-fluid bg-success rounded-2 p-3 text-white">
          <div className="row">
            <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
              <h2 className="footer-heading">
                <NavLink to="/" className="logo text-decoration-none text-white">
                  {/* <Image
                    className=" rounded cover  "
                    src="/images/kmplast10.PNG"
                    alt="Picture of the author"
                    width={200}
                    height={120}
                  /> */}
                </NavLink>
              </h2>
            </div>
            <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
              <h2 className="footer-heading">Mehsullar</h2>
              <ul className="list-unstyled">
                <li>


                  <NavLink

                    to="autoseksiyonalqapi"
                    className="fT py-1 d-block text-decoration-none text-white"
                  >
                    AVTOMATİK Seksiyonal QAPILAR
                  </NavLink>
                </li>
                <li>
                  <NavLink

                    to="autojaluzqapi"
                    className="fT py-1 d-block fT text-decoration-none text-white"
                  >
                    AVTOMATİK JALÜZ QAPILAR

                  </NavLink>
                </li>
                <li>
                  <NavLink

                    to="autofotoseldonerqapi"
                    className="fT py-1 d-block text-decoration-none text-white"
                  >
                    AVTOMATİK FOTOSEL ve Doner QAPILAR
                  </NavLink>
                </li>
                <li>
                  <NavLink

                    to="autodarvaza"
                    className="fT py-1 d-block text-decoration-none text-white"
                  >
                    AVTOMATİK DARVAZALAR
                  </NavLink>
                </li>
                <li>
                  <NavLink

                    to="pergoletent"
                    className="fT py-1 d-block text-decoration-none text-white"
                  >
                    PERGOLE VƏ TENT SİSTEMLƏRİ
                  </NavLink>
                </li>

                <li>
                  <NavLink

                    to="servisqurasdirma"
                    className="fT py-1 d-block text-decoration-none text-white"
                  >
                    Servis/ Qurasdirma
                  </NavLink>
                </li>
                <li>
                  <NavLink

                    to="saunabesetka"
                    className="fT py-1 d-block text-decoration-none text-white"
                  >
                    Sauna/ Besetka
                  </NavLink>
                </li>
                <li>
                  <NavLink

                    to="autobaryer"
                    className="fT py-1 d-block text-decoration-none text-white"
                  >
                    Avtomatik Baryer Sistemleri
                  </NavLink>
                </li>
                <li>
                  <NavLink

                    to="autosuse"
                    className="fT py-1 d-block text-decoration-none text-white"
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
                    className="fT py-1 d-block text-decoration-none text-white"
                  >
                    Ana Səhifə
                  </NavLink>
                </li>
                <li>
                  <NavLink

                    to="contact"
                    className="fT py-1 d-block text-decoration-none text-white"
                  >
                    Əlaqə
                  </NavLink>
                </li>
                <li>
                  <NavLink

                    to="questions"
                    className="fT py-1 d-block text-decoration-none text-white"
                  >
                    Çox verilən suallar
                  </NavLink>
                </li>
                <li>
                  <NavLink

                    to="about"
                    className="fT py-1 d-block text-decoration-none text-white"
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