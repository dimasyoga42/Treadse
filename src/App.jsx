
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Login from './page/login'
import Profile from './page/profile'

function App() {
  return (
    <div className='@container mx-auto'>
    < Navbar />
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/profil' element={<Profile />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
