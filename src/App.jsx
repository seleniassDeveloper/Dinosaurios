import { Routes, Route, Link } from 'react-router-dom'
import HomeDinosaurios from './pages/Home'
import Navbar from './components/Navbar'
import Impact from './pages/Impact'


function App() {
  return (
    <div>
      <nav>
        <Navbar/>
      </nav>

      <Routes>
        <Route path="/" element={<HomeDinosaurios />} />
        <Route path="/impact" element={<Impact/>} />
      </Routes>
    </div>
  )
}

export default App