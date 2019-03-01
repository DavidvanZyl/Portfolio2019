import React from "react"
import PropTypes from "prop-types"

import "./blog-entry.scss"

const BlogEntry = props => <p className="blog">{props.item.blog_title}</p>

BlogEntry.propTypes = {
  blog_desc: PropTypes.string,
  blog_author: PropTypes.string,
}

export default BlogEntry
