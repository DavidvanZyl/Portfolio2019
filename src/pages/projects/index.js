import React from "react"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"

import "./projects.scss"
import ProjectCard from "../../components/project-card/project-card"
import Hero from "../../components/hero/hero"
import List from "../../components/component-list/component-list"

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <div className="projectPage">
      <Hero title="Some not boring project" />
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?
      </p>
    </div>
    <List list_title="Other Projects" tag_name={ProjectCard} items={projects} />
  </Layout>
)

export default Projects

const projects = [
  {
    src: "https://picsum.photos/600/300?image=0",
    image_alt: "People on laptops",
    project_title: "Build Tools Collection",
    project_link: "Build-Tools-Collection",
    project_desc: "Build Tools Collection",
    project_author: "David van Zyl",
  },
  {
    src: "https://picsum.photos/600/300?image=0",
    image_alt: "People on laptops",
    project_title: "Build Tools Collection",
    project_link: "Build-Tools-Collection",
    project_desc: "Build Tools Collection",
    project_author: "David van Zyl",
  },
  {
    src: "https://picsum.photos/600/300?image=0",
    image_alt: "People on laptops",
    project_title: "Build Tools Collection",
    project_link: "Build-Tools-Collection",
    project_desc: "Build Tools Collection",
    project_author: "David van Zyl",
  },
  {
    src: "https://picsum.photos/600/300?image=0",
    image_alt: "People on laptops",
    project_title: "Build Tools Collection",
    project_link: "Build-Tools-Collection",
    project_desc: "Build Tools Collection",
    project_author: "David van Zyl",
  },
]
