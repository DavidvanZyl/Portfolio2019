/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    const blogTemplate = path.resolve("src/templates/blog/index.js")
    const projectTemplate = path.resolve("src/templates/project/index.js")
    resolve(
      graphql(`
        {
          allPrismicBlog {
            edges {
              node {
                uid
                id
              }
            }
          }
          allPrismicProject {
            edges {
              node {
                uid
                id
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allPrismicBlog.edges.forEach(({ node }) => {
          const uid = node.uid
          createPage({
            path: `/blog/${uid}`,
            component: blogTemplate,
            context: {
              uid,
            },
          })
        })
        result.data.allPrismicProject.edges.forEach(({ node }) => {
          const uid = node.uid
          createPage({
            path: `/project/${uid}`,
            component: projectTemplate,
            context: {
              uid,
            },
          })
        })
      })
    )
  })
}
