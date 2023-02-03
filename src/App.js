import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello! This is my Webapp.io test site.
        </p>
        <a
          className="App-link"
          href="https://github.com/esalminen/webapp-io-pipeline"
          target="_blank"
          rel="noopener noreferrer"
        >
          This link takes you to the GitHub repository.
        </a>
      </header>
    </div>
  );
}

export default App;
