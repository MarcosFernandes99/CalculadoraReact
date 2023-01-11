import logo from './logo.svg';
import './App.css';
import Calculadora from '../organismos/Calculadora'
import Input from '../moleculas/input';


function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Calculadora></Calculadora>
          <Input></Input>
          <p>
            Meu primeiro projeto
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
    </>
  );
}

export default App;
