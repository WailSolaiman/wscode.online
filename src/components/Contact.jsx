import { useState } from "react"

function Contact({ email }) {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <div className="contact-tagline">
            <span className="tag">Get in Touch</span>
          </div>
          <h2 className="section-title">Contact</h2>
          <p className="contact-subtitle">
            Ready to start a project or have questions? We'd love to hear from
            you.
          </p>
        </div>
        <div className="contact-card">
          <div className="contact-email">{email}</div>
          <div className="contact-label">
            We typically respond within 24 hours
          </div>
          <div className="contact-buttons">
            <button onClick={copyEmail} className="btn btn-primary">
              Copy Email
            </button>
            <a href={`mailto:${email}`} className="btn btn-secondary">
              Send Message
            </a>
          </div>
          <div className="contact-decoration">
            <div className="decoration-line"></div>
            <div className="decoration-dot"></div>
          </div>
        </div>
        {copied && <div className="toast">Email copied to clipboard!</div>}
      </div>
    </section>
  )
}

export default Contact
