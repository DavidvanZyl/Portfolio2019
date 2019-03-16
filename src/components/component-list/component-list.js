import React from "react"

import "./component-list.scss"

export default class List extends React.Component {
  list
  constructor(props) {
    super(props)
    const TagName = this.props.tag_name
    this.list = this.props.items.map(item => (
      <TagName key={item.node.uid} item={item} />
    ))
  }

  render() {
    return (
      <div className="list">
        <h1>{this.props.list_title}</h1>
        <div className="list__item">{this.list}</div>
      </div>
    )
  }
}
