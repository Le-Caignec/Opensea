import './propertyCard.css'

import React from 'react'

export default function PropertyCard({ position, color, percent }) {
  return (
    <div id="propertyCard">
      <h6 id="position">{position}</h6>
      <h6 id="color">{color}</h6>
      <h6 id="percent">{percent}% have this trait</h6>
    </div>
  )
}
