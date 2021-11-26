import React, { useState, useEffect, useRef } from 'react';
import { words } from "./words.json";
import TypingTest from './components/TypingTest';
import SignInModal from './components/SignInModal';
import TitleBar from './components/TitleBar';
import TaskBar from './components/TaskBar';
import './App.css';
import { ThemeProvider } from 'styled-components';
import Account from './components/Account.js';
import OfflineAccount from './components/OfflineAccount';
import Settings from './components/Settings';

function App() {

  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(0);

  const [showSignIn, setShowSignIn] = useState(false);
  const [timerActive, setTimerActive] = useState(false);
  const [inCountdown, setInCountdown] = useState(false)
  const [countdownToggleChecked, setCountdownToggleChecked] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  const[randomWords, setRandomWords] = useState("");    //setting its use state
  var randWordsFunc = require('random-words');          //Must require random-words


  const onKeyPress = (event) => {

    switch (event.key) {

      case "Enter":
        console.log(countdownToggleChecked)
        if (!timerActive) {
          setTimerActive(true);
          if (countdownToggleChecked)
            setInCountdown(true);
          else
            setInCountdown(false);
        }
        break;

      case "Escape":
        console.log("correct");
        break;

      default:
        if (event.key === randomWords[index] && timerActive && !inCountdown) {  //this used to be words[index], but that doesnt work
          setIndex((index) => index + 1);
        }
        break;
    }
  };

  const pageSwitch = (param) => {
    console.log(param)
    switch (param) {
      case 0:
        return <TypingTest
          timerActive={timerActive}
          setTimerActive={setTimerActive}
          inCountdown={inCountdown}
          setInCountdown={setInCountdown}
          setIndex={setIndex}
          words={randomWords}             //Instead of using words, we are trying to use random words. /randomWords={randomWords}I tried creating a new instance, but found out that its not needed
          index={index}
          countdownToggleChecked={countdownToggleChecked}
          setCountdownToggleChecked={setCountdownToggleChecked}
        />
        break;
      case 1:
        return (loggedIn ? <Account /> : <OfflineAccount />);
        break;
        case 4:
          return <Settings loggedIn={loggedIn}/>
          break;
      default:
        return 'poop'
        break;
    }
  }

  const openSignIn = () => {
    setShowSignIn(prev => !prev);
  };

  useEffect(() => {   //using another useEffect so random words does not refresh everytime.

    setRandomWords(randWordsFunc({exactly:25, join:' '}));  //Setting how many words given for the test right here.

  }, [])


  useEffect(() => {
    document.addEventListener('keydown', onKeyPress);

    return () => {
      document.removeEventListener('keydown', onKeyPress);
    };
  }, [index, timerActive, inCountdown, page])

  return (
    <div className="App">
      <div className="window">
        <div className="task-bar">
          <TaskBar page={page} setPage={setPage} />
        </div>
        <div className="landing">
          <TitleBar openSignIn={openSignIn} />
          <div className="main-window">
            {pageSwitch(page)}
            <SignInModal showSignIn={showSignIn} setShowSignIn={setShowSignIn} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;