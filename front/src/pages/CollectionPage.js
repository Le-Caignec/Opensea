import './collectionPage.css'
import { Container, Row, Col } from 'react-bootstrap'
import collection from '../assets/collection.avif'
import CollectionCard from '../componants/card/CollectionCard.js'
import { useState } from 'react'

export default function CollectionPage() {
  const [collections, setCollections] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])

  return (
    <div id="CollectionPage">
      <img src={collection} alt="collection_image" />
      <Container>
        <h1>Explore Collection</h1>
        <p>
          The way we value internet-native items is changing with the
          development of blockchain technology. Kittens, punks, and memes are
          now trading digital wallets for cryptocurrencies, and the online
          collectibles market is taking shape before our eyes.
        </p>
        <h5>Trending collections</h5>
        <Row md={4}>
          {collections.map((elem) => (
            <Col key={elem}>
              <CollectionCard />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}
