import Pergole2 from "/pergoleTent/pergoleTent2.jpg";
import Pergole3 from "/pergoleTent/pergoleTent3.jpg";
import Pergole4 from "/pergoleTent/pergoleTent4.jpg";
import Pergole5 from "/pergoleTent/pergoleTent5.jpg";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
function PergoleTent2() {
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

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <h4 className="productHead">{t("e")}</h4>
          <div className="col-12 col-lg-8 mt-5">
            <div className="borderslaq  d-none d-lg-block">
              <img
                src={Pergole2}
                className="head shadow objCover rounded"
                alt="..."
              />
            </div>
            <div className="  d-lg-none">
              <img
                src={Pergole2}
                className="head shadow  objCover rounded"
                alt="..."
              />
            </div>
          </div>
          <div className="col-12 col-lg-4 d-none d-lg-block">
            <div className=" ps-3  mt-2 mt-lg-5">
              <p className=" headText">{t("pergolemain")}</p>
            </div>
          </div>
          <div className="col-12 col-lg-4 rounded shadow mt-5 mb-5 d-lg-none">
            <div className=" ps-3 mt-2 mt-lg-5">
              <p className=" headText">{t("pergolemain")}</p>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <h3 className="">
            <span className="border-bottom border-3 p-2 border-danger">
              {t("works")}
            </span>
          </h3>
          <motion.div
            className="col-12 col-lg-4"
            ref={ref}
            variants={{
              hidden: { opacity: 0, translateX: -300 },
              visible: { opacity: 1, translateX: 0 },
            }}
            initial="hidden"
            animate={maincontrols}
            transition={{ duration: 1 }}
          >
            <div className="mb-5 mt-5">
              <div className="bg-info rounded p-3 mb-2 pergolacard">
                <h4 className="text-white ">{t("pergolacard1")}</h4>
                <p>{t("pergolacard2")}</p>
              </div>
              <img
                src={Pergole2}
                className="shadow head objCover rounded"
                alt="..."
              />
            </div>
          </motion.div>
          <motion.div
            className="col-12 col-lg-4"
            ref={ref2}
            variants={{
              hidden: { opacity: 0, translateX: 300 },
              visible: { opacity: 1, translateX: 0 },
            }}
            initial="hidden"
            animate={maincontrols2}
            transition={{ duration: 1 }}
          >
            <div className="mb-5 mt-5">
              <div className="bg-info rounded p-3 mb-2  pergolacard">
                <h4 className="text-white">{t("pergolacard3")}</h4>
                <p>{t("pergolacard4")}</p>
              </div>
              <img
                src={Pergole3}
                className="shadow head objCover rounded"
                alt="..."
              />
            </div>
          </motion.div>
          <motion.div
            className="col-12 col-lg-4"
            ref={ref3}
            variants={{
              hidden: { opacity: 0, translateX: -300 },
              visible: { opacity: 1, translateX: 0 },
            }}
            initial="hidden"
            animate={maincontrols3}
            transition={{ duration: 1 }}
          >
            <div className="mb-5 mt-5">
              <div className="bg-info rounded p-3 mb-2  pergolacard">
                <h4 className="text-white ">{t("pergolacard5")}</h4>
                <p>{t("pergolacard6")}</p>
              </div>
              <img
                src={Pergole4}
                className="shadow head objCover rounded"
                alt="..."
              />
            </div>
          </motion.div>
        </div>
        <div className="row mt-5 mb-5">
          <motion.div
            className="col-12"
            ref={ref4}
            variants={{
              hidden: { opacity: 0, translateY: 300 },
              visible: { opacity: 1, translateY: 0 },
            }}
            initial="hidden"
            animate={maincontrols4}
            transition={{ duration: 1 }}
          >
            <div className="mb-5 mt-3">
              <img
                src={Pergole5}
                className="shadow responsiveImgAll objCover rounded"
                alt="..."
              />
              <div className="bg-danger rounded p-3 mt-2">
                <h4 className="text-white">{t("pergolamain7")}</h4>
                <p>{t("pergolamain8")}</p>
              </div>
            </div>
          </motion.div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default PergoleTent2;
