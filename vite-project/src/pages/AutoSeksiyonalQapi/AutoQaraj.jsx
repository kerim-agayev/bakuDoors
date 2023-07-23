import React from 'react'
import BakudoorSeksional from '../../../public/bakudoorsseksional.jpg'
import MotorSistemi1 from '../../../public/motorsistemi1.jpg'
import MotorSistemi2 from '../../../public/motorsistemi2.jpg'
import MexanikiHisseler from '../../../public/mexanikihisseler.jpg'
import SendvicPanel from '../../../public/sendvicpanel.jpg'
function AutoQaraj() {
  return (
    <div className='container mt-5' >
      <div className='row'>


        {/* <div className='col-4'></div> */}







        <div className='col-8'>
          <div class="card" style={{ width: '18rem' }}>
            <img src={BakudoorSeksional} class="card-img-top" alt="..." />
            <div class="card-body">
              <h6 class="card-text">Avtomatik Qaraj Qapilari</h6>
            </div>
          </div>
          <div>
            <p> 20-ci əsrin son dörddə biri  texnologiyanın inkişafı baxımından dünya tarixində görünməmiş bir sürətə  səhnə olmuşdur.. Hətta bundan 10 il əvvəlki texnologiya ilə günümüzdəki texnologiya arasındakı fərq  xəyal edilə bilməyəcək ölçülərə çatmışdır.</p>
            <p> Texnologiya sahəsindəki yeniliklər insanların həyatlarında çox böyük bir rahatlıq və asanlıq təmin  edəcək. İnsanlar evlərində, işlərində, məktəblərində bu inkişaflar sayəsində çox böyük asanlıqlar  yaşayacaq, rahat, əyləncəli və zövqlü mühitlərə qovuşacaqlar. Robotlar bir çox işdə insan gücünün yerini  alacaq. İnsanlar yerlərindən qalxmadan robotlar sayəsində, avtomatik əməliyyatlarla icra edə biləcəklər.</p>
            <p> Texnolgiyanın belə sürətlə inkişafı təbii ki qapılardan da yan keçməmişdir. Artıq insanlar sadəcə  düyməyə sıxmaqla istənilən qapını aça və ya bağlaya bilər. Avtomatik qapılar müasir dövrün dəbdə olan  sitemləridir.  Yağışlı, qarlı hava şəraitində və yaxud evə yorğun qayıdarkən avtomabilinizdən düşərək qapını açmağa ehtiyac yoxdur. </p>
            <div>
              <h3>Avtomatik qapılar 3 əsas hissədən ibarətdir:</h3>

         <div className="row">
         <div className="col-6 mb-5">
                <div class="card" style={{ width: '18rem',height:'31rem' }}>
                  <img src={MotorSistemi1} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h6>Motor sistemi</h6>
                    <p class="card-text">Avropanın brend şirkətlərinin istehsalı olan avtomatik qapı motorları ( 2 il zəmanət verilir) 1200N gücə malikdir,elektron idarəetmə paneli avtomatik qapı motorunun idarəedilməsini tənzimləyir.

                      Avtomatik qapıların motorları uzaqdan idarə oluna bilən motorlardır. Bunun üçün pultun üzərində  olan düyməni sixmaq lazımdır.</p>
                  </div>
                </div>
              </div>

              <div className="col-6 mb-5">
                <div class="card" style={{ width: '18rem',height:'31rem' }}>
                  <img src={MotorSistemi2} class="card-img-top" alt="..." />
                  <div class="card-body">
                  <h6>Motor sistemi</h6>
                    <p class="card-text">Avtomatik qapıların mortorları təhlükəsizlik sisteminin təmin etmək üçün quraşdırılan radarlarla birbaşa əlaqədə fəaliyyət göstərir. İstənilən maneə radarların qarşısını kəsdikdə motor avtomatik olaraq qapının hərəkətini saxlayır.</p>
                  </div>
                </div>
              </div>
         </div>



              <div className="col-8 mb-5">
                <div class="card" style={{ width: '18rem' }}>
                  <img src={SendvicPanel} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h6>Sendvic panel</h6>
                    <p class="card-text">Avtomatik qapılar əsasən sendvic paneldən hazırlanır. Sendvic panel hər iki üzü paslanmaz qalvaniz metal , içi isə sıxılmış penaplastdır.

                      Sendvic panellər isti və soyuğa davamlıdır. Poluetran izolasiyalı sendvic panel 45 mm qalınlığındadır.</p>
                  </div>
                </div>
              </div>
              <div className="col-8 mb-5 ">
                <div class="card" style={{ width: '18rem' }}>
                  <img src={MexanikiHisseler} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h6>Mexanik hissələr</h6>
                    <p class="card-text">Avtomatik qapıların mexanik hissələri paslanmaz qalvaniz metaldan hazırlanmışdır. Mexanik hissələr müxtəlif parçalardan ibarətdir.  Yay, petlə , təkər , profildən  ibarət hissələr əsasən paslanmır. Buda avtomatik qapıların səssiz və maneəsiz işləməsinə şərait yaradır.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>



      </div>



    </div>
  )
}

export default AutoQaraj