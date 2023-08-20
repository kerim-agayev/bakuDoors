import { useEffect, useRef } from "react";
import Pavillion2 from "/besetka.jpg";
import Pavillion3 from "/besetka2.webp";
import Pavillion4 from "/besetka3.jpg";
import Pavillion5 from "/besetka4.jpg";
import { motion, useInView, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
function Besetka2() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isinview = useInView(ref);
  const isinview2 = useInView(ref2);
  const isinview3 = useInView(ref3);
  const maincontrols = useAnimation();
  const maincontrols2 = useAnimation();
  const maincontrols3 = useAnimation();
  useEffect(() => {
    if (isinview) {
      maincontrols.start("visible");
    }
    if (isinview2) {
      maincontrols2.start("visible");
    }

    if (isinview3) {
      maincontrols3.start("visible");
    }
  }, [isinview, isinview2, isinview3]);
  return (
    <>
      <div className="container">
        <div className="row mt-5 vheight">
          <h4 className="productHead">{t("pavilion")}</h4>
          <div className="col-12 col-md-8 mt-5">
            <div className="borderslaq  d-none d-md-block">
              <img
                src={Pavillion2}
                className=" head shadow objCover rounded"
                alt="..."
              />
            </div>
            <div className="d-md-none">
              <img
                src={Pavillion2}
                className=" head shadow objCover rounded"
                alt="..."
              />
            </div>
          </div>
          <div className="col-12 col-md-4 d-none d-md-block">
            <div className=" ps-3">
              <div className="mt-2 mt-md-5">
                <div className="headText">
                  {" "}
                  <p> {t("besedka1")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4  d-md-none shadow rounded mt-5">
            <div className=" ps-3">
              <div className="mt-2 mt-md-5">
                <div className="headText">
                  {" "}
                  <p> {t("besedka1")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <motion.div
            className="col-12 col-lg-6 mb-5 "
            ref={ref}
            variants={{
              hidden: { opacity: 0, translateX: -300 },
              visible: { opacity: 1, translateX: 0 },
            }}
            initial="hidden"
            animate={maincontrols}
            transition={{ duration: 1 }}
          >
            <div className="bg-info p-3 rounded mb-2">
              <h3 className="text-white">{t("besedkamain1")}</h3>
              <p>{t("besedkamain2")}</p>
            </div>
            <img
              src={Pavillion3}
              className=" responsiveImgAll shadow objCover rounded"
              alt="..."
            />
          </motion.div>
          <motion.div
            className="col-12 col-lg-6 mb-5"
            ref={ref2}
            variants={{
              hidden: { opacity: 0, translateX: 300 },
              visible: { opacity: 1, translateX: 0 },
            }}
            initial="hidden"
            animate={maincontrols2}
            transition={{ duration: 1 }}
          >
            <div className="bg-info p-3 rounded mb-2">
              <h3 className="text-white">{t("besedkamain3")}</h3>
              <p>{t("besedkamain4")}</p>
            </div>
            <img
              src={Pavillion4}
              className="responsiveImgAll shadow objCover rounded"
              alt="..."
            />
          </motion.div>
        </div>
        <motion.div
          className="row mt-5 mb-5"
          ref={ref3}
          variants={{
            hidden: { opacity: 0, translateY: 300 },
            visible: { opacity: 1, translateY: 0 },
          }}
          initial="hidden"
          animate={maincontrols3}
          transition={{ duration: 1 }}
        >
          <div className="col-12 col-md-8 m-auto">
            <h5 className="mb-5 shadow p-2 rounded-3 bg-info">
              {t("besedka2")}
            </h5>
            <img
              src={Pavillion5}
              className=" responsiveImgAll shadow objCover rounded"
              alt="..."
            />
          </div>
        </motion.div>
        <hr />
      </div>
    </>
  );
}

export default Besetka2;
