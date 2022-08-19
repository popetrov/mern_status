import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Routs from './routes';
import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/auth.hook';

import 'materialize-css';

function App() {
	const { login, logout, token, userId, isReady } = useAuth();
	const isLogin = !!token;
	const routes = Routs(isLogin);

	return (
		<AuthContext.Provider
			value={{ login, logout, token, userId, isReady, isLogin }}
		>
			<div className='App'>
				<BrowserRouter>
					<Navbar />
					{routes}
				</BrowserRouter>
			</div>
		</AuthContext.Provider>
	);
}

export default App;
