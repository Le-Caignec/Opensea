import './allNftPage.css'
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
import NftCard from '../componants/card/NftCard.js'
import {
  BsFillGrid3X3GapFill,
  BsFillGrid1X2Fill,
  BsFillGridFill,
} from 'react-icons/bs'

export default function AllNftPage() {
  const [item, setItem] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
  const [displayMenu, setDisplayMenu] = useState(true)
  const [agencement, setAgencement] = useState(4)

  return (
    <div id="AllNftPage">
      <div className="menu">
        <Button onClick={() => setDisplayMenu(!displayMenu)}>
          <BsTextCenter size={20} />
        </Button>
        <ButtonGroup id="dispositionButton">
          <Button onClick={() => setAgencement(5)}>
            <BsFillGrid3X3GapFill size={25} />
          </Button>
          <Button onClick={() => setAgencement(4)} id="second">
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
              <Accordion alwaysOpen defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Statut</Accordion.Header>
                  <Accordion.Body>
                    <Form.Check type="checkbox" label="test" />
                    <Form.Check type="checkbox" label="test" />
                    <Form.Check type="checkbox" label="test" />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Prix</Accordion.Header>
                  <Accordion.Body>
                    <Form.Check type="checkbox" label="test" />
                    <Form.Check type="checkbox" label="test" />
                    <Form.Check type="checkbox" label="test" />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Quantité</Accordion.Header>
                  <Accordion.Body>
                    <Form.Check type="checkbox" label="test" />
                    <Form.Check type="checkbox" label="test" />
                    <Form.Check type="checkbox" label="test" />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Catégorie</Accordion.Header>
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
