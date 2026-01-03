import { Link } from "react-router-dom"

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <div className="footer-top">
        <div className="container">
          <div className="footer-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/imprint">Imprint</Link>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="footer-brand">WS Code-Online</span>
              <p className="footer-tagline">Building digital solutions</p>
            </div>
            <div className="footer-social">
              <p className="footer-connect">Let's connect</p>
              <div className="footer-links-small">
                <Link to="/privacy">Privacy</Link>
                <Link to="/terms">Terms</Link>
                <Link to="/imprint">Imprint</Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {currentYear} WS Code-Online — All rights reserved</p>
            <div className="footer-decoration">
              <div className="decoration-line"></div>
              <div className="decoration-dot"></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
