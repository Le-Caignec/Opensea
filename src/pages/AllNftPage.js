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

export default function AllNftPage() {
  const [displayMenu, setDisplayMenu] = useState(true)
  const [item, setItem] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
  return (
    <div id="AllNftPage">
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
            <Row>
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
