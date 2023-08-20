import Hermetic from '/hermetic.jpg'
import Hermetic2 from '/hermetic2.png'
import Hermetic3 from '/hermetic3.jpg'
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useTranslation } from 'react-i18next';


function HermetikXestexanaQapi2() {

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
  }, [isinview, isinview2,isinview3, isinview4]);
  return (
    <>
    <div className="container">
    <div className="row mt-5 vheight">

<h4 className="productHead">{t("hermetic")}</h4>
<div className="col-12 col-md-8 mt-5">
  <div className="borderslaq  d-none d-md-block">
    <img
      src={Hermetic}
      className=" head shadow objCover rounded"
      alt="..."
    />
  </div>
  <div className="d-md-none">
    <img
      src={Hermetic}
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
        <p> {t("hermeticmain")}</p>
      </div>
    </div>
  </div>
</div>
<div className="col-12 col-md-4  d-md-none shadow rounded mt-5">
  <div className=" ps-3">
    <div className="mt-2 mt-md-5">
      <div className="headText">
        {" "}
        <p> {t("hermeticmain")}</p>
      </div>
    </div>
  </div>
</div>
</div>
   
 <div className="row mt-5">
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
      <div className="" >
  <img src={Hermetic2} className="head shadow objCover rounded" alt="..."/>
 
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
<p className='bg-danger text-white p-2 rounded mt-2 mt-lg-0 p-4 fs-5'>{t("hermeticmain2")}</p>
      </motion.div>
    </div>

    <div className="row mt-5 mb-5" >
    <motion.div className="col-12 col-lg-6 mb-5"
    ref={ref3}
    variants={{
      hidden: { opacity: 0, translateX: -300 },
      visible: { opacity: 1, translateX: 0 }

    }}
    initial='hidden'
    animate={maincontrols3}
    transition={{ duration: 1 }}
    >
<p className='bg-danger text-white p-2 rounded mb-5 p-4 fs-5'>{t("hermeticmain3")}</p>
      </motion.div>
      <motion.div className="col-12 col-lg-6 mb-5"
      ref={ref4}
      variants={{
        hidden: { opacity: 0, translateX: 300 },
        visible: { opacity: 1, translateX: 0 }

      }}
      initial='hidden'
      animate={maincontrols4}
      transition={{ duration: 1 }}
      >
      <div className="" >
  <img src={Hermetic3} className="head shadow objCover rounded" alt="..."/>
 
</div>
      </motion.div>
    </div>
  
  <hr />
    </div>
    
    
        </>
  )
}

export default HermetikXestexanaQapi2