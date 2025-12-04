function Navbar({ scrollToSection }) {
	return (
		<nav className='navbar'>
			<div className='container'>
				<div className='nav-content'>
					<a
						href='#'
						className='logo'
						onClick={(e) => {
							e.preventDefault()
							window.scrollTo({ top: 0, behavior: 'smooth' })
						}}>
						WS Code-Online
					</a>
					<div className='nav-links'>
						<a
							href='#services'
							onClick={(e) => {
								e.preventDefault()
								scrollToSection('services')
							}}>
							What We Build
						</a>
						<a
							href='#work'
							onClick={(e) => {
								e.preventDefault()
								scrollToSection('work')
							}}>
							Products
						</a>
						<a
							href='#about'
							onClick={(e) => {
								e.preventDefault()
								scrollToSection('about')
							}}>
							About
						</a>
						<a
							href='#contact'
							onClick={(e) => {
								e.preventDefault()
								scrollToSection('contact')
							}}>
							Contact
						</a>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
