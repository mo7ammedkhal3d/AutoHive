import logo from './logo.svg';
import './App.css';
import ExpenceItem from './components/ExpenseItem';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>this is also visiable!</p>
        <p>Start to learn more about react so let's go a head and alowas ready 😊❤️</p>
        <ExpenceItem></ExpenceItem>
        <ExpenceItem></ExpenceItem>
        <ExpenceItem></ExpenceItem>
      </header>
    </div>
  );
}

export default App;
