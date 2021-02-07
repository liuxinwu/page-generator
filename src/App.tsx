import React, { useEffect } from 'react';
import Router from 'router/index'
import './App.css';

function App() {
  useEffect(() => {
    console.log(process.env.REACT_APP_BASE_URL, 'REACT_APP_BASE_URL', process.env)
  }, [])

  return (
    <Router />
  );
}

export default App;
