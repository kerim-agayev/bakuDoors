import React from 'react'
import Pergole from '../../../public/pergole.jpg'
function PergoleTent() {
  return (
    <div className='container mt-5' >
      <div className='row'>


      {/* <div className='col-4'></div> */}







        <div className='col-8'>
          <div class="card" style={{width: '18rem'}}>
            <img src={Pergole} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h6 class="card-text">PERGOLE VƏ TENT SİSTEMLƏRİ</h6>
              </div>
          </div>
          <div>
        
           <p>Pergola Sistemlərimiz  müxtəlif seriyaları ilə xarici məkanların genişləndirilməsinə imkan yaradır və il boyu istifadə edə biləcəyiniz relsli tent sistemidir. İncə quruluş və müasir dizayna sahib açılıb-bağlanan tavan sistemi günəş şüasından, yağışdan və qardan qoruyur.</p>
          </div>
        </div>



      </div>



    </div>
  )
}

export default PergoleTent