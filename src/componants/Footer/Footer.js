import './footer.css'
import { Navbar, Nav, Container } from 'react-bootstrap'

export default function Footer() {
  return (
    <>
      <Navbar id="footer" bg="dark" variant="dark">
        <Container>
          <h3>-- by @Rob_ETH_Dev -- </h3>
        </Container>
      </Navbar>
    </>
  )
}
