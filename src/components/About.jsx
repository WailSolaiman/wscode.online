function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-header">
          <div className="about-tagline">
            <span className="tag">Mission & Vision</span>
          </div>
          <h2 className="section-title">About</h2>
          <p className="about-subtitle">
            Crafting digital solutions that simplify lives and bridge
            communication gaps.
          </p>
        </div>
        <div className="about-content">
          <p>
            WS Code-Online is a software company focused on building practical
            SaaS applications. We develop web apps that address real-world
            challenges, starting with KlarDesk—a translation service for German
            official documents. We're committed to creating tools that simplify
            everyday tasks and improve accessibility. Our mission is to build
            products that make a difference, one app at a time.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">Products Live</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">Growing</span>
              <span className="stat-label">Community</span>
            </div>
          </div>
        </div>
        <div className="about-decoration">
          <div className="decoration-line"></div>
          <div className="decoration-dot"></div>
        </div>
      </div>
    </section>
  )
}

export default About
