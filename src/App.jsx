import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Imprint from './pages/Imprint'

function App() {
	return (
		<div className='app'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/privacy' element={<Privacy />} />
				<Route path='/terms' element={<Terms />} />
				<Route path='/imprint' element={<Imprint />} />
			</Routes>
		</div>
	)
}

export default App
