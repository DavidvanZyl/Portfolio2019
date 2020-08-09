import './index.scss';

import React from 'react';

import BlogEntry from './../components/blog-entry/blog-entry';
import List from './../components/component-list/component-list';
import Layout from './../components/layout/layout';
import ProjectCard from './../components/project-card/project-card';
import SEO from './../components/seo';
import topography from './../images/topography.png';

const IndexPage = ({ data: { allPrismicBlog, allPrismicProject } }) => {
  const blogsNodes = allPrismicBlog.edges
  const projectNodes = allPrismicProject.edges
  return (
    <Layout>
      <SEO
        title="Home"
        description={"JavaScript Front-End Web Developer"}
        keywords={[`David van Zyl`, `Web Developer`, `JavaScript`, `React`]}
      />
      <div className="intro">
        <img className="intro__image" src={topography} alt="" key="1" />
        <div className="intro__title">
          <h1>DAVID</h1>
          <h1>VAN ZYL</h1>
          <h1>WEB ENGINEER</h1>
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
            link {
              url
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
            link {
              url
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
