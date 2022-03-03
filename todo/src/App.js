import logo from './logo.svg';
import './App.css';

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
          Hello
        </p> 
        <p>
          {val}
        </p>
        <p>
          {9}
        </p>
        <p>
          {10+3}
        </p>
        <p>
          {flag && 'yes, right'}
        </p>
        <p>
          {flag ? 'yes, right' : 'mistake'}
          <p>
            {undefined}
            {null}
            {false}
            {true}
          </p>
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
