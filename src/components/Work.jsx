function Work() {
	const projects = [
		{
			title: 'Project One',
			description: 'Description of the first project',
		},
		{
			title: 'Project Two',
			description: 'Description of the second project',
		},
		{
			title: 'Project Three',
			description: 'Description of the third project',
		},
	]

	return (
		<section id='work' className='work'>
			<div className='container'>
				<h2 className='section-title'>Work</h2>
				<div className='work-grid'>
					{projects.map((project, index) => (
						<div key={index} className='work-card'>
							<div className='coming-soon'>Coming soon</div>
							<h3>{project.title}</h3>
							<p>{project.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Work
