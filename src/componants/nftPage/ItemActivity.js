import './itemActivity.css'
import { Accordion, Form, Table } from 'react-bootstrap'
import { CgArrowsExchangeAltV } from 'react-icons/cg'

export default function ItemActivity() {
  return (
    <Accordion id="itemActivity" defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <CgArrowsExchangeAltV size={20} />
          Item Activity
        </Accordion.Header>
        <Accordion.Body>
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
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
            <tbody>
              <tr>
                <td>Transfert</td>
                <td>0.05 RLC</td>
                <td>1BC493</td>
                <td>oi55</td>
                <td>3 days ago</td>
              </tr>
              <tr>
                <td>Transfert</td>
                <td>0.05 RLC</td>
                <td>1BC493</td>
                <td>oi55</td>
                <td>3 days ago</td>
              </tr>
              <tr>
                <td>Transfert</td>
                <td>0.05 RLC</td>
                <td>1BC493</td>
                <td>oi55</td>
                <td>3 days ago</td>
              </tr>
              <tr>
                <td>Transfert</td>
                <td>0.05 RLC</td>
                <td>1BC493</td>
                <td>oi55</td>
                <td>3 days ago</td>
              </tr>
            </tbody>
          </Table>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}
