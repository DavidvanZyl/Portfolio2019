import React from "react"
import renderer from "react-test-renderer"

import BlogList from "./blog-list"

describe("BlogList", () => {
  test("renders correctly", () => {
    const wrapper = shallow(<BlogList children={`<div></div>`} />)
    expect(wrapper).toMatchSnapshot()
  })
})
