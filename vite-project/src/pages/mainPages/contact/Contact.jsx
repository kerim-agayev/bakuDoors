
import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { GiPositionMarker } from "react-icons/gi";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductTitle from "../about/ProductTitle";
import {motion} from 'framer-motion'
import { useTranslation } from 'react-i18next';
function Contact() {
  const {t} = useTranslation()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_a9u3hef",
        "template_vz2z024",
        form.current,
        "TMYxep9R-8Me4L93Z"
      )
      .then(
        (result) => {
          setTimeout(() => {
            toast.success("Your message was sent, succesfully!", {
              position: "top-center",
              autoClose: 2000, // 2 saniye bagla
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              progress: undefined,
            });
            setName("");
            setEmail("");
            setTo("");
            setMessage("");
          }, 2000);
        
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
    <motion.div className="motion"
    

   
    
    >
    <section className="ftco-section my-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-5">
              <ProductTitle title={t('contact')} />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              <div className="wrapper">
                <div className="row no-gutters">
                  <motion.div className="col-md-7 d-flex align-items-stretch"
                      initial={{opacity:0 , scale:0.5, translateX:-200}}
                      animate={{opacity:1, scale:1, translateX:0}}
                      transition={{delay:0.2,duration:1}}
                  
                  >
                    <div className="contact-wrap w-100 p-md-5 p-4">
                      <h3 className="mb-4 fontFamily fUpperCase">Baku Doors</h3>
                      <div id="form-message-warning" className="mb-4"></div>
                      <div id="form-message-success" className="mb-4"></div>
                      <form
                        ref={form}
                        onSubmit={sendEmail}
                        method="POST"
                        id="contactForm"
                        name="contactForm"
                      >
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group  my-2">
                              {/* name */}
                              <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="form-control"
                                name="user_name"
                                id="name"
                                placeholder={t('name')}
                              />
                              {/* name */}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group my-2">
                              {/* email */}
                              <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control"
                                name="user_email"
                                id="email"
                                placeholder="Email"
                              />
                              {/* email */}
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group my-2">
                              {/* text */}
                              <input
                                type="text"
                                value={to}
                                onChange={(e) => setTo(e.target.value)}
                                className="form-control"
                                name="to_name"
                                id="subject"
                                placeholder={t('to')}
                              />
                              {/* text */}
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group my-2">
                              {/* message */}
                              <textarea
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="form-control"
                                id="message"
                                cols="30"
                                rows="7"
                                placeholder={t('message')}
                              ></textarea>
                              {/* message */}
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group my-2">
                              <input
                                type="submit"
                                value={t('smessage')}
                                className="btn btn-primary"
                              />
                              <div className="submitting"></div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </motion.div>
                  <motion.div className="col-md-5 d-flex align-items-stretch "
                    initial={{opacity:0 , scale:0.5, translateX:200}}
                    animate={{opacity:1, scale:1, translateX:0}}
                      transition={{delay:0.2,duration:1}}
                  
                  
                  >
                    <div className="info-wrap bg-primary w-100 p-lg-5 p-4 ">
                      <h3 className="mb-4 mt-md-4 fontFamily">
                        {" "}
                       {t('cinfo')}
                      </h3>
                      <div className="dbox w-100 d-flex align-items-start">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-map-marker"></span>
                        </div>
                        <div className="text pl-3">
                          <p className="d-flex gap-3">
                            <span>
                              <GiPositionMarker />
                            </span>
                            <span>{t('address')}&nbsp; Bakı şəhəri, Xətai rayonu Süleyman vəzirov küç. 33</span>{" "}
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-phone"></span>
                        </div>
                        <div className="text pl-3">
                          <p className="d-flex gap-3">
                            <span>
                              {" "}
                              <BsFillTelephonePlusFill />
                            </span>
                            <span>{t('phone')}&nbsp;  050 400 33 55</span>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-paper-plane"></span>
                        </div>
                        <div className="text pl-3">
                          <p className="d-flex gap-3">
                            <span>
                              <AiOutlineMail />
                            </span>
                            <span> Email:&nbsp;info@bakudoors.com</span>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          <span className="fa fa-globe"></span>
                        </div>
                        <div className="text pl-3">
                          <p className="d-flex gap-3">
                            <span>
                              <BiWorld />
                            </span>
                            <span>Website</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>


    </motion.div>
     
    </>
  );
}

export default Contact;