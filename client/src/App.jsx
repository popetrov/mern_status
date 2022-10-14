import { Navbar } from './components/Navbar/Navbar';
import { UseRoutes } from './routes';
import { AuthContext } from './context/AuthContext'
import { useAuth } from './hooks/auth.hook';

import './App.css';
import 'materialize-css/dist/css/materialize.min.css'

function App() {
  const { login, logout, token, userId, isReady } = useAuth()
  const isLogin = !!token
  const route = UseRoutes(isLogin)

  return (
    <AuthContext.Provider value={{login, logout, token, userId, isReady, isLogin}}>
      <div>
          <Navbar/>
          {route}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
