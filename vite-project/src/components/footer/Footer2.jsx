import { useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";
import { FaTimes, FaEnvelopeSquare } from "react-icons/fa";
import { LiaGoogle } from "react-icons/lia";
import {
  BsTelephonePlusFill,
  BsFillEnvelopePlusFill,
  BsFacebook,
  BsTwitter,
  BsSkype,
} from "react-icons/bs";

import { Link } from "react-router-dom";
import Logo from "/logo.png";

function Footer2() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setFooterMarginTop(scrollY >= 350 ? 200 : 350);
    };

    window.addEventListener("scroll", handleScroll);

    // Unmount olduğunda event listener'ı legv edririk
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [footerMarginTop, setFooterMarginTop] = useState(250);
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="container" style={{ marginTop: `${footerMarginTop}px` }}>
        <div className="row">
          <div className="col-6 col-md-3 mb-5">
            <div className="logo">
              <Link to="/" className="logofooter text-decoration-none text-white">
                <img
                  src={Logo}
                  alt=""
                  style={{ width: "8rem", height: "5rem" }}
                />
              </Link>
            </div>
            <div className="map mt-3">
              <button
                onClick={() => setOpen(!open)}
                type="button"
                className="btn btn-primary "
              >
                Biz Xəritədə
              </button>
            </div>
          </div>
          <div className="col-6 col-md-3 mb-5">
            <h5>Sayt xəritəsi</h5>
            <div className="list-group footerFSize">
              <div className="footerFlex">
                <AiOutlineRight />
                Ana Səhifə
              </div>
              <div className="footerFlex">
                <AiOutlineRight />
                Əlaqə
              </div>
              <div className="footerFlex">
                <AiOutlineRight />
                Haqqımızda
              </div>
              <div className="footerFlex">
                <AiOutlineRight />
                İnsan Resursları
              </div>
              <div className="footerFlex">
                <AiOutlineRight />
                And a fifth one
              </div>
              <div className="footerFlex">
                <AiOutlineRight />
                And a fifth one
              </div>
            </div>
          </div>
          <div className="col-12 col-md-3 mb-5">
            <h5>Bizimlə Əlaqə</h5>
            <div className="footerFlex2 footerFSize">
              <p className="footerFlex3">
                <GrLocation size={20} />
                Bakı şəhəri, Xətai r. Süleyman vəzirov küç. 33
              </p>
              <p className="footerFlex3">
                <BsTelephonePlusFill size={20} />
                012 555 33 65 - 050 400 33 55 - 055 633 28 88
              </p>
              <p className="footerFlex3">
                <BsFillEnvelopePlusFill size={20} />
                Təklif almaq üçün: info@bakudoors.com
              </p>
            </div>
          </div>
          <div className="col-12 col-md-3 mb-5">
            <h5>Bizi İzləyin</h5>
            <p className="footerFlex5">
              <input type="text " placeholder="E-mail adresinizi yazın" />
              <FaEnvelopeSquare className="envelope " size={30} />
            </p>

            <div className="footerFSize mt-3">
              Sosial Şəbəkələrdə Bizi izləyin
            </div>

            <div className="footerFlex4 mt-2">
              <p>
                <BsFacebook size={20} />
              </p>
              <p>
                <BsTwitter size={20} />
              </p>
              <p>
                <LiaGoogle size={20} />
              </p>
              <p>
                <BsSkype size={20} />{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <div className="mapOpen mt-5 position-relative">
          <div className="col-12 d-flex align-items-stretch ">
            <div className="info-wrap bg-primary w-100 p-1 ">
              <iframe
                className="widthfooter heightfooter"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.1125012008683!2d49.86879517655814!3d40.38419915761769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d196fb6b87d%3A0x53388a94f74aaa37!2s33%20Suleyman%20Vazirov%2C%20Baku%201005!5e0!3m2!1str!2saz!4v1690811448016!5m2!1str!2saz"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: "0" }}
                aria-hidden="false"
                tabIndex="0"
              />
            </div>
          </div>
          <div className="absolute" onClick={() => setOpen(!open)}>
            <FaTimes size={50} />
          </div>
        </div>
      )}
    </>
  );
}

export default Footer2;
