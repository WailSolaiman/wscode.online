function Hero({ email }) {
	return (
		<section className='hero'>
			<div className='container'>
				<div className='hero-content'>
					<h1 className='hero-title'>Building SaaS products that solve real problems.</h1>
					<p className='hero-subtitle'>
						WS Code-Online develops and operates web applications. We create tools that make life easier, starting with KlarDesk.
					</p>
					<div className='hero-buttons'>
						<a
							href='https://klardesk.de'
							target='_blank'
							rel='noopener noreferrer'
							className='btn btn-primary'>
							View KlarDesk
						</a>
						<a
							href={`mailto:${email}`}
							className='btn btn-secondary'>
							Contact Us
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
