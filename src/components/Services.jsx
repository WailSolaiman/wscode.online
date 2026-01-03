function Services() {
  const services = [
    {
      icon: "🌐",
      title: "Web Applications",
      label: "Modern Tech Stack",
      description:
        "We build scalable web applications using React, Next.js, and modern frameworks for optimal performance.",
    },
    {
      icon: "🚀",
      title: "SaaS Products",
      label: "User-Focused",
      description:
        "Our SaaS products are designed with users in mind, solving real problems with intuitive interfaces.",
    },
    {
      icon: "🔧",
      title: "Ongoing Progress",
      label: "Always Evolving",
      description:
        "We continuously update and improve our products based on user feedback and emerging needs.",
    },
  ]

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="services-header">
          <div className="services-tagline">
            <span className="tag">Expertise & Innovation</span>
          </div>
          <h2 className="section-title">What We Build</h2>
          <p className="services-subtitle">
            Crafting digital solutions that combine cutting-edge technology with
            user-centric design to solve real-world problems.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-wrapper">
                <div className="service-icon-bg"></div>
                <span className="service-icon">{service.icon}</span>
              </div>
              <h3>{service.title}</h3>
              <p className="service-label">{service.label}</p>
              <p className="service-description">{service.description}</p>
              <div className="service-connector"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
