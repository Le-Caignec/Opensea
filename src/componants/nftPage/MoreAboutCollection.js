import './moreAboutCollection.css'
import { Accordion, Row, Col } from 'react-bootstrap'
import NftCard from '../card/NftCard'

export default function MoreAboutCollection() {
  return (
    <Accordion id="moreAboutCollection" defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Lore From This Collection</Accordion.Header>
        <Accordion.Body>
          <Row id="horizontalScrolling">
            <Col>
              <NftCard style={{ height: '500px' }} tokenID={1234} />
            </Col>
            <Col>
              <NftCard tokenID={1234} />
            </Col>
            <Col>
              <NftCard tokenID={1234} />
            </Col>
            <Col>
              <NftCard tokenID={1234} />
            </Col>
            <Col>
              <NftCard tokenID={1234} />
            </Col>
            <Col>
              <NftCard tokenID={1234} />
            </Col>
            <Col>
              <NftCard tokenID={1234} />
            </Col>
            <Col>
              <NftCard tokenID={1234} />
            </Col>
            <Col>
              <NftCard tokenID={1234} />
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
