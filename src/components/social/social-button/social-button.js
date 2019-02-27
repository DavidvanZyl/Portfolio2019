import React from "react"
import PropTypes from "prop-types"

import "./social-button.scss"

const SocialButton = props => (
  <div className="socialButton">
    <a href={props.url}>{props.title}</a>
  </div>
)

SocialButton.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
}

export default SocialButton
