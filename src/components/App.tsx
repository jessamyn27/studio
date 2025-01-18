import { Routes, Route } from 'react-router-dom';
import '../../App.css';
import Home from './pages/Home';

function App() {
	return (
		<div className="app">
			<Routes>
				{/* pages */}
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;

