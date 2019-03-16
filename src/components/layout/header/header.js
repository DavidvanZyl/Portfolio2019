import { Link, StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.scss"

const Header = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query {
        prismicHomepage {
          data {
            cv {
              url
            }
          }
        }
      }
    `}
    render={data => (
      <header className="header">
        <div className="header__content">
          <p style={{ margin: 0 }}>
            <Link className="link" to="/">
              <strong>{siteTitle}</strong>
            </Link>
          </p>
          <p style={{ margin: 0 }}>
            <a className="link" href={data.prismicHomepage.data.cv.url}>
              <strong>Download my CV</strong>
            </a>
          </p>
        </div>
      </header>
    )}
  />
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
