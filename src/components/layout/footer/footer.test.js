import React from "react"
import Footer from "./footer"

describe("Footer", () => {
  test("renders correctly", () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper).toMatchSnapshot()
  })
})
