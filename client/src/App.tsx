import './App.css';
import 'materialize-css/dist/css/materialize.min.css'

import { Navbar } from './components/Navbar/Navbar';
import { AuthPage } from './pages/AuthPage/AuthPage';

function App() {
  return (
      <div>
        <Navbar/>
        <AuthPage/>
      </div>
  );
}

export default App;
