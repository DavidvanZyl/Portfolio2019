import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"

import "./blog.scss"
import List from "../../components/component-list/component-list"
import Hero from "../../components/hero/hero"
import BlogEntry from "../../components/blog-entry/blog-entry"

const Blog = ({ data: { prismicBlog } }) => {
  const { data } = prismicBlog
  let blogContent = []
  data.body.forEach(element => {
    switch (element.__typename) {
      case "PrismicBlogBodyText":
        blogContent.push(
          <div
            dangerouslySetInnerHTML={{ __html: element.primary.content.html }}
          />
        )
        break
      case "PrismicBlogBodyCodeBlock":
        blogContent.push(
          <div
            dangerouslySetInnerHTML={{
              __html: element.primary.code_block.html,
            }}
          />
        )
        break
      default:
        break
    }
  })
  return (
    <Layout>
      <SEO title={data.title.text} keywords={data.description.split(" ")} />
      <div className="blogPage">
        <Hero
          title={data.title.text}
          image={data.main_image.url}
          alt={data.main_image.alt}
        />
        {blogContent}
      </div>
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query BlogBySlug($uid: String!) {
    prismicBlog(uid: { eq: $uid }) {
      uid
      data {
        title {
          html
          text
        }
        main_image {
          url
          alt
        }
        description
        body {
          ... on PrismicBlogBodyText {
            primary {
              content {
                html
              }
            }
          }
          ... on PrismicBlogBodyCodeBlock {
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
