import './allForOneCollection.css'
import Top from '../componants/AllForOneCollaction/Top.js'
import { Container, Tabs, Tab } from 'react-bootstrap'
import Activity from '../componants/AllForOneCollaction/Activity'
import Analyses from '../componants/AllForOneCollaction/Analyses'
import Elements from '../componants/AllForOneCollaction/Elements'

export default function AllForOneCollection() {
  return (
    <div id="AllForOneCollection">
      <Top />
      <Container fluid>
        <Tabs defaultActiveKey="Element" className="mb-3">
          <Tab eventKey="Element" title="Element">
            <Elements />
          </Tab>
          <Tab eventKey="Analyses" title="Analyses">
            <Analyses />
          </Tab>
          <Tab eventKey="Activity" title="Activity">
            <Activity />
          </Tab>
        </Tabs>
      </Container>
    </div>
  )
}
