import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Terms() {
	return (
		<>
			<Navbar scrollToSection={() => {}} />
			<section className='legal-page'>
				<div className='container'>
					<div className='legal-content'>
						<Link to='/' className='back-link'>← Back to Home</Link>
						<h1>Terms of Service</h1>
						<p className='last-updated'>Last updated: {new Date().toLocaleDateString()}</p>
						
						<div className='legal-section'>
							<h2>1. Acceptance of Terms</h2>
							<p>
								By accessing and using this website, you accept and agree to be bound by the terms 
								and provision of this agreement.
							</p>
						</div>

						<div className='legal-section'>
							<h2>2. Use License</h2>
							<p>
								Permission is granted to temporarily view the materials on WS Code-Online's website 
								for personal, non-commercial transitory viewing only.
							</p>
						</div>

						<div className='legal-section'>
							<h2>3. Services</h2>
							<p>
								WS Code-Online provides web development and SaaS services. All services are provided 
								"as is" and subject to individual project agreements.
							</p>
						</div>

						<div className='legal-section'>
							<h2>4. Limitation of Liability</h2>
							<p>
								In no event shall WS Code-Online or its suppliers be liable for any damages arising 
								out of the use or inability to use the materials on this website.
							</p>
						</div>

						<div className='legal-section'>
							<h2>5. Contact</h2>
							<p>
								For questions about these Terms, please contact:{' '}
								<a href='mailto:hello@wscode.online'>hello@wscode.online</a>
							</p>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Terms

