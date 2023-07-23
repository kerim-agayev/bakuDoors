import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Saunalar from '../../../public/saunalar.jpg'
function Sauna() {
  return (
    <div className='container mt-5' >
      <div className='row'>


      {/* <div className='col-4'></div> */}







        <div className='col-8'>
          <div class="card" style={{width: '18rem'}}>
            <img src={Saunalar} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h6 class="card-text">Sauna Tikintisi (Helo & Harvia)</h6>
              </div>
          </div>
          <div>
            <p>Saunaya vaxtaşırı getmək həyat tonusunu qoruyub saxlamağın çox səmərəli üsuludur. Sauna yorğunluğu götürür, dərinin elastikliyini qoruyur, artıq çəkini atmağa kömək edir, emosional bərpa üçün gözəl vasitə kimi çıxış edir. saunanın yüksək hərarəti maddələr mübadiləsini sürətləndirir, dəriyə müsbət təsir göstərir, xəstəliktörədici bakteriyaları və göbələkləri məhv edir. Saunada tərlədikdə toksin və şlaklar da orqanizmdən xaric olur. </p>
            <p>Saunalar ilk növbədə havasının nəmliyi ilə fərqlənir. Saunada havanın temperaturu 5-15% rütubətlilik də 70-90 0C təşkil edir. </p>
          </div>
        </div>



      </div>



    </div>
  )
}

export default Sauna