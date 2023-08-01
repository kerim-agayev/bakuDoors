
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductTitle from "../about/ProductTitle";
import {motion} from 'framer-motion'
import { useTranslation } from 'react-i18next';
function OurWorks() {
  const {t} = useTranslation()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");
  const [vezife, setVezife] = useState("");
  const [phone, setPhone] = useState("");
  const [file, setFile] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cvmd4ho",
        "template_yowunnk",
        form.current,
        "tR41beRv2dXbwDcBy"
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
            setVezife("");
            setPhone("");
            setTo("");
            setMessage("");
            setFile("");
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
              <ProductTitle title={t('human')} />
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
                                name="from_name"
                                id="name"
                                placeholder="Name/ Surname"
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
                          <div className="col-md-6">
                            <div className="form-group  my-2">
                              {/* vezife */}
                              <input
                                type="text"
                                value={vezife}
                                onChange={(e) => setName(e.target.value)}
                                className="form-control"
                                name="vezife"
                                id="vezife"
                                placeholder="Profession"
                              />
                              {/* vezife */}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group my-2">
                              {/* phone */}
                              <input
                                type="text"
                                value={phone}
                                onChange={(e) => setEmail(e.target.value)}
                                className="form-control"
                                name="phone"
                                id="phone"
                                placeholder="Phone"
                              />
                              {/* phone */}
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
                                placeholder="To"
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
                                placeholder="Message"
                              ></textarea>
                              {/* message */}
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group my-2">
                              {/* text */}
                              <input
                                type="file"
                                value={file}
                                onChange={(e) => setTo(e.target.files[0])}
                                className="form-control"
                                name="file"
                                id="file"
                              
                              />
                              {/* text */}
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
                    <div className="info-wrap bg-primary w-100 p-1 ">
                    <iframe
                    className="width height"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.1125012008683!2d49.86879517655814!3d40.38419915761769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d196fb6b87d%3A0x53388a94f74aaa37!2s33%20Suleyman%20Vazirov%2C%20Baku%201005!5e0!3m2!1str!2saz!4v1690811448016!5m2!1str!2saz"
              allowfullscreen=""
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade"
              style={{border:'0' }}
              aria-hidden="false"
              tabIndex="0"
            />
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
  )
}

export default OurWorks