import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import Hero from "../../components/hero/hero"
import ProjectCard from "../../components/project-card/project-card"
import List from "../../components/component-list/component-list"

import "./projects.scss"

const Project = ({ data: { prismicProject } }) => {
  const { data } = prismicProject
  return (
    <Layout>
      <SEO title="Projects" />
      <div className="projectPage">
        <Hero
          title={data.title.text}
          image={data.main_image.url}
          alt={data.main_image.alt}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: data.body[0].primary.content.html,
          }}
        />
        <div
          dangerouslySetInnerHTML={{
            __html: data.body[1].primary.code_block.html,
          }}
        />
      </div>
    </Layout>
  )
}

export default Project

export const pageQuery = graphql`
  query ProjectBySlug($uid: String!) {
    prismicProject(uid: { eq: $uid }) {
      uid
      data {
        title {
          text
        }
        main_image {
          url
          alt
        }
        description
        body {
          ... on PrismicProjectBodyText {
            primary {
              content {
                html
              }
            }
          }
          ... on PrismicProjectBodyCodeBlock {
            primary {
              code_block {
                html
              }
            }
          }
          __typename
        }
      }
    }
  }
`
