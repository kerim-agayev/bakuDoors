import React from 'react'
import JaluzSistemleri from '/jaluzsistemleri.jpg'
import Data from "../../datas/Data.json";
import { motion } from 'framer-motion'
function AutoJaluz() {
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
  const { autojaluzqapidetay } = Data
  
  return (

    <>
    
    <div className='container mt-5' >
      <div className='row'>
      <div className='container mt-5' >
        <div className='row'>

          <div className='col-8'>
            <motion.div className="card shadow" style={{ width: '18rem' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <img src={JaluzSistemleri} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="card-text">AVTOMATİK JALÜZ QAPILAR</h6>
              </div>
            </motion.div>
            <motion.div class="card mt-5 shadow-lg"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div class="card-body">
                <p>Jaluz Qapılar – Avtomatik jaluz qapılar müasir dövürdə darvaza və qaraj qapılarında quraşdırıla bilər. Avtomatik jaluz qapılar sürətli açılıb bağlanması ilə hərəkəti tənzim edir. </p>
                <p> Avtomatik jaluz qapılar motor sistemi və pərdələrdən ibarətdir.  Motor sisteminə  motor, motorun borusu və idarəetmə paneli daxildir.</p>
                <p>Bu sistem xüsusi hazırlanmış soyuğa, yağışa və şaxtaya davamlı alüminium qutunun içərisində quraşdırılır. Alüminium pədələr bükülərək bu qutunun içərisində rulonlanır.</p>
                <p>Avtomatik jaluz qapıların pərdələri hər iki üzü alüminium, içərisi isə sıxılmış dolqudur. Bu da avtomatik jaluz qapılar quraşdırılan mühütün havasını tənzimləyir. </p>
              </div>
            </motion.div>
          </div>



        </div>



      </div>
      

      </div>



    </div>
    <motion.div className="container mt-5"
        initial='hidden'
        animate='visible'
        variants={container}


      >
        <div className="row">


          {
            autojaluzqapidetay.map((auto) => (
              <motion.div key={auto.id} className="col-3 shadow mb-3 rounded"
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

export default AutoJaluz