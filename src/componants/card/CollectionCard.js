import './collectionCard.css'
import { Card } from 'react-bootstrap'
import back from '../../assets/back.avif'
import front from '../../assets/front.avif'

export default function CollectionCard() {
  return (
    <div>
      <Card id="collectionCard">
        <Card.Img variant="top" src={back} />
        <Card.Body>
          <div id="iconOver">
            <Card.Img src={front} />
          </div>
          <Card.Title>WiredBeast</Card.Title>
        </Card.Body>
      </Card>
    </div>
  )
}
