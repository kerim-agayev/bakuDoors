import React from 'react'
import JaluzSistemleri from '../../../public/jaluzsistemleri.jpg'
import JaluzQapi1 from '../../../public/jaluzqapi1.jpg'
import JaluzQapi2 from '../../../public/jaluzqapi2.jpg'
import JaluzQurgu from '../../../public/jaluzqurgu.jpg'
import JaluzAvadanliq1 from '../../../public/jaluzavadanliq1.jpg'
import JaluzAvadanliq2 from '../../../public/jaluzavadanliq2.jpg'
import JaluzAvadanliq3 from '../../../public/jaluzavadanliq3.jpg'
function AutoJaluz() {
  return (
    <div className='container mt-5' >
      <div className='row'>


        {/* <div className='col-4'></div> */}







        <div className='col-6 mb-5'>
          <div class="card" style={{ width: '18rem' , height:'22rem'}}>
            <img src={JaluzSistemleri} class="card-img-top" alt="..." />
            <div class="card-body">
              <h6 class="card-text">Jaluz Qapılar – Avtomatik jaluz qapılar müasir dövürdə darvaza və qaraj qapılarında quraşdırıla bilər. Avtomatik jaluz qapılar sürətli açılıb bağlanması ilə hərəkəti tənzim edir.</h6>
            </div>
          </div>
          <div>


          </div>
        </div>
        <div className='col-6 mb-5'>

          <div class="card" style={{ width: '18rem' , height:'22rem'}}>
            <img src={JaluzQurgu} class="card-img-top" alt="..." />
            <div class="card-body">
              <h6 class="card-text"> Avtomatik jaluz qapılar motor sistemi və pərdələrdən ibarətdir.  Motor sisteminə  motor, motorun borusu və idarəetmə paneli daxildir.</h6>
            </div>
          </div>
        </div>


        <div className='col-6 mb-5'>
          <div class="card" style={{ width: '18rem' , height:'22rem'}}>
            <img src={JaluzQapi1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h6 class="card-text">Bu sistem xüsusi hazırlanmış soyuğa, yağışa və şaxtaya davamlı alüminium qutunun içərisində quraşdırılır. Alüminium pədələr bükülərək bu qutunun içərisində rulonlanır.</h6>
            </div>
          </div>
          <div>


          </div>
        </div>
        <div className='col-6 mb-5'>

          <div class="card" style={{ width: '18rem' , height:'22rem'}}>
            <img src={JaluzQapi2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h6 class="card-text">  Avtomatik jaluz qapıların pərdələri hər iki üzü alüminium, içərisi isə sıxılmış dolqudur. Bu da avtomatik jaluz qapılar quraşdırılan mühütün havasını tənzimləyir. </h6>
            </div>
          </div>
        </div>


        <div className='col-4 mb-5'>
          <div class="card" style={{ width: '18rem' , height:'22rem'}}>
            <img src={JaluzAvadanliq1} class="card-img-top" alt="..." />
            <div class="card-body">
            
            </div>
          </div>
          <div>


          </div>
        </div>
        <div className='col-4 mb-5'>

          <div class="card" style={{ width: '18rem' , height:'22rem'}}>
            <img src={JaluzAvadanliq2} class="card-img-top" alt="..." />
            <div class="card-body">
             
            </div>
          </div>
        </div>
        <div className='col-4 mb-5'>

          <div class="card" style={{ width: '18rem' , height:'22rem'}}>
            <img src={JaluzAvadanliq3} class="card-img-top" alt="..." />
            <div class="card-body">
             
            </div>
          </div>
        </div>

      </div>



    </div>
  )
}

export default AutoJaluz