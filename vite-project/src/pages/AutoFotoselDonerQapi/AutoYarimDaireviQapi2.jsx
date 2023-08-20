import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";
import YarimDairevi from "/yarimdairevi.png";
import YarimDairevi2 from "/circularphoto.webp";
import YarimDairevi3 from "/circularphoto2.jpg";


function AutoYarimDaireviQapi2() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const ref2 = useRef(null);
  
  const isinview = useInView(ref);
  const isinview2 = useInView(ref2);
 
  const maincontrols = useAnimation();
  const maincontrols2 = useAnimation();

  useEffect(() => {
    if (isinview) {
      maincontrols.start("visible");
    }
    if (isinview2) {
      maincontrols2.start("visible");
    }
  
  }, [isinview, isinview2]);
  return (
    <>
      <div className="container">
        <div className="row mt-5 vheight">
          <h4 className="productHead">{t("circular")}</h4>
          <div className="col-12 col-md-8 mt-5">
            <div className="borderslaq  d-none d-md-block">
              <img
                src={YarimDairevi}
                className=" head shadow objCover rounded"
                alt="..."
              />
            </div>
            <div className="d-md-none">
              <img
                src={YarimDairevi}
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
                  <p>{t("circularmain")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4  d-md-none shadow rounded mt-5">
            <div className=" ps-3">
              <div className="mt-2 mt-md-5">
                <div className="headText">
                  {" "}
                  <p>{t("circularmain")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5 mb-3">
          <motion.div className="col-12 col-lg-6 mb-5"
          ref={ref}
          variants={{
            hidden: { opacity: 0, translateX: -300 },
            visible: { opacity: 1, translateX: 0 }
  
          }}
          initial='hidden'
          animate={maincontrols}
          transition={{ duration: 1 }}
          >
            <div className="">
              <img
                src={YarimDairevi2}
                className=" responsiveImgAll shadow objCover rounded"
                alt="..."
              />
            </div>
            <div className="bg-primary p-3 rounded mt-2 mb-5 text-white">

{t("circularmain2")}


            </div>
          </motion.div>
          <motion.div className="col-12 col-lg-6"
          ref={ref2}
          variants={{
            hidden: { opacity: 0, translateX: 300 },
            visible: { opacity: 1, translateX: 0 }
  
          }}
          initial='hidden'
          animate={maincontrols2}
          transition={{ duration: 1 }}
          >
            <div className="">
              <img
                src={YarimDairevi3}
                className=" responsiveImgAll shadow objCover rounded"
                alt="..."
              />
            </div>

            <div className="bg-primary p-3 rounded mt-2 mb-5 text-white">

{t("circularmain3")}

            </div>
          </motion.div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default AutoYarimDaireviQapi2;
