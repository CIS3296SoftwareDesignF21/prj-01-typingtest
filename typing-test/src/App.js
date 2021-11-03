import React, { useState, useEffect } from 'react';
import { words } from "./words.json";
import TypingTest from './components/TypingTest';
import SignInModal from './components/SignInModal';
import TitleBar from './components/TitleBar';
import './App.css';
import { ThemeProvider } from 'styled-components';

function App() {

  const [index, setIndex] = useState(0);
  const [showSignIn, setShowSignIn] = useState(false);

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

  const openSignIn = () => {
    setShowSignIn(prev => !prev);
  };

  useEffect(() => {
    document.addEventListener('keydown', onKeyPress);

    return () => {
      document.removeEventListener('keydown', onKeyPress);
    };
  }, [index])

  return (
    <div className="App">
      <TitleBar openSignIn={openSignIn} />
      <header className="App-header">
      </header>
      <div className="landing">
        <TypingTest words={words} index={index}/>
        <button onClick = {() => setIndex(0)}>reset</button>
        <SignInModal showSignIn={showSignIn} setShowSignIn={setShowSignIn} />
      </div>
    </div>
  );
}

export default App;
