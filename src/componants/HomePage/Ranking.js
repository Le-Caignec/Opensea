import './ranking.css'
import { Row, Col } from 'react-bootstrap'
import front from '../../assets/front.avif'

export default function Ranking() {
  return (
    <Row id="ranking">
      <Col>
        <Header />
        <OneRow />
        <OneRow />
        <OneRow />
        <OneRow />
        <OneRow />
      </Col>
      <Col>
        <Header />
        <OneRow />
        <OneRow />
        <OneRow />
        <OneRow />
        <OneRow />
      </Col>
    </Row>
  )
}

function OneRow() {
  return (
    <Row id="oneRow">
      <Col md={1}>
        <h6>1</h6>
      </Col>
      <Col>
        <img src={front} alt="loading" />
      </Col>
      <Col md={1}>
        <h6>#2685</h6>
      </Col>
    </Row>
  )
}

function Header() {
  return (
    <Row id="header">
      <Col>
        <h6>Rank</h6>
      </Col>
      <Col>
        <h6>Avatar</h6>
      </Col>
      <Col>
        <h6>Score</h6>
      </Col>
    </Row>
  )
}
