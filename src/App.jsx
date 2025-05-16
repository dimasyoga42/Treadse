
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Login from './page/login'

function App() {
  return (
    <div className='@container mx-auto'>
    < Navbar />
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
