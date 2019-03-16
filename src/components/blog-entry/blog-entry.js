import React from "react"
import { Link } from "gatsby"

import "./blog-entry.scss"

const BlogEntry = props => {
  return props.item.node.data.link && props.item.node.data.link.url ? (
    <a href={props.item.node.data.link.url}>
      <p className="blog">{props.item.node.data.title.text}</p>
    </a>
  ) : (
    <Link to={`/blog/${props.item.node.uid}`}>
      <p className="blog">{props.item.node.data.title.text}</p>
    </Link>
  )
}

export default BlogEntry
