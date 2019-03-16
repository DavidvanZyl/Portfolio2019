import React from "react"
import ProjectCard from "./../components/project-card/project-card"
import BlogEntry from "./../components/blog-entry/blog-entry"
import List from "./../components/component-list/component-list"
import Layout from "./../components/layout/layout"
import SEO from "./../components/seo"

import topography from "./../images/topography.png"

import "./index.scss"

const IndexPage = ({ data: { allPrismicBlog, allPrismicProject } }) => {
  const blogsNodes = allPrismicBlog.edges
  const projectNodes = allPrismicProject.edges
  return (
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
      <List list_title="Projects" tag_name={ProjectCard} items={projectNodes} />
      <List list_title="Blogs" tag_name={BlogEntry} items={blogsNodes} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    prismicHomepage {
      data {
        cv {
          url
        }
      }
    }
    allPrismicBlog(sort: { order: DESC, fields: [data___date] }) {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            __typename
          }
        }
      }
    }
    allPrismicProject(sort: { order: DESC, fields: [data___date] }) {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            item_image {
              url
              alt
            }
            __typename
          }
        }
      }
    }
  }
`

export default IndexPage
