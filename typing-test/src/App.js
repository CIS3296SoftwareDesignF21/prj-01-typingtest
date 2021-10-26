import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [key, setKey] = useState(0)

  const onKeyPress = (event) => {
    console.log(event.keyCode)
    setKey(event.keyCode)
  }

  useEffect(() => {
    document.addEventListener('keydown', onKeyPress);

    return () => {
      document.removeEventListener('keydown', onKeyPress);
    };
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>{String.fromCharCode(key)}</p>
      </header>
    </div>
  );
}

export default App;
