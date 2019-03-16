import React from "react"
import ProjectCard from "./project-card"

const testItem = {
  node: {
    uid: "test",
    data: {
      item_image: {
        url: "test.jpg",
        alt: "test image",
      },
      title: {
        text: "test",
      },
    },
  },
}

describe("BlogEntry", () => {
  test("renders correctly", () => {
    const wrapper = shallow(<ProjectCard item={testItem} />)
    expect(wrapper).toMatchSnapshot()
  })
})
