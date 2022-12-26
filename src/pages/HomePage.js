import './homePage.css'
import { Container, Row, Col } from 'react-bootstrap'
import CollectionCard from '../componants/card/CollectionCard'
import NftCard from '../componants/card/NftCard'

export default function HomePage() {
  return (
    <div id="HomePage">
      <Row>
        <h1>Explore NFTs on iExec Sidechain</h1>
      </Row>
      <Container>
        <Row>
          <Col>
            <CollectionCard />
          </Col>
          <Col>
            <NftCard tokenID={2219} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
