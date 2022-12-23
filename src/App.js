import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage.js'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
