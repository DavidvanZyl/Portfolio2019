import React from "react"
import Hero from "./hero"

describe("BlogEntry", () => {
  test("renders correctly", () => {
    const wrapper = shallow(
      <Hero item={{ title: "test", image: "test.jpg", alt: "test image" }} />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
