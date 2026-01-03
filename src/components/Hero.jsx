function Hero({ email }) {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-tagline">
            <span className="tag">Innovation & Technology</span>
          </div>
          <h1 className="hero-title">
            Building SaaS products that solve real problems.
          </h1>
          <p className="hero-subtitle">
            WS Code-Online develops and operates web applications. We create
            tools that make life easier, starting with KlarDesk.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">Products Live</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">Growing</span>
              <span className="stat-label">Team</span>
            </div>
          </div>
          <div className="hero-buttons">
            <button
              onClick={() => {
                const workSection = document.getElementById("work")
                if (workSection) {
                  workSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  })
                }
              }}
              className="btn btn-primary"
            >
              View Our Products
            </button>
            <a href={`mailto:${email}`} className="btn btn-secondary">
              Contact Us
            </a>
          </div>
          <div className="hero-scroll">
            <span className="scroll-text">Scroll to explore</span>
            <div className="scroll-arrow"></div>
          </div>
        </div>
      </div>
      <div className="hero-decoration">
        <div className="decoration-circle"></div>
        <div className="decoration-line"></div>
      </div>
    </section>
  )
}

export default Hero
