import React from "react"
import Header from "./header"

describe("Header", () => {
  test("renders correctly", () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
  })
})
