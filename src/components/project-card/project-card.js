import './project-card.scss';

import { Link } from 'gatsby';
import React from 'react';

import linkImg from '../../images/link.png';

const ProjectCard = props => {
  const ProjectLink = ({ children }) =>
    props.item.node.data.link && props.item.node.data.link.url ? (
      <a href={props.item.node.data.link.url} className="project">
        {children}
      </a>
    ) : (
      <Link to={`/project/${props.item.node.uid}`} className="project">
        {children}
      </Link>
    )

  const ProjectTitle = () =>
    props.item.node.data.link && props.item.node.data.link.url ? (
      <div className="linkTitle">
        <img src={linkImg} alt="External link" />
        <p className="project__title">{props.item.node.data.title.text}</p>
      </div>
    ) : (
      <p className="project__title">{props.item.node.data.title.text}</p>
    )

  return (
    <ProjectLink>
      <div className="filtered item">
        <img
          src={props.item.node.data.item_image.url}
          alt={props.item.node.data.item_image.alt}
        />
      </div>
      <ProjectTitle />
    </ProjectLink>
  )
}

export default ProjectCard
