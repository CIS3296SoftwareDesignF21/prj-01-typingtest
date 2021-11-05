import React, { useState, useEffect, useRef } from 'react';
import { words } from "./words.json";
import TypingTest from './components/TypingTest';
import SignInModal from './components/SignInModal';
import TitleBar from './components/TitleBar';
import TaskBar from './components/TaskBar';
import './App.css';
import { ThemeProvider } from 'styled-components';

function App() {

  const [index, setIndex] = useState(0);
  const [showSignIn, setShowSignIn] = useState(false);
  const [timerActive, setTimerActive] = useState(false);
  const [inCountdown, setInCountdown] = useState(false)

  const onKeyPress = (event) => {

    switch (event.key) {

      case "Enter":
        if (!timerActive) {
          setTimerActive(true);
          setInCountdown(true);
        }
        break;

      case "Escape":
        console.log("correct");
        break;

      default:
        if (event.key === words[index] && timerActive && !inCountdown) {
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
  }, [index, timerActive, inCountdown])

  return (
    <div className="App">
      <div className="landing">
        <div className="task-bar">
          <TaskBar />
        </div>
        <div>
          <TitleBar openSignIn={openSignIn} />
          <div className="main-window">
            <TypingTest
              timerActive={timerActive}
              setTimerActive={setTimerActive}
              inCountdown={inCountdown}
              setInCountdown={setInCountdown}
              setIndex={setIndex}
              words={words}
              index={index}
            />
            <SignInModal showSignIn={showSignIn} setShowSignIn={setShowSignIn} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
