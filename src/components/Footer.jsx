import { Link } from 'react-router-dom'

function Footer() {
	const currentYear = new Date().getFullYear()

	return (
		<>
			<div className='footer-top'>
				<div className='container'>
					<div className='footer-links'>
						<Link to='/privacy'>Privacy Policy</Link>
						<Link to='/terms'>Terms of Service</Link>
						<Link to='/imprint'>Imprint</Link>
					</div>
				</div>
			</div>
			<footer className='footer'>
				<div className='container'>
					<p>© {currentYear} WS Code-Online — wscode.online</p>
				</div>
			</footer>
		</>
	)
}

export default Footer
