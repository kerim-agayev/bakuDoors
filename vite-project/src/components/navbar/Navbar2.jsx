import { Outlet, Link, useLocation } from "react-router-dom";
import Logo from '../../assets/logo.png'
function Navbar2() {
    const location = useLocation();
    // className={location.pathname === '/' ? 'active-link' : ''}>
    return (
        <div>

            <nav class="navbar navbar-expand-md bg-light shadow  navbar-sticky">
                <div class="container-fluid ">
                    <Link to='/' class="navbar-brand" href="#">
                        <img src={Logo} alt="" />
                    </Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse mend" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 mt-3  widthNavbar">
                            <li class="nav-item">
                         
                            <Link to='/' className={location.pathname==='/' ? 'nav-link  fSize activeNavbar': 'nav-link  fSize hover'} aria-current="page" >Ana Sehife</Link>
                            </li>
                          
                            <li class="nav-item dropdown">
                            <Link to='/' className="nav-link dropdown-toggle hover" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Mehsullar
                </Link>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <ul>

                                       
                                        <li><Link to='autoseksiyonalqapi' className={location.pathname==='/autoseksiyonalqapi'? 'dropdown-item activeNavbar': 'dropdown-item hoverimportant'} >Avtomatik Seksiyonal Qapilar</Link></li>
                                        <li><Link to='autojaluzqapi' className={location.pathname==='/autojaluzqapi'? 'dropdown-item activeNavbar': 'dropdown-item hoverimportant'} >Avtomatik Jaluz Qapilar</Link></li>
                                        <li><Link to='servisqurasdirma' className={location.pathname==='/servisqurasdirma'? 'dropdown-item activeNavbar': 'dropdown-item hoverimportant'} >Servis & Qurasdirma</Link></li>


                                    </ul>
                                    <ul>
                                    <li><Link to='autodarvaza' className={location.pathname==='/autodarvaza'? 'dropdown-item activeNavbar': 'dropdown-item hoverimportant'} >Avtomatik Darvazalar</Link></li>
                                    <li><Link to='pergoletent' className={location.pathname==='/pergoletent'? 'dropdown-item activeNavbar': 'dropdown-item hoverimportant'} >Pergole ve Tent Sistemleri</Link></li>
                                    <li><Link to='autosuse' className={location.pathname==='/autosuse'? 'dropdown-item activeNavbar': 'dropdown-item hoverimportant'} >Avtomatik Suse Sistemleri</Link></li>




                                     
                                    </ul>
                                    <ul>
                                    <li><Link to='autobaryer' className={location.pathname==='/autobaryer'? 'dropdown-item activeNavbar': 'dropdown-item hoverimportant'} >Avtomatik Baryer Sistemleri</Link></li> 
                                     <li><Link to='saunabesetka' className={location.pathname==='/saunabesetka'? 'dropdown-item activeNavbar': 'dropdown-item hoverimportant'} >Sauna & Besetka</Link></li> 
                                      <li><Link to='autofotoseldonerqapi' className={location.pathname==='/autofotoseldonerqapi'? 'dropdown-item activeNavbar': 'dropdown-item hoverimportant'} >Avtomatik Fotosel ve Doner Qapilar</Link></li>


                                        
                                    </ul>
                                </div>
                            </li>
                            <li class="nav-item">
                            <Link to='about' className={location.pathname==='/about' ? 'nav-link  fSize activeNavbar': 'nav-link  fSize hover'} aria-current="page" >Haqqimizda</Link>
                            </li>
                            <li class="nav-item">
                            <Link to='contact' className={location.pathname==='/contact' ? 'nav-link  fSize activeNavbar': 'nav-link  fSize hover'} aria-current="page" >Elaqe</Link>
                            </li>
                            <li class="nav-item">
                            <Link to='questions' className={location.pathname==='/questions' ? 'nav-link  fSize activeNavbar': 'nav-link  fSize hover'} aria-current="page" >Cox Verilen Suallar</Link>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fSize hover">Another Link</a>
                            </li>
                        </ul>
                        <div class="search-and-icons">
                            <form class="d-flex mb-2 me-4 d-md-none d-lg-block" role="search">
                                <input class="form-control me-2" type="search" aria-label="Search" />
                            </form>
                            <div class="user-icons d-flex mb-2">
                                <div class="account"><i class="bi bi-person"></i></div>
                                <div class="wishlist"><i class="bi bi-heart"></i></div>
                                <div class="cart"><i class="bi bi-cart3"></i></div>
                            </div>
                        </div>
                        <div class="contact-info">
                            <p>+9876543210 | +1234567890</p>
                            <p><a href="mailto:">contact@domainname.com</a></p>
                        </div>
                    </div>
                </div>
            </nav>

            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default Navbar2