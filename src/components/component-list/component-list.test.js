import React from "react"
import renderer from "react-test-renderer"

import List from "./component-list"

describe("List", () => {
  test("renders correctly", () => {
    const wrapper = shallow(<List items={[]} children={`<div></div>`} />)
    expect(wrapper).toMatchSnapshot()
  })
})
