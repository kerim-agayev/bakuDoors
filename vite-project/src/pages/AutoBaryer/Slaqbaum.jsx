import React from 'react'
import Slaqbaumlar2 from '../../../public/slaqbaumlar2.jpg'
function Slaqbaum() {
  return (
    <div className='container mt-5' >
      <div className='row'>


        {/* <div className='col-4'></div> */}







        <div className='col-8'>
          <div class="card" style={{ width: '18rem' }}>
            <img src={Slaqbaumlar2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h6 class="card-text">Slaqbaum Tikintisi </h6>
            </div>
          </div>
          <div>
            <p>  Yeni əl işimizdən.</p>
              <p>--- işimiz keyfiyyətimizdir</p>
              <p>Əlaqə: 050 400 3355 - 055 633 2888 - 070 633 2888</p>
              <p>info@bakudoors.com - www.bakudoors.com</p>
          </div>
        </div>



      </div>



    </div>
  )
}

export default Slaqbaum