import React from "react"
import PropTypes from "prop-types"

import "./hero.scss"

const Hero = props => (
  <div className="hero">
    <div className="filtered">
      <img src={props.image} alt={props.alt} />
    </div>
    <div className="hero__titleWrap">
      <h1 className="hero__title">{props.title}</h1>
    </div>
  </div>
)

Hero.propTypes = {
  title: PropTypes.string,
}

export default Hero
