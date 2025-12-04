function Hero({ email }) {
	return (
		<section className='hero'>
			<div className='container'>
				<div className='hero-content'>
					<h1 className='hero-title'>Fast. Clean. Shipped.</h1>
					<p className='hero-subtitle'>
						I build web apps and SaaS products that work. React,
						Next.js, WordPress—delivered on time, every time.
					</p>
					<div className='hero-buttons'>
						<a
							href='https://wailsolaiman.com'
							target='_blank'
							rel='noopener noreferrer'
							className='btn btn-primary'>
							View Portfolio
						</a>
						<a
							href={`mailto:${email}`}
							className='btn btn-secondary'>
							Email Me
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Hero
