import './app.css'
import { Routes, Route } from 'react-router-dom'
import NavbarTool from './componants/Navbar/NavbarTool.js'
import Footer from './componants/Footer/Footer.js'
import HomePage from './pages/HomePage.js'
import NftPage from './pages/NftPage.js'


function App() {
  return (
    <div className="app">
      <NavbarTool />
      <div id='content'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nftPage" element={<NftPage tokenID={1567} owner={"0xcCD8c9b1963407A538825EdcfccFbb308f209E47"}/>} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
