import React from 'react'
import { NavLink } from "react-router-dom"
function Sidebar() {
  return (
    <>
 <div className='col-4'>
          <div class="card" style={{ width: '18rem' }}>
            <div class="card-header">
              MƏHSULLAR
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><NavLink to="autoseksiyonalqapi"> AVTOMATİK SEKSİYONAL QAPILAR  </NavLink>   </li>
              <li class="list-group-item"> <NavLink to="autojaluzqapi">AVTOMATİK JALÜZ QAPILAR</NavLink>   </li>
              <li class="list-group-item"> <NavLink to="autodarvaza"> AVTOMATİK DARVAZALAR</NavLink>    </li>

              <li class="list-group-item"> <NavLink to="autofotoseldonerqapi">AVTOMATİK FOTOSEL QAPILAR</NavLink>    </li>
              {/* <li class="list-group-item"> <NavLink to={} >AVTOMATİK ŞLAQBAUMLAR</NavLink>    </li> */}
              <li class="list-group-item"> <NavLink to="servisqurasdirma" >SERVİS & QURAŞDIRMA</NavLink>    </li>

              {/* <li class="list-group-item"> <NavLink to={} > YÜKLƏMƏ RAMPASI & KÖRÜYÜ</NavLink>  </li> */}
              <li class="list-group-item"> <NavLink to="saunabesetka" >SAUNA İNŞAAT VƏ TƏMİR</NavLink>    </li>
              <li class="list-group-item"> <NavLink to="pergoletent" >PERGOLE & TENT SİSTEMLƏRİ</NavLink>   </li>

              <li class="list-group-item"> <NavLink to="autosuse">ŞÜŞƏ SİSTEMLƏRİ</NavLink>     </li>
            </ul>
          </div>
        </div>
    </>
  )
}

export default Sidebar