import logo from './logo.svg';
import './App.css';
import { UvIndex } from './uv-index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          NEURODERMATITIS
        </p>

      </header>
      <div>
    <UvIndex lng={48.084} lat={16.422} />
        </div>
    </div>
  );
}

export default App;
