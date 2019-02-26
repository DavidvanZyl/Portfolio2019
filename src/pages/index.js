import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import "./index.scss"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`David van Zyl`, `Web Developer`, `JavaScript`, `React`]}
    />
    <Image />
    <div className="circle">
      <div className="title">
        <h1>DAVID</h1>
        <h1>PORTFOLIO</h1>
      </div>
    </div>
    <Link to="/projects/projects">Go to Projects</Link>
  </Layout>
)

export default IndexPage
