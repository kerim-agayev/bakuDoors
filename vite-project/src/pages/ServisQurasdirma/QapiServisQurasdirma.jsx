import  { useEffect, useRef } from 'react'
import FotoselServis from '/fotoselservis.jpg'
import QarajServis from '/qarajservis.jpg'
import SenayeServis from '/senayeservis.jpg'
import DarvazaServis from '/darvazaservis.jpg'
import { motion, useInView, useAnimation } from 'framer-motion'
import { useTranslation } from 'react-i18next';

function QapiServisQurasdirma() {
  const {t} = useTranslation()



  const ref = useRef(null)
 
  const isinview = useInView(ref)

  const maincontrols = useAnimation()


  useEffect(() => {

    if (isinview) {
      maincontrols.start('visible')

    }
  
  }, [isinview])

  return (
    <>




      <div className='container mt-5 ' >
        <div className='row'>
          <div className='col-12'>
            <motion.div className="card shadow m-auto-all" style={{ width: '18rem' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}


            >
              <img src={QarajServis} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="card-text">{t('doorservice')} </h6>
              </div>
            </motion.div>




            <motion.div className="card shadow-lg mt-5 m-auto-all all-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}


            >
              <div className="card-body ">

                <div className="card" >
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item">{t('doorservice1')}</li>
                    <li className="list-group-item">{t('doorservice2')}</li>
                    <li className="list-group-item">{t('doorservice3')}</li>
                    <li className="list-group-item">{t('doorservice4')}</li>
                  </ul>
                </div>







              </div>
            </motion.div>


          </div>



        </div>
      </div>
      <motion.div ref={ref} className="container mt-5"
         variants={{
          hidden: { opacity: 0, translateX: -300 },
          visible: { opacity: 1, translateX: 0 }

        }}
        initial='hidden'
        animate={maincontrols}
        transition={{ duration: 1 }}
      
      
      
      >
        <div className="row">




          <div className="col-4 ">
            <div className="card " >
              <img src={FotoselServis} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title responsiveTextServis  responsiveheight">{t('doorservice5')}</h5>

              </div>
            

            </div>
          </div>
          <div className="col-4 ">
            <div className="card " >
              <img src={SenayeServis} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title responsiveTextServis  responsiveheight">{t('doorservice6')}</h5>
             
              </div>
             

            </div>
          </div>
          <div className="col-4  ">
            <div className="card " >
              <img src={DarvazaServis} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title responsiveTextServis responsiveheight">{t('doorservice7')}</h5>
             
              </div>
          

            </div>
          </div>
        </div>
      </motion.div>

    </>


  )
}

export default QapiServisQurasdirma