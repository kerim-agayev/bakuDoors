import  { useEffect, useRef } from 'react'
import BakudoorSeksional from '/autoQarajQapilari/autoQarajQapi9.jpg'
import BakudoorSeksional2 from '/autoQarajQapilari/autoQarajQapi2.jpg'
import BakudoorSeksional3 from '/autoQarajQapilari/autoQarajQapi3.jpg'
import BakudoorSeksional4 from '/seksiyonaldiff.png'
import BakudoorSeksional5 from '/seksiyonaldiff2.png'
import BakudoorSeksional6 from '/seksiyonaldiff3.png'
import BakudoorSeksional7 from '/montaj.gif'
import BakudoorSeksional8 from '/montaj2.gif'
import BakudoorSeksional9 from '/montaj3.gif'
import BakudoorSeksional10 from '/montaj4.gif'
import Data from "../../datas/Data.json";
import ProductTitle from '../mainPages/about/ProductTitle';
import { motion, useInView, useAnimation } from 'framer-motion'
import { useTranslation } from 'react-i18next';
import LazyImage from '../../components/LazyImage'
function AutoQaraj2() {
    const {t} = useTranslation()
    const ref = useRef(null)
    const ref2 = useRef(null)
    const ref3 = useRef(null)
    const ref4 = useRef(null)
    const ref5 = useRef(null)
    const ref6 = useRef(null)
    const isinview = useInView(ref)
    const isinview2 = useInView(ref2)
    const isinview3 = useInView(ref3)
    const isinview4 = useInView(ref4)
    const isinview5 = useInView(ref5)
    const isinview6 = useInView(ref6)
    const maincontrols = useAnimation()
    const maincontrols2 = useAnimation()
    const maincontrols3 = useAnimation()
    const maincontrols4 = useAnimation()
    const maincontrols5 = useAnimation()
    const maincontrols6 = useAnimation()
    useEffect(() => {
  
      if (isinview) {
        maincontrols.start('visible')
  
      }
      if (isinview2) {
        maincontrols2.start('visible')
      }
      if (isinview3) {
        maincontrols3.start('visible')
      }
      if (isinview4) {
        maincontrols4.start('visible')
      }
      if (isinview5) {
        maincontrols5.start('visible')
      }
      if (isinview6) {
        maincontrols6.start('visible')
      }
    }, [isinview, isinview2, isinview3,isinview4, isinview5,isinview6])
  
  
    const container = {
      visible: {
        transition: {
          //delayChildren: 0.3,
          staggerChildren: 0.2
        }
      }
  
    }
    const item = {
  
      visible: {
        opacity: 1,
        translateY: 0
      },
      hidden: {
        opacity: 0,
        translateY: 20
      }
  
  
    }
    const { autoqarajqapi} = Data

   
  return (
    <>
<div className="container">
<div className="row mt-5 vheight">

<h4 className="productHead">{t("garage")}</h4>
<div className="col-12 col-md-8 mt-5">
  <div className="borderslaq  d-none d-md-block">
    <img
      src={BakudoorSeksional}
      className=" head shadow objCover rounded"
      alt="..."
    />
  </div>
  <div className="d-md-none">
    <img
      src={BakudoorSeksional}
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
        <p> {t('autoqaraj3')}</p>
      </div>
    </div>
  </div>
</div>
<div className="col-12 col-md-4  d-md-none shadow rounded mt-5">
  <div className=" ps-3">
    <div className="mt-2 mt-md-5">
      <div className="headText">
        {" "}
        <p> {t('autoqaraj3')}</p>
      </div>
    </div>
  </div>
</div>
</div>
<motion.div className="row mt-5"
ref={ref}
variants={{
  hidden: { opacity: 0, translateX: -300 },
  visible: { opacity: 1, translateX: 0 }

}}
initial='hidden'
animate={maincontrols}
transition={{ duration: 1 }}


>
    <h4 className='productHead mt-5 mb-5 text-center'><span className='border-md-bottom p-2 border-md-danger'>
    {t("seqapi")}
      </span></h4>
<div className="col-12 col-md-6 bg-danger rounded p-2">
    <div className="row  text-white rounded">
        <div className="col-6">
<p>{t("seqapi2")}</p>
<p>{t("seqapi3")}</p>
<p> {t("seqapi4")}</p>
<p> {t("seqapi5")}</p>
<p> {t("seqapi6")}</p>
<p> {t("seqapi7")}</p>
        </div>
        <div className=" col-6">
            <p>{t("seqapi8")}</p>
            <p>	{t("seqapi9")}</p>
            <p>	{t("seqapi10")}</p>
            <p>{t("seqapi11")}</p>
            <p>{t("seqapi12")}</p>
            <p>	</p>
        </div>
    </div>
</div>
<div className="col-12 col-md-6">
<div className="mt-5 mt-md-1" >
  <img src={BakudoorSeksional2} className="head shadow objCover rounded" alt="..."/>
 
</div>
</div>
</motion.div>
<motion.div className="row mt-5"
ref={ref4}
variants={{
  hidden: { opacity: 0, translateX: 300 },
  visible: { opacity: 1, translateX: 0 }

}}
initial='hidden'
animate={maincontrols4}
transition={{ duration: 1 }}

>
<div className="col-12 col-md-6 bg-info rounded ">
    <h3 className='text-white'>{t("seqapi13")}</h3>
    <p>{t("seqapi14")}</p>
    <h3 className='text-white'>{t("seqapi15")}</h3>
    <p>{t("seqapi16")}r</p>
</div>
<div className="col-12 col-md-6">
<div className="mt-5 mt-md-1" >
  <img src={BakudoorSeksional3} className="head shadow objCover rounded" alt="..."/>
 
</div>
</div>
</motion.div> 
<motion.div className="row mt-5"
ref={ref5}
variants={{
  hidden: { opacity: 0, translateY: 300 },
  visible: { opacity: 1, translateY: 0 }

}}
initial='hidden'
animate={maincontrols5}
transition={{ duration: 1 }}

>
    <h1 className='productHead mb-5 text-center'>
      <span className='border-md-bottom border-md-3 border-md-danger p-2'>  {t("seqapi17")}</span>
  </h1>
    <div className="col-12 col-md-4">
    <div className="card shadow mt-2" >
  <img src={BakudoorSeksional4} className="head objCover rounded" alt="..."/>
 
</div>
    </div>
    <div className="col-12 col-md-4">
    <div className="card shadow mt-2" >
  <img src={BakudoorSeksional5} className="head objCover rounded" alt="..."/>
 
</div>
    </div>
    <div className="col-12 col-md-4">
    <div className="card shadow mt-2" >
  <img src={BakudoorSeksional6} className="head objCover rounded " alt="..."/>
 
</div>
    </div>
</motion.div>

<motion.div className="row mt-5"
ref={ref6}
variants={{
  hidden: { opacity: 0, translateX: -300 },
  visible: { opacity: 1, translateX: 0 }

}}
initial='hidden'
animate={maincontrols6}
transition={{ duration: 1 }}

>
    <h1 className='mb-5 text-center'>
      <span className=' border-md-bottom border-md--danger border-md-3 p-2'>
      {t("seqapi18")}
      </span>
   
      </h1>
    <p className='border-md-bottom p-2 border-3 border-info'>{t("seqapi19")}</p>
<div className="col-12 col-md-3">
<div className="card mb-3" >
  <img src={BakudoorSeksional7} className="card-img-top rounded" alt="..."/>
  <div className="card-body">
    <p className="card-text">{t("seqapi20")}</p>
  </div>
</div>
</div>
<div className="col-12 col-md-3">
<div className="card mb-3" >
  <img src={BakudoorSeksional8} className="card-img-top rounded" alt="..."/>
  <div className="card-body">
    <p className="card-text">{t("seqapi21")}</p>
  </div>
</div>
</div>
<div className="col-12 col-md-3">
<div className="card mb-3" >
  <img src={BakudoorSeksional9} className="card-img-top rounded" alt="..."/>
  <div className="card-body">
    <p className="card-text">{t("seqapi22")}</p>
  </div>
</div>
</div>
<div className="col-12 col-md-3">
<div className="card mb-3" >
  <img src={BakudoorSeksional10} className="card-img-top rounded" alt="..."/>
  <div className="card-body">
    <p className="card-text">{t("seqapi23")}</p>
  </div>
</div>
</div>
</motion.div>
</div>





<div ref={ref2} className="container">
        <div className="row">
          <motion.div
            variants={{
              hidden: { opacity: 0, translateX: -300 },
              visible: { opacity: 1, translateX: 0 }

            }}
            initial='hidden'
            animate={maincontrols2}
            transition={{ duration: 1 }}
            className='all-ourworks mt-5 m-auto'

          >

            <ProductTitle title={t('works2')} />
          </motion.div>


        </div>
      </div>







      <motion.div ref={ref3} className="container mt-5"
        initial='hidden'
        animate={maincontrols3}
        variants={container}


      >
        <div className="row m-auto mb-5">


          {
            autoqarajqapi.map((auto) => (
              <motion.div ref={ref3} key={auto.id} className="col-4  shadow mb-3 rounded "
                variants={item}

              >
                <div  className="card  p-md-2 " >
                  <LazyImage src={auto.imgUrl}  id={auto.id}/>
                </div>

              </motion.div>
            ))


          }



        </div>
        <hr />
      </motion.div>
    </>
  )
}

export default AutoQaraj2