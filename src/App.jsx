
import './App.css'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import{Routes, Route} from "react-router-dom"

import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/Products'

function App() {
 

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path= "/" element={<Home/>}/>
      <Route path= "/about" element={<About/>}/>
      <Route path= "/products" element={<Products/>}/>
        <Route/> 
     </Routes>
     <Footer/>
    </>
  )
}

export default App
