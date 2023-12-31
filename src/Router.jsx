import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './routes/Home';
import Footer from './components/Footer';


function AppRouter() {
	return (
		<>
			<Navbar />
			<div className='grid'>
				<Router>
					<Routes>
						<Route element={<Home />} path='/' />
					</Routes>
				</Router>
			</div>
			<Footer />
		</>
	)
}

export default AppRouter;
