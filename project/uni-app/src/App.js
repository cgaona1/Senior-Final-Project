import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Body from './components/Body';


function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <body className="App-header">
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
        <Body />
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
