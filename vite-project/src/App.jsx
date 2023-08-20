

import { BrowserRouter } from 'react-router-dom'

import './App.css'
import ScroolToTop from './components/ScroolToTop'
import WhatsappIcon from './components/WhatsappIcon'
import SmoothSliderButton from './components/SmoothSliderButton'
import AnimatedRoutesMain from './AnimatedRoutesMain'
import Footer2 from './components/footer/Footer2'






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