import React from "react"
import renderer from "react-test-renderer"

import Layout from "./layout"

describe("Layout", () => {
  test("renders correctly", () => {
    const wrapper = shallow(<Layout children={`<div></div>`} />)
    expect(wrapper).toMatchSnapshot()
  })
})
