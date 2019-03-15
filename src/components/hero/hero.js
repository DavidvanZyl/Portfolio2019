import React from "react"
import PropTypes from "prop-types"

import "./hero.scss"

const Hero = props => (
  <div className="hero">
    <div className="filtered">
      <img src="https://picsum.photos/800/400?image=0" alt="Test" />
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
