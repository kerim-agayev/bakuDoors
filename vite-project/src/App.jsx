

import { BrowserRouter } from 'react-router-dom'

import './App.css'
import ScroolToTop from './components/ScroolToTop'
import WhatsappIcon from './components/WhatsappIcon'
import SmoothSliderButton from './components/SmoothSliderButton'
import Footer from './components/footer/Footer'
import AnimatedRoutesMain from './AnimatedRoutesMain'
import Footer2 from './components/footer/Footer2'



// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Navbar />}  >
//       <Route index element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path='contact' element={<Contact />} />
//       <Route path='questions' element={<Questions />} />
//       <Route path='ourworks' element={<OurWorks />} />
//       {/* autoseksiyonalqapi */}
//       <Route path="autoseksiyonalqapi" element={<AutoSeksiyonalQapi />}  >
//         <Route path="autoqaraj" element={<AutoQaraj />} />
//         <Route path="autosenaye" element={<AutoSenaye />} />
//       </Route>
//       {/* PergoleTent*/}
//       <Route path="pergoletent" element={<PergoleTent />} />
//       {/* servisqurasdirma*/}
//       <Route path="servisqurasdirma" element={<ServisQurasdirma />}  >
//         <Route path="qapiservisqurasdirma" element={<QapiServisQurasdirma />} />
//         <Route path="slaqbaumservisqurasdirma" element={<SlaqbaumServisQurasdirma />} />
//       </Route>
//       {/* saunabesetka*/}
//       <Route path="saunabesetka" element={<SaunaBesetka />}  >
//         <Route path="besetka" element={<Besetka />} />
//         <Route path="sauna" element={<Sauna />} />
//       </Route>
//       {/* autosuse*/}
//       <Route path="autosuse" element={<AutoSuse />}  >
//         <Route path="panoramasistem" element={<PanoramaSistem />} />
//         <Route path="panoramaustunluk" element={<PanoramaUstunluk />} />
//       </Route>
//       {/* autojaluz*/}
//       <Route path="autojaluzqapi" element={<AutoJaluzQapi />}  >
//         <Route path="autojaluz" element={<AutoJaluz />} />
//         <Route path="autojaluzdarvaza" element={<AutoJaluzDarvaza />} />
//       </Route>
//       {/* autofotoseldonerqapi*/}
//       <Route path="autofotoseldonerqapi" element={<AutoFotoselDonerQapi />}  >
//         <Route path="autodoner" element={<AutoDoner />} />
//         <Route path="autofotosel" element={<AutoFotosel />} />
//         <Route path="autoyarimdaireviqapi" element={<AutoYarimDaireviQapi />} />
//         <Route path="hermetikxestexanaqapi" element={<HermetikXestexanaQapi />} />
//       </Route>
//       {/* autobaryer*/}
//       <Route path="autobaryer" element={<AutoBaryer/>}  >
//         <Route path="vesor" element={<Vesor />} />
//         <Route path="slaqbaum" element={<Slaqbaum/>} />
//       </Route>
//     {/* autodarvaza*/}
//     <Route path="autodarvaza" element={<AutoDarvaza />}  >
//         <Route path="avtomatikdemirdarvaza" element={<AvtomatikDemirDarvaza />} />
//         <Route path="doxsanderecedarvaza" element={<DoxsanDereceDarvaza />} />
//         <Route path="xacilandarvaza" element={<XAcilanDarvaza />} />
//         <Route path="yanasurusendarvaza" element={<YanaSurusenDarvaza/>} />
//       </Route>


//     </Route>
//   )
// )




function App() {

  return (
    <>
   <BrowserRouter>
   <ScroolToTop/>
<AnimatedRoutesMain/>
   <SmoothSliderButton/>
   <WhatsappIcon/>
   <Footer2/>

   
   </BrowserRouter>


    </>
  )
}

export default App