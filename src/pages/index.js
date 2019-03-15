import React from "react"
import ProjectCard from "./../components/project-card/project-card"
import BlogEntry from "./../components/blog-entry/blog-entry"
import List from "./../components/component-list/component-list"
import Layout from "./../components/layout/layout"
import SEO from "./../components/seo"

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
    <List list_title="Projects" tag_name={ProjectCard} items={projects} />
    <List list_title="Blogs" tag_name={BlogEntry} items={blogs} />
  </Layout>
)

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

const blogs = [
  {
    src: "https://picsum.photos/600/300?image=0",
    image_alt: "People on laptops",
    blog_title: "Build Tools Collection",
    blog_desc: "Build Tools Collection",
    blog_author: "David van Zyl",
  },
  {
    src: "https://picsum.photos/600/300?image=0",
    image_alt: "People on laptops",
    blog_title: "Build Tools Collection",
    blog_desc: "Build Tools Collection",
    blog_author: "David van Zyl",
  },
  {
    src: "https://picsum.photos/600/300?image=0",
    image_alt: "People on laptops",
    blog_title: "Build Tools Collection",
    blog_desc: "Build Tools Collection",
    blog_author: "David van Zyl",
  },
  {
    src: "https://picsum.photos/600/300?image=0",
    image_alt: "People on laptops",
    blog_title: "Build Tools Collection",
    blog_desc: "Build Tools Collection",
    blog_author: "David van Zyl",
  },
]

export default IndexPage
