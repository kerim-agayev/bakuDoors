import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/mainPages/home/Home'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import About from './pages/mainPages/about/About'
import Contact from './pages/mainPages/contact/Contact'
import Questions from './pages/mainPages/questions/Questions'
import './App.css'

function App() {

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/questions' element={<Questions />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
