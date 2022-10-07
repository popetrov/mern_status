import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { UseRoutes } from './routes';

import './App.css';
import 'materialize-css/dist/css/materialize.min.css'

function App() {
  const route = UseRoutes()
  return (
      <div>
        <BrowserRouter>
          <Navbar/>
          {route}
        </BrowserRouter>
      </div>
  );
}

export default App;
