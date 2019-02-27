import React from "react"
import ProjectCard from "./project-card"

describe("BlogEntry", () => {
  test("renders correctly", () => {
    const wrapper = shallow(<ProjectCard />)
    expect(wrapper).toMatchSnapshot()
  })
})
