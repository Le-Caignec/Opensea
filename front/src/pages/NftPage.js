import './nftPage.css'
import { Col, Container, Row } from 'react-bootstrap'
import nft from '../assets/nft.avif'
import CardInfo from '../componants/nftPage/CardInfo'
import ItemActivity from '../componants/nftPage/ItemActivity'
import MoreAboutCollection from '../componants/nftPage/MoreAboutCollection'

export default function NftPage({ tokenID, owner }) {
  return (
    <Container id="nftPage" fluid>
      <Row xs={1} md={2}>
        <Col>
          <div id="imgNftPage">
            <img src={nft} alt="nft" />
          </div>
        </Col>
        <Col>
          <h1>Wired Beast #{tokenID}</h1>
          <h6>Owned by {owner}</h6>
          <CardInfo
            contractAddress={'0x2910...2bbf'}
            tokenID={tokenID}
            owner={'0xa1b1...2bbf'}
            collectionName={'WiredBeast'}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <ItemActivity />
          <MoreAboutCollection />
        </Col>
      </Row>
    </Container>
  )
}
