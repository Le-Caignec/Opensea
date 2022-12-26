import './cardInfo.css'
import { Accordion, Table } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'
import front from '../../assets/front.avif'
import PropertyCard from './PropertyCard'
import { GrTextAlignFull } from 'react-icons/gr'
import {AiOutlineTags} from 'react-icons/ai'
import {BsLayoutTextSidebar} from 'react-icons/bs'
import {FaList} from 'react-icons/fa'

export default function CardInfo({
  collectionName,
  contractAddress,
  tokenID,
  owner,
}) {
  return (
    <Accordion id="cardInfo" alwaysOpen defaultActiveKey="1">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <GrTextAlignFull size={20}/>
          Description
        </Accordion.Header>
        <Accordion.Body>
          By {collectionName}
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
          alias reprehenderit doloribus ab, molestias laudantium amet voluptas
          inventore assumenda aperiam id blanditiis aspernatur exercitationem
          placeat distinctio explicabo consectetur, sit consequatur?
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <AiOutlineTags size={25}/>
          Properties
        </Accordion.Header>
        <Accordion.Body>
          <Row id="propertyCardRow" md={3}>
            <Col>
              <PropertyCard
                position={'BACKGROUND'}
                color={'Yellow'}
                percent={5}
              />
            </Col>
            <Col>
              <PropertyCard
                position={'BACKGROUND'}
                color={'Yellow'}
                percent={5}
              />
            </Col>
            <Col>
              <PropertyCard
                position={'BACKGROUND'}
                color={'Yellow'}
                percent={5}
              />
            </Col>
            <Col>
              <PropertyCard
                position={'BACKGROUND'}
                color={'Yellow'}
                percent={5}
              />
            </Col>
            <Col>
              <PropertyCard
                position={'BACKGROUND'}
                color={'Yellow'}
                percent={5}
              />
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <BsLayoutTextSidebar size={20}/>
          About Wired Beast
        </Accordion.Header>
        <Accordion.Body>
          <Row>
            <Col id="colIcon">
              <div>
                <img src={front} alt="front" />
              </div>
            </Col>
            <Col>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Col>
          </Row>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <FaList size={20}/>
          Details
        </Accordion.Header>
        <Accordion.Body>
          <Table borderless>
            <tbody>
              <tr>
                <td>Contract Address</td>
                <td id="secondColumn">{contractAddress}</td>
              </tr>
              <tr>
                <td>Token ID</td>
                <td id="secondColumn">{tokenID}</td>
              </tr>
              <tr>
                <td>Token Standard</td>
                <td id="secondColumn">ERC-721</td>
              </tr>
              <tr>
                <td>Chain</td>
                <td id="secondColumn">Bellecour</td>
              </tr>
              <tr>
                <td>Owner</td>
                <td id="secondColumn">{owner}</td>
              </tr>
            </tbody>
          </Table>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
