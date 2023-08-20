import { useEffect, useRef } from "react";
import Panorama3 from '/panorama/panorama14.jpg'
import Panorama8 from '/panorama/panorama10.jpg'
import PanDoors1 from '/pandoors.png'
import PanDoors2 from '/pandoors2.jpg'
import { motion, useInView, useAnimation } from "framer-motion";
import { useTranslation } from 'react-i18next';

function PanoramaSistem2() {
    const {t} = useTranslation()
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
    }, [isinview, isinview2,isinview3]);
  return (
    <>
<div className="container">

<div className="row mt-5 vheight">

<h4 className="productHead">{t("pansystem")}</h4>
<div className="col-12 col-md-8 mt-5">
  <div className="borderslaq  d-none d-md-block">
    <img
      src={Panorama3}
      className=" head shadow objCover rounded"
      alt="..."
    />
  </div>
  <div className="d-md-none">
    <img
      src={Panorama3}
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
        <p>{t('panorama1')}</p>
           
      </div>
    </div>
  </div>
</div>
<div className="col-12 col-md-4  d-md-none shadow rounded mt-5">
  <div className=" ps-3">
    <div className="mt-2 mt-md-5">
      <div className="headText">
        {" "}
        <p>{t('panorama1')}</p>
      </div>
    </div>
  </div>
</div>
</div>


<div className="row mt-5">
    <motion.div className="col-12 col-lg-6"
    ref={ref}
    variants={{
      hidden: { opacity: 0, translateX: -300 },
      visible: { opacity: 1, translateX: 0 }

    }}
    initial='hidden'
    animate={maincontrols}
    transition={{ duration: 1 }}
    >
    <div className="card mt-5" >
  <img src={Panorama8} className="card-img-top objCover responsiveImgAll rounded" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{t('pan6')}</h5>
    <div className="card-text">      <p>{t('panorama2')}</p></div>
    
  </div>
</div>
    </motion.div>
   
    <motion.div className="col-12 col-lg-6 "
    ref={ref2}
    variants={{
      hidden: { opacity: 0, translateX: 300 },
      visible: { opacity: 1, translateX: 0 }

    }}
    initial='hidden'
    animate={maincontrols2}
    transition={{ duration: 1 }}
    >
    <div className="card mt-5" >
  <img src={Panorama3} className="card-img-top objCover responsiveImgAll rounded" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{t('pan7')}</h5>
    <div className="card-text">      <p>{t('panorama3')}</p>
  
    </div>
    
  </div>
</div>
    </motion.div>
</div>


<motion.div className="row mt-5 mb-5"
ref={ref3}
variants={{
  hidden: { opacity: 0, translateY: 300 },
  visible: { opacity: 1, translateY: 0 }

}}
initial='hidden'
animate={maincontrols3}
transition={{ duration: 1 }}

>


    <h3 className='productHead mb-5 border-bottom border-4 p-2'>{t("pandoors")} </h3>
    <div className="col-12 col-md-6">
    <div className="card shadow mb-5" >
  <img src={PanDoors1} className=" head objCover rounded" alt="..."/>
 
</div>
    </div>
    <div className="col-12 col-md-6">
    <div className="card shadow" >
  <img src={PanDoors2} className=" head objCover rounded " alt="..."/>
 
</div>
    </div>
</motion.div>
<hr />
</div>
    </>
  )
}

export default PanoramaSistem2