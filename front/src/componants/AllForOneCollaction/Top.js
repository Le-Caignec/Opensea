import './top.css'
import front from '../../assets/front.avif'
import background from '../../assets/background.avif'
import { Container, Row, Col } from 'react-bootstrap'
import etherscan from '../../assets/logo/etherscan-logo.webp'

export default function Top() {
  return (
    <>
      <Row style={{ position: 'relative' }}>
        <img className="background" src={background} alt="background" />
        <img className="logo" src={front} alt="logo" />
      </Row>
      <Container fluid>
        <Row id="Summary">
          <Col>
            <h1>Wired Beast</h1>
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
          <Col id="verticalDiv">
            <div class="vr"></div>
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
        <div id="items">
            <h6>Éléments 3 000</h6>
            <h6>·   Créé le Mar 2022</h6>
            <h6>·   Frais de création 5%</h6>
            <h6>·   Blockchain Bellecour</h6>
        </div>
        <Row id="description">
          <Col>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              impedit quibusdam asperiores et assumenda, veritatis eius
              reprehenderit at sequi facilis ut. Inventore omnis laboriosam
              cumque explicabo nostrum impedit quos, excepturi accusantium
              doloribus. Ratione expedita ipsam distinctio! Labore quod
              distinctio aperiam.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  )
}
