import React from "react"
import BlogEntry from "./blog-entry"

describe("BlogEntry", () => {
  test("renders correctly", () => {
    const wrapper = shallow(<BlogEntry />)
    expect(wrapper).toMatchSnapshot()
  })
})
