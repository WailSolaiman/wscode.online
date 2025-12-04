import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Privacy() {
	return (
		<>
			<Navbar scrollToSection={() => {}} />
			<section className='legal-page'>
				<div className='container'>
					<div className='legal-content'>
						<Link to='/' className='back-link'>← Back to Home</Link>
						<h1>Privacy Policy</h1>
						<p className='last-updated'>Last updated: {new Date().toLocaleDateString()}</p>
						
						<div className='legal-section'>
							<h2>1. Information We Collect</h2>
							<p>
								We collect information that you provide directly to us, such as when you contact us via email 
								or use our services. This may include your name, email address, and any other information 
								you choose to provide.
							</p>
						</div>

						<div className='legal-section'>
							<h2>2. How We Use Your Information</h2>
							<p>
								We use the information we collect to:
							</p>
							<ul>
								<li>Respond to your inquiries and provide customer support</li>
								<li>Send you updates about our services (with your consent)</li>
								<li>Improve our website and services</li>
							</ul>
						</div>

						<div className='legal-section'>
							<h2>3. Data Protection</h2>
							<p>
								We implement appropriate technical and organizational measures to protect your personal 
								information against unauthorized access, alteration, disclosure, or destruction.
							</p>
						</div>

						<div className='legal-section'>
							<h2>4. Contact Us</h2>
							<p>
								If you have any questions about this Privacy Policy, please contact us at:{' '}
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

export default Privacy

