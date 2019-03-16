import React from "react"
import BlogEntry from "./blog-entry"

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
    const wrapper = shallow(<BlogEntry item={testItem} />)
    expect(wrapper).toMatchSnapshot()
  })
})
