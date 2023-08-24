import { Outlet, Link, useLocation } from "react-router-dom";
import Logo from "/logo.png";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import {BsFillEnvelopeCheckFill, BsPhone} from 'react-icons/bs'




function Navbar2() {
  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("selectedLanguage", newLanguage);
  };
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [selectedLanguage, setSelectedLanguage] = useState("aze");
 

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage");
    if (savedLanguage) {
      setSelectedLanguage(savedLanguage);
      i18n.changeLanguage(savedLanguage);
    }
  }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-light shadow  navbar-sticky">
        <div className="container-fluid ">
          <Link to="/" className="navbar-brand" href="#">
            <img src={Logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse mend"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mt-3  widthNavbar">
              <li className="nav-item ">
                <Link
                  to="/"
                  className={
                    location.pathname === "/"
                      ? "nav-link  fSize activeNavbar"
                      : "nav-link  fSize hover"
                  }
                  aria-current="page"
                >
                  {t("home")}
                </Link>
              </li>

               <li className="nav-item dropdown">
                <Link
                  to="/"
                  className="nav-link dropdown-toggle hover"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {t("products")}
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <ul>
                    <li>
                      <Link
                        to="autoseksiyonalqapi"
                        className={
                          location.pathname === "/autoseksiyonalqapi"
                            ? "dropdown-item activeNavbar"
                            : "dropdown-item hoverimportant"
                        }
                      >
                        {t("a")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="autojaluzqapi"
                        className={
                          location.pathname === "/autojaluzqapi"
                            ? "dropdown-item activeNavbar"
                            : "dropdown-item hoverimportant"
                        }
                      >
                        {t("b")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="yuklemerampasi"
                        className={
                          location.pathname === "/yuklemerampasi"
                            ? "dropdown-item activeNavbar"
                            : "dropdown-item hoverimportant"
                        }
                      >
                        {t("j")}
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link
                        to="autodarvaza"
                        className={
                          location.pathname === "/autodarvaza"
                            ? "dropdown-item activeNavbar"
                            : "dropdown-item hoverimportant"
                        }
                      >
                        {t("d")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="pergoletent"
                        className={
                          location.pathname === "/pergoletent"
                            ? "dropdown-item activeNavbar"
                            : "dropdown-item hoverimportant"
                        }
                      >
                        {t("e")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="autosuse"
                        className={
                          location.pathname === "/autosuse"
                            ? "dropdown-item activeNavbar"
                            : "dropdown-item hoverimportant"
                        }
                      >
                        {t("f")}
                      </Link>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <Link
                        to="autobaryer"
                        className={
                          location.pathname === "/autobaryer"
                            ? "dropdown-item activeNavbar"
                            : "dropdown-item hoverimportant"
                        }
                      >
                        {t("g")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="saunabesetka"
                        className={
                          location.pathname === "/saunabesetka"
                            ? "dropdown-item activeNavbar"
                            : "dropdown-item hoverimportant"
                        }
                      >
                        {t("h")}
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="autofotoseldonerqapi"
                        className={
                          location.pathname === "/autofotoseldonerqapi"
                            ? "dropdown-item activeNavbar"
                            : "dropdown-item hoverimportant"
                        }
                      >
                        {t("i")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </li> 
   


              <li className="nav-item">
                <Link
                  to="about"
                  className={
                    location.pathname === "/about"
                      ? "nav-link  fSize activeNavbar"
                      : "nav-link  fSize hover"
                  }
                  aria-current="page"
                >
                  {t("about")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contact"
                  className={
                    location.pathname === "/contact"
                      ? "nav-link  fSize activeNavbar"
                      : "nav-link  fSize hover"
                  }
                  aria-current="page"
                >
                  {t("contact")}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="questions"
                  className={
                    location.pathname === "/questions"
                      ? "nav-link  fSize activeNavbar"
                      : "nav-link  fSize hover"
                  }
                  aria-current="page"
                >
                  {t("questions")}{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="ourworks"
                  className={
                    location.pathname === "/ourworks"
                      ? "nav-link  fSize activeNavbar"
                      : "nav-link  fSize hover"
                  }
                  aria-current="page"
                >
                  {t("human")}{" "}
                </Link>
              </li>
            </ul>
            <div className="search-and-icons d-block d-md-none d-xxl-block">
              <form
                className="d-flex mb-2 me-4 d-md-none d-lg-block"
                role="search"
              >
                <input
                  className="form-control me-2"
                  type="search"
                  aria-label="Search"
                />
              </form>
              <div className="user-icons d-flex mb-2">
                <div className="account">
                  <i className="bi bi-person"></i>
                </div>
                <div className="wishlist">
                  <i className="bi bi-heart"></i>
                </div>
                <div className="cart">
                  <i className="bi bi-cart3"></i>
                </div>
              </div>
            </div>
            <div className="contact-info ">
              <p className="flexNavbar"><BsFillEnvelopeCheckFill size={15}/>Təklif almaq üçün:</p>
            <p>
                <a className="flexNavbar" href="mailto:"> info@bakudoors.com</a>
              </p>
              <p className="flexNavbar"><BsPhone size={15}/>012 555 33 65 | 055 633 28 88 </p>
            
              <p>
                <select
                  value={selectedLanguage}
                  onChange={handleLanguageChange}
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                >
                  <option>Select Language</option>
                  <option value="tr">Aze</option>
                  <option value="en">Eng</option>
                </select>
              </p>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Navbar2;
