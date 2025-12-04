function Services() {
	const services = [
		{
			icon: '⚛️',
			title: 'Custom Web Apps',
			label: 'React/Next.js',
			description:
				'Fast, scalable applications built with modern frameworks and best practices.',
		},
		{
			icon: '🚀',
			title: 'SaaS Products',
			label: 'Fast MVPs',
			description:
				'From idea to launch in weeks, not months. Built to scale from day one.',
		},
		{
			icon: '📝',
			title: 'WordPress Solutions',
			label: 'Plugins & custom sites',
			description:
				'Custom functionality and tailored websites that fit your exact needs.',
		},
	]

	return (
		<section id='services' className='services'>
			<div className='container'>
				<h2 className='section-title'>Services</h2>
				<div className='services-grid'>
					{services.map((service, index) => (
						<div key={index} className='service-card'>
							<div className='service-icon'>{service.icon}</div>
							<h3>{service.title}</h3>
							<p className='service-label'>{service.label}</p>
							<p className='service-description'>
								{service.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Services
