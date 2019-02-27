import React from "react"

import BlogEntry from "../blog-entry/blog-entry"

import "./blog-list.scss"

export default class BlogList extends React.Component {
  blogList = this.props.blogs.map(blog => (
    <div className="blog">
      <BlogEntry blog={blog} />
    </div>
  ))

  render() {
    return (
      <div className="blogs">
        <h1>Blogs</h1>
        <div className="blog__list">{this.blogList}</div>
      </div>
    )
  }
}
