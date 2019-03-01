import React from "react"

import SocialLinks from "../../social/social-links/social-links"
import SocialButton from "../../social/social-button/social-button"

import "./footer.scss"

const Footer = ({ siteTitle }) => (
  <footer className="footer">
    <div className="footer__copy">
      © {new Date().getFullYear()}, David van Zyl
    </div>
    <SocialLinks>
      <div>
        <SocialButton url="https://github.com/DavidvanZyl" title="Github" />
        <SocialButton
          url="https://www.linkedin.com/in/davidvzyl"
          title="LinkedIn"
        />
      </div>
      <div>
        <SocialButton url="https://medium.com/" title="Medium" />
        <SocialButton url="mailto:info@davidvanzyl.io" title="Email me!" />
      </div>
    </SocialLinks>
  </footer>
)

export default Footer
