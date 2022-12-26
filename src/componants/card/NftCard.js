import './nftCard.css'
import { Card, Row, Col } from 'react-bootstrap'
import nft from '../../assets/nft.avif'

export default function NftCard({ tokenID }) {
  return (
    <div>
      <Card id="nftCard">
        <Card.Img variant="top" src={nft} />
        <Card.Body>
          <Row>
            <Col id='firstCol'>
              <h3>Wired Beast #{tokenID}</h3>
            </Col>
            <Col md={4}>
              <div id="badge">
                <h3>#{tokenID}</h3>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}
