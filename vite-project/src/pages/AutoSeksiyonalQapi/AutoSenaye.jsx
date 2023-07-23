import React from 'react'
import SenayeQapilariUst from '../../../public/senayeqapilariust.gif'
import SenayeQapilariAlt1 from '../../../public/senayeqapilarialt1.jpg'
import SenayeQapilariAlt2 from '../../../public/senayeqapilarialt2.jpg'
import BakuDoorSseksional from '../../../public/bakudoorsseksional.jpg'
function AutoSenaye() {
  return (
    <div className='container mt-5' >
      <div className='row'>


        {/* <div className='col-4'></div> */}







        <div className='col-12'>
          <div class="card" style={{ width: '18rem' }}>
            <img src={BakuDoorSseksional} class="card-img-top" alt="..." />
            <div class="card-body">
              <h6 class="card-text">Avtomatik Senaye Qapilari</h6>
            </div>
          </div>
          <div>
            <p>
              Avtomatik qapıların  özəlliklərindən biri də istənilən şəraitə və mühitə uyğun quraşdırıla bilməsidir. Buna misal olaraq normal, vertikal və yarımvertikal avtomatik qapılardır.</p>
          </div>
        </div>
        <div className="col-12 mb-5">
          <div class="card" style={{ width: '50rem' }}>
            <img src={SenayeQapilariUst} class="card-img-top" alt="..." />
            <div class="card-body">
              <h6 class="card-text">Vertikal və yarımvertikal qapılar əsasən sənaye tipli obyektlərdə quraşdırılır. Sənaye qapıların quraşdırılma yerindən asılı olaraq müxtəlif cür quraşdırmaq olar. Ümumiyyətlə sənaye tipli avtomatik qapıların motorları 3 Faza olmalıdır ki, qapının hərəkətinə çətinlik yaratmasın. Sənaye avtomatik qapılar soyuğa və şaxtaya davamlıdır. Quraşdırılan sənaye obyektinin izolasiyasını təmin edir.</h6>
            </div>
          </div>

        </div>


        <div className="col-12 mb-5">
          <div class="card" style={{ width: '50rem' }}>
            <img src={SenayeQapilariAlt1} class="card-img-top" alt="..." />
            <div class="card-body">
              <h6 class="card-text">Yarımvertikal avtomatik qapılar – adından göründüyü kimi bu tip avtomatik qapılar istənilən məsafədən sonra dönərək tavanın altına yığıla bilər.  </h6>
            </div>
          </div>

        </div>

        <div className="col-12 mb-5">
          <div class="card" style={{ width: '50rem' }}>
            <img src={SenayeQapilariAlt2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h6 class="card-text"> Vertikal avtomatik qapılar – tavana qədər açıla bilən qapılardır. Bu tip avtomatik qapılar əlavə yer tutmur və quraşdırılan yerdə avtomatik giriş-çixişi tənzimləyir.</h6>
            </div>
          </div>

        </div>

      </div>



    </div>
  )
}

export default AutoSenaye