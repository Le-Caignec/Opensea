import './accountPage.css'
import { Container, Tabs, Tab } from 'react-bootstrap'
import TopAcc from '../componants/Account/TopAcc'
import Collected from '../componants/Account/Collected'
import Activity from '../componants/AllForOneCollaction/Activity'
import Analyses from '../componants/AllForOneCollaction/Analyses'

export default function AccountPage() {
  return (
    <div id="AccountPage">
      <TopAcc />
      <Container fluid>
        <Tabs defaultActiveKey="Collected" className="mb-3">
          <Tab eventKey="Collected" title="Collected">
            <Collected />
          </Tab>
          <Tab eventKey="Activity" title="Activity">
            <Activity />
          </Tab>
          <Tab eventKey="Analyses" title="Analyses">
            <Analyses />
          </Tab>
        </Tabs>
      </Container>
    </div>
  )
}
