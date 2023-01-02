import './carousel.css'
import { useState, useEffect, useRef } from 'react'
import NftCard from '../card/NftCard.js'
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi'
import { Row, Col } from 'react-bootstrap'

export function DynamicCarousel() {
  const [items, setItem] = useState([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ])
  const [currentItem, setCurrentItem] = useState(0)
  const carouselRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      // Move to the next item
      setCurrentItem((currentItem + 5) % items.length)
    }, 5000) // Update position every 2 seconds

    return () => clearInterval(interval)
  }, [currentItem])

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = currentItem * 200
    }
  }, [currentItem])

  return (
    <div id="carousel">
      <BiLeftArrow
        id="leftArrow"
        size={25}
        onClick={() =>
          setCurrentItem((currentItem - 1 + items.length) % items.length)
        }
      />
      <Row id="horizontalScrollingHome" ref={carouselRef}>
        {items.map((item) => (
          <Col key={item} id="nftCol">
            <NftCard tokenID={item} />
          </Col>
        ))}
      </Row>
      <BiRightArrow
        id="rightArrow"
        size={25}
        onClick={() => setCurrentItem((currentItem + 1) % items.length)}
      />
    </div>
  )
}

export function StaticCarousel({ title }) {
  const [items, setItem] = useState([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
  ])
  const [currentItem, setCurrentItem] = useState(0)
  const carouselRefStatic = useRef(null)

  const handle = () => {
    setCurrentItem((currentItem + 5) % items.length)
  }

  useEffect(() => {
    if (carouselRefStatic.current) {
      carouselRefStatic.current.scrollLeft = currentItem * 200
    }
  }, [currentItem])
  return (
    <div id="carousel">
      <h5>{title}</h5>
      <BiLeftArrow id="leftArrow" size={25} onClick={handle} />
      <Row id="horizontalScrollingHome" ref={carouselRefStatic}>
        {items.map((item) => (
          <Col key={item} id="nftCol">
            <NftCard tokenID={item} />
          </Col>
        ))}
      </Row>
      <BiRightArrow id="rightArrow" size={25} onClick={handle} />
    </div>
  )
}
