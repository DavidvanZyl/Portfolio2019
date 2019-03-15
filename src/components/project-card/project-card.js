import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./project-card.scss"

const ProjectCard = props => (
  <Link to={`/projects`} className="project">
    <div className="filtered">
      <img
        src={props.item.src}
        style={{ width: "100%" }}
        alt={props.item.image_alt}
      />
    </div>
    <p className="project__title">{props.item.project_title}</p>
  </Link>
)

ProjectCard.propTypes = {
  src: PropTypes.string,
  image: PropTypes.any,
  image_alt: PropTypes.string,
  project_title: PropTypes.string,
  project_link: PropTypes.string,
  project_desc: PropTypes.string,
  project_author: PropTypes.string,
}

export default ProjectCard
