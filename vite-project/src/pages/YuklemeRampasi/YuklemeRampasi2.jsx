
import YuklemeRampasiPhoto from '/yuklemerampasi.jpg'
import YuklemeRampasiPhoto2 from '/ramp1.jpg'
import YuklemeRampasiPhoto4 from '/ramp3.jpg'
import YuklemeRampasiPhoto5 from '/ramp4.jpg'
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { useTranslation } from "react-i18next";

function YuklemeRampasi2() {
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
        <h4 className='productHead' >{t('j')}</h4>
        <div className="col-12 col-lg-8 mt-5">
            <div className="borderslaq  d-none d-lg-block">
              <img
                src={YuklemeRampasiPhoto}
                className="head shadow objCover rounded"
                alt="..."
              />
            </div>
            <div className="  d-lg-none">
              <img
                src={YuklemeRampasiPhoto}
                className="head shadow  objfill rounded"
                alt="..."
              />
            </div>
          </div>
          <div className="col-12 col-lg-4 d-none d-lg-block">
            <div className=" ps-3">
              <p className="mt-5 headText">{t("ramp")}</p>
            </div>
          </div>
          <div className="col-12 col-lg-4  d-md-none shadow mt-5 rounded ">
            <div className=" ps-3">
              <p className="mt-2 headText">{t("ramp")}</p>
            </div>
          </div>
      

        
    </div>

    <motion.div className="row mt-5"
  
    >
        <h3 className='text-white text-center rounded bg-danger p-3 mb-3'>{t('ramp2')}</h3>
<motion.div className="col-12 col-lg-6 mb-2"
  ref={ref}
  variants={{
    hidden: { opacity: 0, translateX: -300 },
    visible: { opacity: 1, translateX: 0 }

  }}
  initial='hidden'
  animate={maincontrols}
  transition={{ duration: 1 }}



>
<div className=" shadow" >
  <img src={YuklemeRampasiPhoto2} className=" head  rounded objCover" alt="..."/>
 
</div>
<div className='rounded p-2 bg-info mt-2'>
<h6 className='text-white'>{t('ramp3')}</h6>
<p>{t('ramp4')}</p>
</div>
</motion.div>

<motion.div className="col-12 col-lg-6"
ref={ref4}
variants={{
  hidden: { opacity: 0, translateX: 300 },
  visible: { opacity: 1, translateX: 0 }

}}
initial='hidden'
animate={maincontrols4}
transition={{ duration: 1 }}

>
<div className=" shadow" >
  <img src={YuklemeRampasiPhoto4} className="head rounded objCover " alt="..."/>
 
</div>
<div className='rounded p-2 bg-info mt-2'>
<h6 className='text-white'>{t('ramp5')}</h6>
<p>{t('ramp6')}</p>
</div>
</motion.div>
    </motion.div>
    <motion.div className="row mt-5 mb-5"
    ref={ref2}
    variants={{
      hidden: { opacity: 0, translateX: 300 },
      visible: { opacity: 1, translateX: 0 }

    }}
    initial='hidden'
    animate={maincontrols2}
    transition={{ duration: 1 }}
    >
        <div className="col-12">
          <div className='bg-danger rounded mb-2 p-2 '>
          <h3 className=' text-white fs-5 '>{t('ramp7')}</h3>
          </div>
            <div className=" shadow" >
  <img src={YuklemeRampasiPhoto5} className="head rounded objCover " alt="..."/>
 
</div>
        </div>
    </motion.div>

    <motion.div className="row mt-5 bg-danger text-white p-2 rounded d-none mb-5"
    ref={ref3}
    variants={{
      hidden: { opacity: 0, translateY: 300 },
      visible: { opacity: 1, translateY: 0 }

    }}
    initial='hidden'
    animate={maincontrols3}
    transition={{ duration: 1 }}
    
    >
        <div className="col-4">
<h5>{t('ramp8')}</h5>
        </div>
        <div className="col-4">
            <p>Sual 1: Lorem ipsum dolor sit amet, consectetur ?</p>
            <p>Sual 2: Lorem ipsum dolor sit amet, consectetur ?</p>
            <p>Sual 3: Lorem ipsum dolor sit amet, consectetur ?</p>
          
            </div>
            <div className="col-4">
            <p>Cavab 1:consectetur adipiscing elit, sed do</p>
<p>Cavab 2:consectetur adipiscing elit, sed do</p>
<p>Cavab 3:consectetur adipiscing elit, sed do</p>

            </div>
    </motion.div>
    <hr />
</div>

    </>
  )
}

export default YuklemeRampasi2