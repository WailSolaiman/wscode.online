function Work() {
  const products = [
    {
      title: "KlarDesk",
      description:
        "SaaS application for translating German official office documents to Arabic. Streamlining communication for Arabic speakers in Germany.",
      url: "https://klardesk.de",
      image: "/images/klardesk-banner.jpg",
    },
    {
      title: "Micro SaaS Arabic",
      description:
        "A platform dedicated to helping Arabic speakers build and grow their own micro SaaS businesses. Providing resources, tools, and community support for Arabic entrepreneurs in the tech industry.",
      url: "https://microsaasarabic.com",
      image: "/images/msa-banner.jpg",
    },
    {
      title: "More Apps Coming Soon",
      description:
        "We're constantly working on new products to solve everyday challenges. Stay tuned for more innovative solutions.",
      url: "#",
      image: "/images/apps-banner.jpg",
      comingSoon: true,
    },
  ]

  return (
    <section id="work" className="work">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <div className="work-grid">
          {products.map((product, index) => (
            <a
              key={index}
              href={product.url}
              target={product.comingSoon ? "_self" : "_blank"}
              rel={product.comingSoon ? "" : "noopener noreferrer"}
              className="work-card"
              onClick={
                product.comingSoon ? (e) => e.preventDefault() : undefined
              }
            >
              {product.comingSoon && (
                <div className="coming-soon">Coming soon</div>
              )}
              <div className="work-image">
                <img src={product.image} alt={product.title} />
              </div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
