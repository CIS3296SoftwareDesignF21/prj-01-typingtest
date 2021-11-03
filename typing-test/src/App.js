import React, { useState, useEffect } from 'react';
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
  // const [timerState, setTimerState] = useState(false);

  const childFunc = React.useRef(null);

  const onKeyPress = (event) => {
    console.log("Current key: ", event.key);
    console.log(timerActive);

    switch (event.key) {

      case "Enter":
        if (!timerActive) {
          setTimerActive(true);
        }
        break;

      case "Backspace":
        break;

      default:
        if (event.key === words[index] && timerActive) {
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
  }, [index, timerActive])

  return (
    <div className="App">

      <div className="landing">
        <div className="task-bar">
          <TaskBar />
        </div>
        <div>
          <TitleBar openSignIn={openSignIn} />
          <div className="main-window">
            {/* <Timer /> */}
            <TypingTest
              timerActive={timerActive}
              setTimerActive={setTimerActive}
              setIndex={setIndex}
              childFunc={childFunc}
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
