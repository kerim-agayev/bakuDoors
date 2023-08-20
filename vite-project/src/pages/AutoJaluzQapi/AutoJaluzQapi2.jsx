import { useEffect, useRef } from "react";
import JaluzSistemleri from "/jaluzsistemleri.jpg";
import JaluzSistemleri6 from "/autoJaluzQapilar/autoJaluzQapi13.jpg";
import JaluzSistemleri7 from "/autoJaluzQapilar/autoJaluzQapi14.jpg";
import Data from "../../datas/Data.json";
import { motion, useInView, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
import LazyImage from "../../components/LazyImage";
function AutoJaluzQapi2() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);


  const isinview = useInView(ref);
  const isinview2 = useInView(ref2);
  const isinview3 = useInView(ref3);
  const isinview4 = useInView(ref4);
  const isinview5 = useInView(ref5);


  const maincontrols = useAnimation();
  const maincontrols2 = useAnimation();
  const maincontrols3 = useAnimation();
  const maincontrols4 = useAnimation();
  const maincontrols5 = useAnimation();


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
    if (isinview5) {
      maincontrols5.start("visible");
    }
  }, [isinview, isinview2, isinview3, isinview4, isinview5]);

  const container = {
    visible: {
      transition: {
        //delayChildren: 0.3,
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
  const { autojaluzqapidetay } = Data;
  return (
    <>
      <div className="container">
        <div className="row mt-5 vheight">
          <h4 className="productHead">{t("b")}</h4>
          <div className="col-12 col-md-8 mt-5">
            <div className="borderslaq  d-none d-md-block">
              <img
                src={JaluzSistemleri}
                className=" head shadow objCover rounded"
                alt="..."
              />
            </div>
            <div className="d-md-none">
              <img
                src={JaluzSistemleri}
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
                  <p>{t("jaluz1")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4  d-md-none shadow rounded mt-5">
            <div className=" ps-3">
              <div className="mt-2 mt-md-5">
                <div className="headText">
                  {" "}
                  <p>{t("jaluz1")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <motion.div className="row mt-5 d-none d-lg-block"
        ref={ref2}
        variants={{
          hidden: { opacity: 0, translateX: -300 },
          visible: { opacity: 1, translateX: 0 }

        }}
        initial='hidden'
        animate={maincontrols2}
        transition={{ duration: 1 }}
        
        
        >
          <div className="col-12 shadow rounded p-3 bg-info">
            <p>{t("jaluz2")}</p>
            <p>{t("jaluz3")}</p>
          </div>
        </motion.div>
        <motion.div className="row mt-5"
        ref={ref3}
        variants={{
          hidden: { opacity: 0, translateX: 300 },
          visible: { opacity: 1, translateX: 0 }

        }}
        initial='hidden'
        animate={maincontrols3}
        transition={{ duration: 1 }}
        
        
        >
          <div className="col-12 col-md-6 bg-danger rounded p-3 mb-3 md-lg-0">
            <div className="">
            <h4 className="text-white ">{t("jaluz6")}</h4>
            <p>{t("jaluz4")} </p>
            <p className="d-none d-lg-block">{t("jaluz20")} </p>
            </div>
          
          </div>
          <div className="col-12 col-md-6">
            <div className="card shadow">
              <img
                src={JaluzSistemleri7}
                className="objCover head rounded"
                alt="..."
              />
            </div>
          </div>
        </motion.div>
        <motion.div className="row mt-5"
        ref={ref4}
        variants={{
          hidden: { opacity: 0, translateX: -300 },
          visible: { opacity: 1, translateX: 0 }

        }}
        initial='hidden'
        animate={maincontrols4}
        transition={{ duration: 1 }}
        
        
        >
          <div className="col-12 col-md-6 mb-3 mb-lg-0">
            <div className="card shadow">
              <img
                src={JaluzSistemleri6}
                className="objCover head rounded"
                alt="..."
              />
            </div>
          </div>
          <div className="col-12 col-md-6 p-3 bg-danger rounded">
            <div className=" mt-3 mt-md-0">
            <h4 className="mt-3 text-white">{t("jaluz7")}</h4>
            <p>{t("jaluz8")}</p>
            <p className="d-none d-lg-block">{t("jaluz21")}</p>
            </div>
         
          </div>
        </motion.div>

      
      </div>

<div className="container">
<motion.div
        ref={ref}
        className="container mt-5 mb-5"
        initial="hidden"
        animate={maincontrols}
        variants={container}
      >
        <div className="row m-auto">
          {autojaluzqapidetay.map((auto) => (
            <motion.div
              ref={ref}
              key={auto.id}
              className="col-4   shadow mb-3 rounded"
              variants={item}
            >
              <div className="card  p-md-2 ">
             


            <LazyImage src={auto.imgUrl}  id={auto.id}/>
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

export default AutoJaluzQapi2;
