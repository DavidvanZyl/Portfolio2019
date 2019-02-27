import React from "react"
import PropTypes from "prop-types"

import "./blog-entry.scss"

const BlogEntry = props => (
  <div className="blog">
    <p className="blog__desc">{props.desc}</p>
    <p className="blog__author">{props.author}</p>
  </div>
)

BlogEntry.propTypes = {
  blog_desc: PropTypes.string,
  blog_author: PropTypes.string,
}

export default BlogEntry
