import { useState, useEffect } from 'react'

function App() {
  const [copied, setCopied] = useState(false)
  const currentYear = new Date().getFullYear()
  const email = 'hello@wscode.online'

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="nav-content">
            <a href="#" className="logo" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
              WS Code-Online
            </a>
            <div className="nav-links">
              <a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection('services') }}>Services</a>
              <a href="#work" onClick={(e) => { e.preventDefault(); scrollToSection('work') }}>Work</a>
              <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about') }}>About</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Web Apps & SaaS, built fast and clean.</h1>
            <p className="hero-subtitle">I build web apps, SaaS, and micro-SaaS.</p>
            <div className="hero-buttons">
              <a href="https://wailsolaiman.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                View Portfolio
              </a>
              <a href={`mailto:${email}`} className="btn btn-secondary">
                Email Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">⚛️</div>
              <h3>Web Apps</h3>
              <p>React/Next.js</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🚀</div>
              <h3>SaaS / Micro-SaaS MVPs</h3>
              <p>Fast MVPs</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📝</div>
              <h3>WordPress</h3>
              <p>Plugins & custom sites</p>
            </div>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="work">
        <div className="container">
          <h2 className="section-title">Work</h2>
          <div className="work-grid">
            <div className="work-card">
              <div className="coming-soon">Coming soon</div>
              <h3>Project One</h3>
              <p>Description of the first project</p>
            </div>
            <div className="work-card">
              <div className="coming-soon">Coming soon</div>
              <h3>Project Two</h3>
              <p>Description of the second project</p>
            </div>
            <div className="work-card">
              <div className="coming-soon">Coming soon</div>
              <h3>Project Three</h3>
              <p>Description of the third project</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About</h2>
          <div className="about-content">
            <p>
              I'm Wail, a freelance frontend web developer based in Germany. I focus on building 
              clean UI, optimizing performance, and shipping MVPs that get your product to market fast. 
              Whether it's a web app, SaaS platform, or WordPress solution, I deliver code that's 
              maintainable and scalable.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="contact-card">
            <div className="contact-email">{email}</div>
            <div className="contact-label">Available for new projects</div>
            <div className="contact-buttons">
              <button onClick={copyEmail} className="btn btn-primary">
                Copy Email
              </button>
              <a href={`mailto:${email}`} className="btn btn-secondary">
                Open Email
              </a>
            </div>
            <div className="contact-icons">
              <a href="https://wailsolaiman.com" target="_blank" rel="noopener noreferrer" className="icon-link">
                🌐 Portfolio
              </a>
            </div>
          </div>
          {copied && <div className="toast">Copied!</div>}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© {currentYear} WS Code-Online — wscode.online</p>
        </div>
      </footer>
    </div>
  )
}

export default App

