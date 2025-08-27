
import './App.css'
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './Components/Home'
import LandingPage from './Components/LandingPage'


function App() {
  

  return (
    <BrowserRouter>
      
    <Routes>
        <Route path="/" element={<LandingPage />} />
      <Route  exact path ="/getBook" element={<Home/>}/>
    </Routes>
        
    </BrowserRouter>
  )
}

export default App
