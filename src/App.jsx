import { Routes, Route, Link } from 'react-router-dom'
import HomeDinosaurios from './pages/Home'
import Navbar from './components/Navbar'


function App() {
  return (
    <div>
      <nav>
        <Navbar/>
      </nav>

      <Routes>
        <Route path="/" element={<HomeDinosaurios />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/donate" element={<Donate />} /> */}
      </Routes>
    </div>
  )
}

export default App