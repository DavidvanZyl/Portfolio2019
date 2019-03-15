import React from "react"
import PropTypes from "prop-types"

import "./blog-entry.scss"
import { Link } from "gatsby"

const BlogEntry = props => (
  <Link to={`/blogs`}>
    <p className="blog">{props.item.blog_title}</p>
  </Link>
)

BlogEntry.propTypes = {
  blog_desc: PropTypes.string,
  blog_author: PropTypes.string,
}

export default BlogEntry
