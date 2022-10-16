import { Navbar } from './components/Navbar/Navbar';
import { AuthContext } from './context/AuthContext';
import { useAuth } from './hooks/auth.hook';

import { BrowserRouter } from 'react-router-dom';
import { useRoutes } from './routes';

import './App.css';

function App() {
	const { login, logout, token, userId, isReady } = useAuth();
	const isLogin = !!token;
	const routes = useRoutes(isLogin);

	return (
		<AuthContext.Provider
			value={{ login, logout, token, userId, isReady, isLogin }}
		>
			<BrowserRouter>
				<Navbar />
				{routes}
			</BrowserRouter>
		</AuthContext.Provider>
	);
}

export default App;
