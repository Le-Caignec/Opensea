import './navbarTool.css'
import { Navbar, ListGroup, Form } from 'react-bootstrap'
import { useState, useContext } from 'react'
import Search from './Search'
import { BsPersonCircle } from 'react-icons/bs'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../../Context/ThemeContext.js'
import Web3Connection from '../../utils/connection'

export default function NavbarTool() {
  const naviguate = useNavigate()
  const [showExplore, setShowExplore] = useState(false)
  const [showAccount, setShowAccount] = useState(false)
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <Navbar id="navbar">
      <img src={logo} alt="logoIEXEC" onClick={() => naviguate('/')} />
      <Search />
      <div id="explorerModal">
        <h6 onMouseEnter={() => setShowExplore(!showExplore)}>Explore</h6>
        {showExplore && (
          <ListGroup onMouseLeave={() => setShowExplore(!showExplore)}>
            <ListGroup.Item
              action
              onClick={() => naviguate('/CollectionsPage')}
            >
              All Collections
            </ListGroup.Item>
            <ListGroup.Item action onClick={() => naviguate('/AllNftPage')}>
              All NFTs
            </ListGroup.Item>
          </ListGroup>
        )}
      </div>
      <div id="accountModal">
        <BsPersonCircle
          size={30}
          onMouseEnter={() => setShowAccount(!showAccount)}
        />
        {showAccount && (
          <ListGroup onMouseLeave={() => setShowAccount(!showAccount)}>
            <ListGroup.Item action onClick={() => naviguate('/AccountPage')}>
              Profile
            </ListGroup.Item>
            <ListGroup.Item action onClick={Web3Connection}>
              Connection
            </ListGroup.Item>
            <ListGroup.Item action>Disconnect</ListGroup.Item>
            <ListGroup.Item
              action
              style={{ display: 'flex', justifyContent: 'space-between' }}
            >
              {theme} Mode
              <Form.Check
                type="switch"
                style={{ display: 'inline-block' }}
                onChange={toggleTheme}
              />
            </ListGroup.Item>
          </ListGroup>
        )}
      </div>
    </Navbar>
  )
}
