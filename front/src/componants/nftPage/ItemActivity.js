import './itemActivity.css'
import { Accordion, Form, Table, Row } from 'react-bootstrap'
import { CgArrowsExchangeAltV } from 'react-icons/cg'
import {IoIosArrowDown} from 'react-icons/io'

export default function ItemActivity() {
  return (
    <Accordion id="itemActivity" defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <CgArrowsExchangeAltV size={20} />
          Item Activity
        </Accordion.Header>
        <Accordion.Body id="accordionBody">
          <Row>
            <div id='filterBox'>
              <h6>Filter</h6>
              <IoIosArrowDown size={20} />
            </div>
          </Row>
          <Table>
            <thead>
              <tr>
                <th>Event</th>
                <th>Price</th>
                <th>From</th>
                <th>To</th>
                <th>Date</th>
              </tr>
            </thead>
          </Table>
          <div id="tableBody">
            <Table>
              <tbody>
                <tr>
                  <td id="column1">Transfert</td>
                  <td id="column2">0.05 RLC</td>
                  <td id="column3">1BC493</td>
                  <td id="column4">oi55</td>
                  <td>3 days ago</td>
                </tr>
                <tr>
                  <td id="column1">Transfert</td>
                  <td id="column2">0.05 RLC</td>
                  <td id="column3">1BC493</td>
                  <td id="column4">oi55</td>
                  <td>3 days ago</td>
                </tr>
                <tr>
                  <td id="column1">Transfert</td>
                  <td id="column2">0.05 RLC</td>
                  <td id="column3">1BC493</td>
                  <td id="column4">oi55</td>
                  <td>3 days ago</td>
                </tr>
                <tr>
                  <td id="column1">Transfert</td>
                  <td id="column2">0.05 RLC</td>
                  <td id="column3">1BC493</td>
                  <td id="column4">oi55</td>
                  <td>3 days ago</td>
                </tr>
                <tr>
                  <td id="column1">Transfert</td>
                  <td id="column2">0.05 RLC</td>
                  <td id="column3">1BC493</td>
                  <td id="column4">oi55</td>
                  <td>3 days ago</td>
                </tr>
                <tr>
                  <td id="column1">Transfert</td>
                  <td id="column2">0.05 RLC</td>
                  <td id="column3">1BC493</td>
                  <td id="column4">oi55</td>
                  <td>3 days ago</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
