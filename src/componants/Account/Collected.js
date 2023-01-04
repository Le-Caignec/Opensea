import './collected.css'
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
import {
  BsFillGrid3X3GapFill,
  BsFillGrid1X2Fill,
  BsFillGridFill,
} from 'react-icons/bs'

export default function Collected() {
  const [displayMenu, setDisplayMenu] = useState(true)
  const [item, setItem] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
  const [agencement, setAgencement] = useState(4)

  return (
    <div id="Elements">
      <div className="menu">
        <Button onClick={() => setDisplayMenu(!displayMenu)}>
          <BsTextCenter size={20} />
        </Button>
        <ButtonGroup id="dispositionButton">
          <Button onClick={() => setAgencement(5)} id="first">
            <BsFillGrid3X3GapFill size={25} />
          </Button>
          <Button onClick={() => setAgencement(4)}>
            <BsFillGridFill size={25} />
          </Button>
          <Button onClick={() => setAgencement(3)} id="third">
            <BsFillGrid1X2Fill size={25} />
          </Button>
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
            <Row md={agencement}>
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
