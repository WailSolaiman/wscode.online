import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Work from '../components/Work'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import { scrollToSection } from '../utils/scrollToSection'
import { EMAIL } from '../config/constants'

function Home() {
	return (
		<>
			<Navbar scrollToSection={scrollToSection} />
			<Hero email={EMAIL} />
			<Services />
			<Work />
			<About />
			<Contact email={EMAIL} />
			<Footer />
		</>
	)
}

export default Home

