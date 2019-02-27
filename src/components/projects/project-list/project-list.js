import React from "react"

import ProjectCard from "../project-card/project-card"

import "./projects.scss"

export default class ProjectList extends React.Component {
  projectList = this.props.projects.map(project => (
    <div className="project">
      <ProjectCard project={project} />
    </div>
  ))

  render() {
    return (
      <div className="projects">
        <h1>Projects</h1>
        <div className="project__list">{this.projectList}</div>
      </div>
    )
  }
}
