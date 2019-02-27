import React from "react"
import PropTypes from "prop-types"

import "./project-card.scss"

const ProjectCard = props => (
  <div className="project">
    <img
      className="project__image"
      src={props.src}
      style={{ width: "100%" }}
      alt={props.image_alt}
    />
    <p className="project__desc">{props.project_desc}</p>
    <p className="project__author">{props.project_author}</p>
  </div>
)

ProjectCard.propTypes = {
  image: PropTypes.any,
  image_alt: PropTypes.string,
  project_desc: PropTypes.string,
  project_author: PropTypes.string,
}

export default ProjectCard
