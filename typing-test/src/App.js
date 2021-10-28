import React, { useState, useEffect } from 'react';
import { words } from "./words.json";
import TypingTest from './components/TypingTest';
import './App.css';

function App() {

  const [index, setIndex] = useState(0);

  const onKeyPress = (event) => {
    console.log("Current key: ", event.key);

    switch (event.key) {
			
      // case " ":
			// 	break;

      case "Backspace":
        break;

			default:
        if(event.key === words[index]){
          setIndex((index) => index + 1);
        }
				break;
		}
	};

  useEffect(() => {
    document.addEventListener('keydown', onKeyPress);

    return () => {
      document.removeEventListener('keydown', onKeyPress);
    };
  }, [index])

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="landing">
        <TypingTest words={words} index={index}/>
        <button onClick = {() => setIndex(0)}>reset</button>
      </div>
    </div>
  );
}

export default App;
