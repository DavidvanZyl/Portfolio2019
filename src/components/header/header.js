import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.scss"

const Header = ({ siteTitle }) => (
  <header className="header">
    <div className="header__content">
      <p style={{ margin: 0 }}>
        <Link className="link" to="/">
          {siteTitle}
        </Link>
      </p>
      <p style={{ margin: 0 }}>
        <Link className="link" to="/">
          Download my CV
        </Link>
      </p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
