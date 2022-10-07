import { Navbar } from './components/Navbar/Navbar';
import { UseRoutes } from './routes';

import './App.css';
import 'materialize-css/dist/css/materialize.min.css'

function App() {
  const route = UseRoutes(false)
  return (
      <div>
          <Navbar/>
          {route}
      </div>
  );
}

export default App;
