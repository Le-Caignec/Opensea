import './app.css'
import './componants/commun.css'
import { Routes, Route } from 'react-router-dom'
import NavbarTool from './componants/Navbar/NavbarTool.js'
import Footer from './componants/Footer/Footer.js'
import HomePage from './pages/HomePage.js'
import AllNftPage from './pages/AllNftPage.js'
import CollectionsPage from './pages/CollectionPage.js'
import AccountPage from './pages/AccountPage.js'
import NftPage from './pages/NftPage.js'
import AllForOneCollection from './pages/AllForOneCollection.js'
import { useContext } from 'react'
import { ThemeContext } from './Context/ThemeContext.js'

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className="app" id={theme}>
      <NavbarTool />
      <div id="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/CollectionsPage" element={<CollectionsPage />} />
          <Route
            path="/CollectionsPage/AllForOneCollection"
            element={<AllForOneCollection />}
          />
          <Route path="AllNftPage" element={<AllNftPage />} />
          <Route path="/AccountPage" element={<AccountPage />} />
          <Route
            path="/nftPage"
            element={
              <NftPage
                tokenID={1567}
                owner={'0xcCD8c9b1963407A538825EdcfccFbb308f209E47'}
              />
            }
          />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
