import './elements.css'
import {
  Container,
  Row,
  Col,
  Button,
  ButtonGroup,
  Accordion,
  Form,
} from 'react-bootstrap'
import { BsTextCenter } from 'react-icons/bs'
import { useState } from 'react'
import NftCard from '../card/NftCard.js'

export default function Elements() {
  const [displayMenu, setDisplayMenu] = useState(true)
  const [item, setItem] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
  return (
    <div id="Elements">
      <div className="menu">
        <Button onClick={() => setDisplayMenu(!displayMenu)}>
          <BsTextCenter size={20} />
        </Button>
        <ButtonGroup id="trr">
          <Button variant="secondary">Left</Button>
          <Button variant="secondary">Middle</Button>
          <Button variant="secondary">Right</Button>
        </ButtonGroup>
      </div>
      <Container fluid id="sideMenu">
        <Row>
          {displayMenu && (
            <Col md={3}>
              <Accordion id="sideMenu" defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    <Form.Check type="checkbox" label="test" />
                    <Form.Check type="checkbox" label="test" />
                    <Form.Check type="checkbox" label="test" />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    <Form.Check type="checkbox" label="test" />
                    <Form.Check type="checkbox" label="test" />
                    <Form.Check type="checkbox" label="test" />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    <Form.Check type="checkbox" label="test" />
                    <Form.Check type="checkbox" label="test" />
                    <Form.Check type="checkbox" label="test" />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Accordion Item #1</Accordion.Header>
                  <Accordion.Body>
                    <Form.Check type="checkbox" label="test" />
                    <Form.Check type="checkbox" label="test" />
                    <Form.Check type="checkbox" label="test" />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          )}
          <Col>
            <Row md={4}>
              {item.map((item) => (
                <Col key={item} id="nftCol">
                  <NftCard tokenID={item} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
