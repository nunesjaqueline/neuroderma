import logo from './logo.svg';
import './App.css';
import {ApiWidgetList} from "./ApiWidgetList";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className={"App-header-item"}>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
          <div className={"App-header-item"}>NEURODERMATITIS</div>


      </header>
        <div className="App-content">
        <div id="api-widgets"><ApiWidgetList></ApiWidgetList></div>
      
        </div>
        <div className="App-footer"><a href={""}>Impressum</a></div>
    </div>
  );
}

export default App;
