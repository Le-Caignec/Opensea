import './homePage.css'
import { Container, Row, Tabs, Tab } from 'react-bootstrap'
import Ranking from '../componants/HomePage/Ranking'
import {
  StaticCarousel,
  DynamicCarousel,
} from '../componants/HomePage/Carousel'

export default function HomePage() {
  return (
    <div>
      <Container id="HomePage" fluid>
        <Row>
          <h1>Explore NFTs on iExec Sidechain</h1>
        </Row>
        <DynamicCarousel />
        <Tabs defaultActiveKey="Collected" className="mb-3">
          <Tab eventKey="Collected" title="Collected">
            <Ranking />
          </Tab>
          <Tab eventKey="Activity" title="Activity">
            <Ranking />
          </Tab>
        </Tabs>
        <StaticCarousel title={'Notable collections'} />
        <StaticCarousel title={"Meilleurs achats de collection aujourd'hui"} />
        <StaticCarousel title={'Holiday NFT spotlight'} />
      </Container>
    </div>
  )
}
