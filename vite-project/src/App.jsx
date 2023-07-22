import { BrowserRouter, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Home from './pages/mainPages/home/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import About from './pages/mainPages/about/About'
import Contact from './pages/mainPages/contact/Contact'
import Questions from './pages/mainPages/questions/Questions'
import AutoSeksiyonalQapi from './pages/AutoSeksiyonalQapi/AutoSeksiyonalQapi'
import AutoQaraj from './pages/AutoSeksiyonalQapi/AutoQaraj'
import AutoSenaye from './pages/AutoSeksiyonalQapi/AutoSenaye'
import OurWorks from './pages/mainPages/ourworks/OurWorks'
import PergoleTent from './pages/PergoleTent/PergoleTent'
import ServisQurasdirma from './pages/ServisQurasdirma/ServisQurasdirma'
import QapiServisQurasdirma from './pages/ServisQurasdirma/QapiServisQurasdirma'
import SlaqbaumServisQurasdirma from './pages/ServisQurasdirma/SlaqbaumServisQurasdirma'
import SaunaBesetka from './pages/SaunaBesetka/SaunaBesetka'
import Besetka from './pages/SaunaBesetka/Besetka'
import Sauna from './pages/SaunaBesetka/Sauna'
import AutoSuse from './pages/AutoSuse/AutoSuse'
import PanoramaSistem from './pages/AutoSuse/PanoramaSistem'
import PanoramaUstunluk from './pages/AutoSuse/PanoramaUstunluk'
import AutoJaluzQapi from './pages/AutoJaluzQapi/AutoJaluzQapi'
import AutoJaluz from './pages/AutoJaluzQapi/AutoJaluz'
import AutoJaluzDarvaza from './pages/AutoJaluzQapi/AutoJaluzDarvaza'
import AutoDoner from './pages/AutoFotoselDonerQapi/AutoDoner'
import AutoFotosel from './pages/AutoFotoselDonerQapi/AutoFotosel'
import AutoFotoselDonerQapi from './pages/AutoFotoselDonerQapi/AutoFotoselDonerQapi'
import AutoYarimDaireviQapi from './pages/AutoFotoselDonerQapi/AutoYarimDaireviQapi'
import HermetikXestexanaQapi from './pages/AutoFotoselDonerQapi/HermetikXestexanaQapi'
import AutoBaryer from './pages/AutoBaryer/AutoBaryer'
import Slaqbaum from './pages/AutoBaryer/Slaqbaum'
import Vesor from './pages/AutoBaryer/Vesor'
import AutoDarvaza from './pages/AutoDarvaza/AutoDarvaza'
import AvtomatikDemirDarvaza from './pages/AutoDarvaza/AvtomatikDemirDarvaza'
import DoxsanDereceDarvaza from './pages/AutoDarvaza/DoxsanDereceDarvaza'
import XAcilanDarvaza from './pages/AutoDarvaza/XAcilanDarvaza'
import YanaSurusenDarvaza from './pages/AutoDarvaza/YanaSurusenDarvaza'
import './App.css'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Navbar />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='questions' element={<Questions />} />
      <Route path='ourworks' element={<OurWorks />} />
      {/* autoseksiyonalqapi */}
      <Route path="autoseksiyonalqapi" element={<AutoSeksiyonalQapi />}  >
        <Route path="autoqaraj" element={<AutoQaraj />} />
        <Route path="autosenaye" element={<AutoSenaye />} />
      </Route>
      {/* PergoleTent*/}
      <Route path="pergoletent" element={<PergoleTent />} />
      {/* servisqurasdirma*/}
      <Route path="servisqurasdirma" element={<ServisQurasdirma />}  >
        <Route path="qapiservisqurasdirma" element={<QapiServisQurasdirma />} />
        <Route path="slaqbaumservisqurasdirma" element={<SlaqbaumServisQurasdirma />} />
      </Route>
      {/* saunabesetka*/}
      <Route path="saunabesetka" element={<SaunaBesetka />}  >
        <Route path="besetka" element={<Besetka />} />
        <Route path="sauna" element={<Sauna />} />
      </Route>
      {/* autosuse*/}
      <Route path="autosuse" element={<AutoSuse />}  >
        <Route path="panoramasistem" element={<PanoramaSistem />} />
        <Route path="panoramaustunluk" element={<PanoramaUstunluk />} />
      </Route>
      {/* autojaluz*/}
      <Route path="autojaluzqapi" element={<AutoJaluzQapi />}  >
        <Route path="autojaluz" element={<AutoJaluz />} />
        <Route path="autojaluzdarvaza" element={<AutoJaluzDarvaza />} />
      </Route>
      {/* autofotoseldonerqapi*/}
      <Route path="autofotoseldonerqapi" element={<AutoFotoselDonerQapi />}  >
        <Route path="autodoner" element={<AutoDoner />} />
        <Route path="autofotosel" element={<AutoFotosel />} />
        <Route path="autoyarimdaireviqapi" element={<AutoYarimDaireviQapi />} />
        <Route path="hermetikxestexanaqapi" element={<HermetikXestexanaQapi />} />
      </Route>
      {/* autobaryer*/}
      <Route path="autobaryer" element={<AutoBaryer/>}  >
        <Route path="vesor" element={<Vesor />} />
        <Route path="slaqbaum" element={<Slaqbaum/>} />
      </Route>
    {/* autodarvaza*/}
    <Route path="autodarvaza" element={<AutoDarvaza />}  >
        <Route path="avtomatikdemirdarvaza" element={<AvtomatikDemirDarvaza />} />
        <Route path="doxsanderecedarvaza" element={<DoxsanDereceDarvaza />} />
        <Route path="xacilandarvaza" element={<XAcilanDarvaza />} />
        <Route path="yanasurusendarvaza" element={<YanaSurusenDarvaza/>} />
      </Route>



    </Route>
  )
)




function App() {

  return (
    <>
      <div className='App'>



        <main>

          <RouterProvider router={router} />
        </main>





        <Footer />

      </div>

    </>
  )
}

export default App