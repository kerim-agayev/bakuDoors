import React from 'react'
import CamBalkon from '/cambalkon.jpg'
import { motion } from 'framer-motion'
function PanoramaSistem() {
  return (
    <div className='container mt-md-5' >
      <div className='row'>
        <div className='col-8'>
          <motion.div className="card shadow m-auto-all-panorama" style={{ width: '18rem' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}

          >
            <img src={CamBalkon} className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-text">Panorama Sistemi</h6>
            </div>
          </motion.div>


          <motion.div className="card mt-5 shadow-lg  all-card-panorama m-auto-all-panorama"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}


          >
            <div className="card-body">
              <h3>PANORAMA</h3>
              <p>BakuDOORS, Panorama həlli ilə daha çox istifadə sahəsi təqdim etməsinin yanında, xarici mekanlarınızı daha yaşana bilər hala gətirir. Ənənəvi şüşə balkon sistemləri daxili və xarici məkan arasındakı bütövlüyü pozar, bu bütövlüyü təmin etmək üçün; BakuDOORS, Panorama ilə göz oxşayan və estetik həlləri sizlərə təqdim edir.</p>
              <p>Sistem mühərrikə bağlı dişli, şüşəyə bağlı zənciri dönmə istiqamətində hərəkət etdirməsiylə çalışır. Panorama açar düymə, uzaqdan əmr hətta tablet və ağıllı telefonlarla asanca idarə edilə bilər. </p>
              <p>Panorama şüşə ilə örtülmə sahəsində ev, restoranlarda və digər içtimai yerlər üçün ən ideal məhsuldur. İstənilən yüksəklikdə möhkəmləndirilə bilən şüşələr məkan içərisindəki təmiz hava səviyyəsini nəzarət etmənizə köməkçi olar.</p>
              <p>Panorama sizlərə daha canlı, daha geniş, daha işıqlı və bu səbəbdəndə daha çox həzz ala biləcəyiniz bir daxili məkan təklif edir ..</p>
              <p>Panorama, alüminium şüşə sistemləri sahəsində yeni nəsil bir yanaşma olub, evlərə, içtimai yerlərə və müəssisələrə rahatlıqla tətbiq oluna bilən bir sistemdir.</p>
            </div>
          </motion.div>


        </div>



      </div>



    </div>
  )
}

export default PanoramaSistem