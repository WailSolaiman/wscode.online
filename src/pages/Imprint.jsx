import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Imprint() {
	return (
		<>
			<Navbar scrollToSection={() => {}} />
			<section className='legal-page'>
				<div className='container'>
					<div className='legal-content'>
						<Link to='/' className='back-link'>← Back to Home</Link>
						<h1>Imprint</h1>
						
						<div className='legal-section'>
							<h2>Information according to § 5 TMG</h2>
							<p>
								<strong>Wail Solaiman</strong>
								<br />
								WS Code-Online
								<br />
								Freelance Web Developer
							</p>
						</div>

						<div className='legal-section'>
							<h2>Contact</h2>
							<p>
								Email: <a href='mailto:hello@wscode.online'>hello@wscode.online</a>
								<br />
								Website: <a href='https://wscode.online' target='_blank' rel='noopener noreferrer'>wscode.online</a>
							</p>
						</div>

						<div className='legal-section'>
							<h2>Responsible for content</h2>
							<p>
								Wail Solaiman
								<br />
								Germany
							</p>
						</div>

						<div className='legal-section'>
							<h2>Disclaimer</h2>
							<p>
								The contents of our pages have been created with the greatest care. However, we cannot 
								guarantee the contents' accuracy, completeness or topicality. As service providers, 
								we are liable for own contents of these websites according to Sec. 7, paragraph 1 
								German Telemedia Act (TMG).
							</p>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	)
}

export default Imprint

