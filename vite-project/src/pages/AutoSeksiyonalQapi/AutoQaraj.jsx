import React, { useEffect, useRef } from 'react'
import BakudoorSeksional from '/bakudoorsseksional.jpg'
import MotorSistemi1 from '/motorsistemi1.jpg'
import MotorSistemi2 from '/motorsistemi2.jpg'
import MexanikiHisseler from '/mexanikihisseler.jpg'
import SendvicPanel from '/sendvicpanel.jpg'
import Data from "../../datas/Data.json";
import ProductTitle from '../mainPages/about/ProductTitle';
import { motion, useInView, useAnimation,useIsPresent } from 'framer-motion'



function AutoQaraj() {
  const ref = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const isinview = useInView(ref)
  const isinview2 = useInView(ref2)
  const isinview3 = useInView(ref3)
const maincontrols = useAnimation()
const maincontrols2 = useAnimation()
const maincontrols3 = useAnimation()

useEffect(()=>{

console.log(isinview);
if(isinview ){
maincontrols.start('visible')

}
if (isinview2) {
  maincontrols2.start('visible')
}
if (isinview3) {
  maincontrols3.start('visible')
}
},[isinview, isinview2, isinview3])


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
  const { autoqarajqapi } = Data

  return (
    <>

      <div className='container mt-5' >
        <div className='row'>
          <div className='col-8'>
            <motion.div className="card shadow" style={{ width: '18rem' }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            
            >
              <img src={BakudoorSeksional} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="card-text">Avtomatik Qaraj Qapilari</h6>
              </div>
            </motion.div>


            <motion.div class="card shadow-lg mt-5 mb-5"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            
            >
              <div class="card-body">
                <p> 20-ci əsrin son dörddə biri  texnologiyanın inkişafı baxımından dünya tarixində görünməmiş bir sürətə  səhnə olmuşdur.. Hətta bundan 10 il əvvəlki texnologiya ilə günümüzdəki texnologiya arasındakı fərq  xəyal edilə bilməyəcək ölçülərə çatmışdır.</p>
                <p> Texnologiya sahəsindəki yeniliklər insanların həyatlarında çox böyük bir rahatlıq və asanlıq təmin  edəcək. İnsanlar evlərində, işlərində, məktəblərində bu inkişaflar sayəsində çox böyük asanlıqlar  yaşayacaq, rahat, əyləncəli və zövqlü mühitlərə qovuşacaqlar. Robotlar bir çox işdə insan gücünün yerini  alacaq. İnsanlar yerlərindən qalxmadan robotlar sayəsində, avtomatik əməliyyatlarla icra edə biləcəklər.</p>
                <p> Texnolgiyanın belə sürətlə inkişafı təbii ki qapılardan da yan keçməmişdir. Artıq insanlar sadəcə  düyməyə sıxmaqla istənilən qapını aça və ya bağlaya bilər. Avtomatik qapılar müasir dövrün dəbdə olan  sitemləridir.  Yağışlı, qarlı hava şəraitində və yaxud evə yorğun qayıdarkən avtomabilinizdən düşərək qapını açmağa ehtiyac yoxdur. </p>
              </div>
            </motion.div>

            <div>

              <div>
              <div className="container">
                  <div className="row">
                    <motion.div
                      initial={{ opacity: 0, translateX: -300 }}
                      animate={{ opacity: 1, translateX: 0 }}
                      transition={{ duration: 1 }}
                    >

                      <ProductTitle title=' Avtomatik qapılar 3 əsas hissədən ibarətdir:' />
                    </motion.div>


                  </div>
                </div>
          


                <div  className="row">
                  <motion.div ref={ref}   className="col-6 mb-5"
                variants={
                 { hidden:{ opacity:0, translateX:-100 },
                  visible:{opacity:1, translateX:0 }}
                }
                initial='hidden'
                    animate={maincontrols}
                    transition={{ duration: 3}}
                 
                  >
                    <div className="card" style={{ width: '18rem', height: '31rem' }}>
                      <img src={MotorSistemi1} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h6>Motor sistemi</h6>
                        <p className="card-text">Avropanın brend şirkətlərinin istehsalı olan avtomatik qapı motorları ( 2 il zəmanət verilir) 1200N gücə malikdir,elektron idarəetmə paneli avtomatik qapı motorunun idarəedilməsini tənzimləyir.

                          Avtomatik qapıların motorları uzaqdan idarə oluna bilən motorlardır. Bunun üçün pultun üzərində  olan düyməni sixmaq lazımdır.</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div  ref={ref}className="col-6 mb-5"
                    variants={
                      { hidden:{ opacity:0, translateX:-100 },
                       visible:{opacity:1, translateX:0 }}
                     }
                     initial='hidden'
                    animate={maincontrols}
                    transition={{ duration: 3}}
                  
                
                  >
                    <div className="card" style={{ width: '18rem', height: '31rem' }}>
                      <img src={MotorSistemi2} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h6>Motor sistemi</h6>
                        <p className="card-text">Avtomatik qapıların mortorları təhlükəsizlik sisteminin təmin etmək üçün quraşdırılan radarlarla birbaşa əlaqədə fəaliyyət göstərir. İstənilən maneə radarların qarşısını kəsdikdə motor avtomatik olaraq qapının hərəkətini saxlayır.</p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div ref={ref} className="col-6 mb-5"
                   variants={
                    { hidden:{ opacity:0, translateX:-100 },
                     visible:{opacity:1, translateX:0 }}
                   }
                   initial='hidden'
                    animate={maincontrols}
                    transition={{ duration: 3 }}
                  
                  
                  >
                  <div className="card" style={{ width: '18rem' , height: '31rem' }}>
                    <img src={SendvicPanel} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h6>Sendvic panel</h6>
                      <p className="card-text">Avtomatik qapılar əsasən sendvic paneldən hazırlanır. Sendvic panel hər iki üzü paslanmaz qalvaniz metal , içi isə sıxılmış penaplastdır.

                        Sendvic panellər isti və soyuğa davamlıdır. Poluetran izolasiyalı sendvic panel 45 mm qalınlığındadır.</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div ref={ref} className="col-6 mb-5 "
                  variants={
                    { hidden:{ opacity:0, translateX:-100 },
                     visible:{opacity:1, translateX:0 }}
                   }
                   initial='hidden'
                  animate={maincontrols}
                  transition={{ duration: 3 }}
                
                
                
                >
                  <div className="card" style={{ width: '18rem' , height: '31rem' }}>
                    <img src={MexanikiHisseler} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h6>Mexanik hissələr</h6>
                      <p className="card-text">Avtomatik qapıların mexanik hissələri paslanmaz qalvaniz metaldan hazırlanmışdır. Mexanik hissələr müxtəlif parçalardan ibarətdir.  Yay, petlə , təkər , profildən  ibarət hissələr əsasən paslanmır. Buda avtomatik qapıların səssiz və maneəsiz işləməsinə şərait yaradır.</p>
                    </div>
                  </div>
                </motion.div>
                </div>


   
              </div>

            </div>
          </div>



        </div>



      </div>









      <div ref={ref2} className="container">
        <div className="row">
          <motion.div
          variants={{
            hidden:{opacity: 0, translateX: -300},
            visible:{opacity: 1, translateX: 0 }
          }}
            initial='hidden'
            animate={maincontrols2}
            transition={{ duration: 1 }}
          >

            <ProductTitle title=' ŞİRKƏTİMİZİN GÖRDÜYÜ İŞLƏR' />
          </motion.div>


        </div>
      </div>







      <motion.div ref={ref3} className="container mt-5"
        initial='hidden'
        animate={maincontrols3}
        variants={container}


      >
        <div className="row">


          {
            autoqarajqapi.map((auto) => (
              <motion.div ref={ref3} key={auto.id} className="col-3 shadow mb-3 rounded"
                variants={item}

              >
                <div className="card  p-2" style={{ width: '19rem', height: '20rem' }}>
                  <img src={auto.imgUrl} className="card-img-top objectFit" alt="..." />

                </div>

              </motion.div>
            ))


          }



        </div>
      </motion.div>

    </>






  )
}

export default AutoQaraj