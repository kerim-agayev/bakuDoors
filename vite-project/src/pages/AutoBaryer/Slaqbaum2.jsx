import Slaqbaumlar2 from "/slaqbaumlar2.jpg";
import Slaqbaumlar1 from "/barrier1.jpg";
import Slaqbaumlar3 from "/barrier2.jpg";
import Slaqbaumlar4 from "/barrier3.jpg";
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";

function Slaqbaum2() {
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
        <div className="row mt-5">
          <h4 className="productHead">{t("barrier")}</h4>
          <div className="col-12 col-lg-8 mt-5">
            <div className="borderslaq  d-none d-lg-block">
              <img
                src={Slaqbaumlar2}
                className="head shadow objCover rounded"
                alt="..."
              />
            </div>
            <div className="  d-lg-none">
              <img
                src={Slaqbaumlar2}
                className="head shadow  objCover rounded"
                alt="..."
              />
            </div>
          </div>
          <div className="col-12 col-lg-4 d-none d-lg-block">
            <div className=" ps-3">
              <p className="mt-5 headText">{t("slaqbaum2")}</p>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <div className="card shadow  text-danger p-2">
              <div className="card-body">{t("slaqbaum23")}</div>
            </div>
          </div>
        </div>
        <hr className="mt-5 mb-5" />

        <motion.div
          ref={ref}
          className="row mt-5 "
          variants={{
            hidden: { opacity: 0, translateX: -300 },
            visible: { opacity: 1, translateX: 0 }

          }}
          initial='hidden'
          animate={maincontrols}
          transition={{ duration: 1 }}
        >
          <div className="col-12 col-lg-6 ">
            <p className="fontSizeSlaq bg-danger rounded p-3 shadow ">
              {t("slaqbaum24")}
            </p>
          </div>

          <div className="d-none col-lg-2"></div>
          <div className="col-12 col-lg-4 ms-auto ">
            <div className="card bg-primary p2 shadow-lg">
              <div className="card-body ">
                <h3> {t("slaqbaum25")}</h3>
                <p className=""> {t("slaqbaum26")}</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={ref2}
          className="row mt-5"
          style={{ overflowX: "hidden" }}
          variants={{
            hidden: { opacity: 0, translateX: 300 },
            visible: { opacity: 1, translateX: 0 },
          }}
          initial="hidden"
          animate={maincontrols2}
          transition={{ duration: 1 }}
        >
          <div className="col-12 col-xl-6">
            <div className="mb-2">
              <h3 className=" text-center text-md-start mb-3 border-bottom border-3 p-2">
                {t("slaqbaum27")}
              </h3>
            </div>

            <div className=" mb-3">
              <img
                src={Slaqbaumlar1}
                className="card-img-top responsiveImgAll objectFit rounded"
                alt="..."
              />
            </div>
          </div>
          <div className="col-12 col-xl-6">
            <div className="mb-2">
              <h3 className=" text-center text-md-start mb-3 border-bottom border-3 p-2">
                {t("slaqbaum28")}
              </h3>
            </div>

            <div className=" ">
              <img
                src={Slaqbaumlar3}
                className="card-img-top responsiveImgAll objectFit rounded"
                alt="..."
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          ref={ref3}
          className="row mt-5 mb-5"
          variants={{
            hidden: { opacity: 0, translateY: 300 },
            visible: { opacity: 1, translateY: 0 },
          }}
          initial="hidden"
          animate={maincontrols3}
          transition={{ duration: 1 }}
        >
          <div className="col-12">
            <h3 className=" mb-3  text-center text-md-start border-bottom border-3 p-2">
              {t("slaqbaum29")}
            </h3>
            <p className="text-center shadow p-2 mb-5 rounded p-3 bg-info text-white">
              {t("slaqbaum30")}
            </p>
            <div className="">
              <img
                src={Slaqbaumlar4}
                className="card-img-top  objCover shadow rounded"
                alt="..."
              />
            </div>
          </div>
        </motion.div>
        <hr />
      </div>
    </>
  );
}

export default Slaqbaum2;
