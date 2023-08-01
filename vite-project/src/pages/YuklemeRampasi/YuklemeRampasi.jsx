import YuklemeRampasiPhoto from '../../assets/yuklemerampasi.jpg'
import { motion } from 'framer-motion'


function YuklemeRampasi() {
  return (
    <>

<div className='container mt-5 ' >
        <div className='row'>

          <div className='col-12 '>
            <motion.div className="card shadow m-auto-all" style={{ width: '18rem' }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <img src={YuklemeRampasiPhoto} className="card-img-top" alt="..." />
              <div className="card-body">
                <h6 className="card-text"> Yükləmə Rampası</h6>
              </div>
            </motion.div>



            <motion.div className="card mt-5 shadow-lg  all-card m-auto-all"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="card-body">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum laboriosam sunt illo, autem incidunt necessitatibus doloremque. Tenetur odio magni voluptatibus excepturi voluptatem eligendi, illo exercitationem, veniam nostrum, rerum aperiam aut? </p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, quos. </p>
              </div>
            </motion.div>
          </div>



        </div>



      </div>





    </>
  )
}

export default YuklemeRampasi