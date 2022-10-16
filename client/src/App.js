import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { AuthPage } from './pages/AuthPage/AuthPage';

function App() {
	return (
		<div className='app'>
			<Navbar />
			<AuthPage />
		</div>
	);
}

export default App;
