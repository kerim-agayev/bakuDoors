import {  Outlet, Link } from "react-router-dom";



function Navbar() {


  return (
    <>
      {/* <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#516BEB' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to='/'>Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/' className="nav-link " aria-current="page" >Ana Sehife</Link>
              </li>
              <li className="nav-item">
                <Link to='about' className="nav-link" >Haqqimizda</Link>
              </li>
              <li className="nav-item dropdown">
                <Link to='/' className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Mehsullar
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <ul>

                    <li><Link to='autoseksiyonalqapi' className="dropdown-item" >Avtomatik Seksiyonal Qapilar</Link></li>
                    <li><Link to='autojaluzqapi' className="dropdown-item" >Avtomatik Jaluz Qapilar</Link></li>
                    <li><Link to='servisqurasdirma' className="dropdown-item" >Servis & Qurasdirma</Link></li>


                  </ul>
                  <ul>

                    <li>
                      <Link to='autodarvaza' className="dropdown-item" >Avtomatik Darvazalar</Link>

                    </li>
                    <li><Link to='pergoletent' className="dropdown-item" >Pergole ve Tent Sistemleri</Link></li>
                    <li><Link to='autosuse' className="dropdown-item" >Avtomatik Suse Sistemleri</Link></li>
                  </ul>
                  <ul>

                    <li><Link to='autobaryer' className="dropdown-item" >Avtomatik Baryer Sistemleri</Link></li>
                    <li><Link to='saunabesetka' className="dropdown-item" >Sauna & Besetka</Link></li>
                    <li><Link to='autofotoseldonerqapi' className="dropdown-item" >Avtomatik Fotosel ve Doner Qapilar</Link></li>


                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <Link to='contact' className="nav-link ">Elaqe</Link>

              </li>
              <li className="nav-item">
                <Link to='questions' className="nav-link ">Cox Verilen Suallar</Link>

              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav> */}



      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Navbar;
