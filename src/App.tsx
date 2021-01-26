import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Dialog from 'components/common/dialog/index'

function App() {
  useEffect(() => {
    console.log(process.env.REACT_APP_BASE_URL, 'REACT_APP_BASE_URL', process.env)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Dialog />
      </header>
    </div>
  );
}

export default App;
