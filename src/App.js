import logo from './logo.svg';
import './App.css';
import {ApiWidgetList} from "./ApiWidgetList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          NEURODERMATITIS
        </p>
      </header>
        <div className="App-content">
        <div id="api-widgets"><ApiWidgetList></ApiWidgetList></div>
        </div>
    </div>
  );
}

export default App;
