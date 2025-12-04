function Work() {
	const projects = [
		{
			title: 'Wail Solaiman Portfolio',
			description: 'Personal portfolio website showcasing my work, skills, and projects. Built with modern web technologies.',
			url: 'https://wailsolaiman.com',
			image: '/images/ws-banner.jpg',
		},
		{
			title: 'KlarDesk',
			description: 'SaaS application for translating German official office documents to Arabic. Streamlining communication for Arabic speakers in Germany.',
			url: 'https://klardesk.de',
			image: '/images/klardesk-banner.jpg',
		},
	]

	return (
		<section id='work' className='work'>
			<div className='container'>
				<h2 className='section-title'>Work</h2>
				<div className='work-grid'>
					{projects.map((project, index) => (
						<a
							key={index}
							href={project.url}
							target='_blank'
							rel='noopener noreferrer'
							className='work-card'>
							<div className='work-image'>
								<img src={project.image} alt={project.title} />
							</div>
							<h3>{project.title}</h3>
							<p>{project.description}</p>
						</a>
					))}
				</div>
			</div>
		</section>
	)
}

export default Work
