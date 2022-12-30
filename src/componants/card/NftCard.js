import './nftCard.css'
import { Card, Row, Col } from 'react-bootstrap'
import nft from '../../assets/nft.avif'
import { useNavigate } from 'react-router-dom'

export default function NftCard({ tokenID }) {
  const naviguate = useNavigate()

  return (
    <div>
      <Card id="nftCard" onClick={()=>naviguate('/nftPage')}>
        <Card.Img variant="top" src={nft} />
        <Card.Body>
          <Row fluid>
            <Col md={7} id="firstCol">
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
