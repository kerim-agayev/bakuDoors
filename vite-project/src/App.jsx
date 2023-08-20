

import { BrowserRouter } from 'react-router-dom'

import './App.css'
import ScroolToTop from './components/ScroolToTop'
import WhatsappIcon from './components/WhatsappIcon'
import SmoothSliderButton from './components/SmoothSliderButton'
import AnimatedRoutesMain from './AnimatedRoutesMain'
import Footer2 from './components/footer/Footer2'
import Navbar2 from './components/navbar/Navbar2'






function App() {

  return (
    <>
   <BrowserRouter>
   <ScroolToTop/>
   <Navbar2/>
<AnimatedRoutesMain/>
   <SmoothSliderButton/>
   <WhatsappIcon/>
   <Footer2/>

   
   </BrowserRouter>


    </>
  )
}

export default App