import React from "react"
import renderer from "react-test-renderer"

import ProjectList from "./project-list"

describe("ProjectList", () => {
  test("renders correctly", () => {
    const wrapper = shallow(<ProjectList children={`<div></div>`} />)
    expect(wrapper).toMatchSnapshot()
  })
})
