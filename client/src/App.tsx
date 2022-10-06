import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { UseRoutes } from './routes';

import './App.css';
import 'materialize-css/dist/css/materialize.min.css'

function App() {
  const routes = UseRoutes()
  return (
      <div>
        <BrowserRouter>
          <Navbar/>
          {routes}
        </BrowserRouter>
      </div>
  );
}

export default App;
