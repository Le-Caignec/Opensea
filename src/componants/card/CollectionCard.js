import './collectionCard.css'
import { Card } from 'react-bootstrap'
import back from '../../assets/back.avif'
import front from '../../assets/front.avif'
import { useNavigate } from 'react-router-dom'

export default function CollectionCard() {
  const naviguate = useNavigate()
  return (
    <Card
      id="collectionCard"
      onClick={() => naviguate('/CollectionsPage/AllForOneCollection')}
    >
      <Card.Img variant="top" src={back} />
      <Card.Body>
        <div id="iconOver">
          <img src={front} />
        </div>
        <Card.Title>WiredBeast</Card.Title>
      </Card.Body>
    </Card>
  )
}
