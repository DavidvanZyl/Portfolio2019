import './blog-entry.scss';

import { Link } from 'gatsby';
import React from 'react';

import linkImg from '../../images/link.png';

const BlogEntry = props => {
  const Blog = () =>
    props.item.node.data.link && props.item.node.data.link.url ? (
      <a href={props.item.node.data.link.url}>
        <div className="linkTitle">
          <p className="blog">
            <img src={linkImg} alt="External link" />
            {props.item.node.data.title.text}
          </p>
        </div>
      </a>
    ) : (
      <Link to={`/blog/${props.item.node.uid}`}>
        <p className="blog">{props.item.node.data.title.text}</p>
      </Link>
    )

  return <Blog />
}

export default BlogEntry
