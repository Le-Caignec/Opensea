import './topAcc.css'
import logoAcc from '../../assets/logoAcc.jpeg'
import fondAcc from '../../assets/fondAcc.jpeg'
import { Container, Row, Col } from 'react-bootstrap'
import etherscan from '../../assets/logo/etherscan-logo.webp'
import { FaEthereum } from 'react-icons/fa'

export default function TopAcc() {
  return (
    <>
      <Row style={{ position: 'relative' }}>
        <div className="background">
          <img src={fondAcc} alt="background" />
        </div>
        <div className="logoAccount">
          <img src={logoAcc} alt="logo" />
        </div>
      </Row>
      <Container fluid>
        <Row id="Summary">
          <Col>
            <h1>Anonyme</h1>
          </Col>
          <Col className="logos">
            <a href="https://etherscan.io" target="_blank">
              <img src={etherscan} alt="etherscan-logo" />
            </a>
          </Col>
          <Col className="logos">
            <a href="https://etherscan.io" target="_blank">
              <img src={etherscan} alt="etherscan-logo" />
            </a>
          </Col>
        </Row>
        <Row id="description">
          <Col>
            <FaEthereum size={20} />
            <h6>0xa1B1...85d6</h6>
          </Col>
        </Row>
      </Container>
    </>
  )
}
