import { Routes, Route } from 'react-router-dom'
import NavbarTool from './componants/Navbar/NavbarTool.js'
import Footer from './componants/Footer/Footer.js'
import HomePage from './pages/HomePage.js'

function App() {
  return (
    <div className="app">
      <NavbarTool />
      <div id='content'>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
