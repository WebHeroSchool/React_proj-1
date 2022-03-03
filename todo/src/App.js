import logo from './logo.svg';
import './App.css';
import {count, lenght} from './number.js'

const flag = true;
const val = 777;


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. 
        </p>
       <p style={{
        color: 'blue'}}>
          count*lenght = {count*lenght}
        </p>              
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
