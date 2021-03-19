import React from "react"

import { Image } from "."

const Card = ({ title, text }) => (
  <div className="card">
    <Image />
    <h4 className="card-heading">{title}</h4>
    <p className="card-text">{text}</p>
  </div>
)

export default Card
