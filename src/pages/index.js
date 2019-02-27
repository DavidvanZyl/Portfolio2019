import React from "react"
import ProjectList from "../components/project-list/project-list"
import BlogList from "../components/blog-list/blog-list"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"

import topography from "./../images/topography.png"

import "./index.scss"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="David van Zyl"
      description={"JavaScript Front-End Web Developer"}
      keywords={[`David van Zyl`, `Web Developer`, `JavaScript`, `React`]}
    />
    <div className="intro">
      <img className="intro__image" src={topography} alt="" />
      <div className="intro__circle">
        <div className="intro__title">
          <h1>DAVID</h1>
          <h1>PORTFOLIO</h1>
        </div>
      </div>
    </div>
    <ProjectList projects={projects} />
    <BlogList blogs={projects} />
  </Layout>
)

const projects = [
  {
    src: "https://unsplash.com/photos/5fNmWej4tAA",
    image_alt: "People on laptops",
    project_desc: "Build Tools Collection",
    project_author: "David van Zyl",
  },
]

export default IndexPage
