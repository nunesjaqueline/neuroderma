import logo from './logo.svg';
import './App.css';
import { UvIndex } from './uv-index';
import Button from './Button';
import avocado from './avocado.png';
import coffee from './coffee-beans.png';
import dragonfruit from './dragon-fruit.png';
import grapes from './grapes.png';
import chocolate from './chocolate-bar.png';
import nuts from './nuts.png';

import strawberries from './strawberry.png';

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
        <div className="triggers">
        <div id="meow">
          <Button fruit={avocado}></Button>
          <Button fruit={coffee}></Button>
          <Button fruit={chocolate}></Button>
          <Button fruit={grapes}></Button>
          <Button fruit={strawberries}></Button>
          <Button fruit={dragonfruit}></Button>
          <Button fruit={nuts}></Button>
          </div>
        <div id="meow"></div>
        <div id="meow"></div>
        
        
        <div className="App-footer"><a href={""}>Impressum</a></div>
    </div>
    </div>
  );
  }


export default App;
