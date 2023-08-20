import Saunalar1 from "/sauna23.jpg";
import Saunalar3 from "/sauna24.jpg";
import Saunalar2 from "/sauna.webp";
import { motion, useInView, useAnimation } from "framer-motion";
import ProductTitle from "../mainPages/about/ProductTitle";
import { useEffect, useRef } from "react";
import Data from "../../datas/Data.json";
import { useTranslation } from "react-i18next";
import LazyImage from "../../components/LazyImage";

function Sauna2() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const isinview = useInView(ref);
  const isinview2 = useInView(ref2);
  const isinview3 = useInView(ref3);
  const isinview4 = useInView(ref4);
  const maincontrols = useAnimation();
  const maincontrols2 = useAnimation();
  const maincontrols3 = useAnimation();
  const maincontrols4 = useAnimation();
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
    if (isinview4) {
      maincontrols4.start("visible");
    }
  }, [isinview, isinview2, isinview3, isinview4]);

  const { saunaBesetka } = Data;

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    visible: {
      opacity: 1,
      translateY: 0,
    },
    hidden: {
      opacity: 0,
      translateY: 20,
    },
  };
  return (
    <>
      <div className="container">
        <div className="row mt-5 vheight">
          <h4 className="productHead">{t("saunatik")}</h4>
          <div className="col-12 col-md-8 mt-5">
            <div className="borderslaq  d-none d-md-block">
              <img
                src={Saunalar2}
                className=" head shadow objCover rounded"
                alt="..."
              />
            </div>
            <div className="d-md-none">
              <img
                src={Saunalar2}
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
                  <p> {t("sauna1")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4  d-md-none shadow rounded mt-5 bg-danger text-white">
            <div className=" ps-3">
              <div className="mt-2 mt-md-5">
                <div className="headText">
                  {" "}
                  <p> {t("sauna1")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <motion.div
            className="col-12 col-xl-6 mb-5 mb-lg-0"
            ref={ref3}
            variants={{
              hidden: { opacity: 0, translateX: -300 },
              visible: { opacity: 1, translateX: 0 },
            }}
            initial="hidden"
            animate={maincontrols3}
            transition={{ duration: 1 }}
          >
            <div className="mb-3">
              {" "}
              <h6 className="border-bottom border-3 pb-2"> {t("sauna2")}</h6>
            </div>
            <img
              src={Saunalar1}
              className=" responsiveImgAll shadow objCover"
              alt="..."
            />
          </motion.div>
          <motion.div
            className="col-12 col-xl-6"
            ref={ref4}
            variants={{
              hidden: { opacity: 0, translateX: 300 },
              visible: { opacity: 1, translateX: 0 },
            }}
            initial="hidden"
            animate={maincontrols4}
            transition={{ duration: 1 }}
          >
            <div className="mb-3">
              {" "}
              <h6 className="border-bottom border-3 pb-2"> {t("sauna3")}</h6>
            </div>
            <img
              src={Saunalar3}
              className="responsiveImgAll shadow objCover"
              alt="..."
            />
          </motion.div>
        </div>

        <motion.div
          ref={ref2}
          variants={{
            hidden: { opacity: 0, translateX: -300 },
            visible: { opacity: 1, translateX: 0 },
          }}
          initial="hidden"
          animate={maincontrols2}
          transition={{ duration: 1 }}
          className="all-ourworks mt-5 m-auto"
        >
          <ProductTitle title={t("works2")} />
        </motion.div>

        <motion.div
          ref={ref}
          className="container mt-5 mb-5"
          initial="hidden"
          animate={maincontrols}
          variants={container}
        >
          <div className="row  m-auto">
            {saunaBesetka.map((sauna) => (
              <motion.div
                ref={ref}
                key={sauna.id}
                className="col-4   shadow mb-3 rounded "
                variants={item}
              >
                <div className="card  p-md-2 ">
              
                      <LazyImage src={sauna.imgUrl}  id={sauna.id}/>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <hr />
      </div>
    </>
  );
}

export default Sauna2;
