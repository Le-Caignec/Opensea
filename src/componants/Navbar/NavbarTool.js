import './navbarTool.css'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Search from './Search'
import {BsPersonCircle} from 'react-icons/bs'

export default function NavbarTool() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Search />
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <BsPersonCircle size={30} />
        </Container>
      </Navbar>
    </>
  )
}
