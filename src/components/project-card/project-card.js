import React from "react"
import { Link } from "gatsby"

import "./project-card.scss"

const ProjectCard = props => (
  <Link to={`/project/${props.item.node.uid}`} className="project">
    <div className="filtered">
      <img
        src={props.item.node.data.item_image.url}
        alt={props.item.node.data.item_image.alt}
      />
    </div>
    <p className="project__title">{props.item.node.data.title.text}</p>
  </Link>
)

export default ProjectCard
