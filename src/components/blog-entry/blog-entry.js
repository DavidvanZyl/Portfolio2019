import React from "react"
import { Link } from "gatsby"

import "./blog-entry.scss"

const BlogEntry = props => (
  <Link to={`/blog/${props.item.node.uid}`}>
    <p className="blog">{props.item.node.data.title.text}</p>
  </Link>
)

export default BlogEntry
