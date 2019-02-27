import React from "react"

import SocialLinks from "../social-links/social-links"
import SocialButton from "../social-button/social-button"

import "./footer.scss"

const Footer = ({ siteTitle }) => (
  <footer className="footer">
    <div>© {new Date().getFullYear()}, David van Zyl</div>
    <SocialLinks>
      <SocialButton url="https://github.com/DavidvanZyl" title="Github" />
      <SocialButton url="https://www.instagram.com/" title="LinkedIn" />
      <SocialButton url="https://medium.com/" title="Medium" />
      <SocialButton url="mailto:info@davidvanzyl.io" title="Email me!" />
    </SocialLinks>
  </footer>
)

export default Footer
