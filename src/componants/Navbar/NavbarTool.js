import './navbarTool.css'
import { Navbar, ListGroup } from 'react-bootstrap'
import { useState } from 'react'
import Search from './Search'
import { BsPersonCircle } from 'react-icons/bs'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'

export default function NavbarTool() {
  const naviguate = useNavigate()
  const [show, setShow] = useState(false)

  return (
    <Navbar id="navbar">
      <img src={logo} alt="logoIEXEC" onClick={() => naviguate('/')} />
      <Search />
      <div id="explorerModal">
        <h6 onMouseEnter={() => setShow(!show)}>Explore</h6>
        {show && (
          <ListGroup onMouseLeave={() => setShow(!show)}>
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
      <BsPersonCircle size={30} onClick={() => naviguate('/AccountPage')} />
    </Navbar>
  )
}
