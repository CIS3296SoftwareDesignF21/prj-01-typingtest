import React, { useState, useEffect, useReducer } from 'react';
import TypingTest from './components/TypingTest';
import SignInModal from './components/SignInModal';
import TitleBar from './components/TitleBar';
import TaskBar from './components/TaskBar';
import './App.css';
import Account from './components/Account.js';
import OfflineAccount from './components/OfflineAccount';
import Training from './components/Training';
import Settings from './components/Settings.js';
import LoadingSpinner from './components/LoadingSpinner';
import * as api from './utils/apiUtils.js'

function App() {

  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(0);

  const [showSignIn, setShowSignIn] = useState(false);
  const [timerActive, setTimerActive] = useState(false);
  const [inCountdown, setInCountdown] = useState(false)
  const [countdownToggleChecked, setCountdownToggleChecked] = useState(true);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(15);
  const [numEntries, setNumEntries] = useState(0);
  const [loggedIn, setLoggedIn] = useState(false);
  const [WPMTime, setWPMTime] = useState(1);
  const [accountInfo, setAccountInfo] = useState({})

  const delay = ms => new Promise(res => setTimeout(res, ms));
  const onLogin = async (account) => {

    setLoading(true);

    await (delay(4000));

    setLoading(false);

    console.log(account);
    if (account.account_id != -1) {
      setAccountInfo(account);
      setLoggedIn(true);
    } else {
      alert('Account does not exist');
    }

  }

  function logout() {
    setAccountInfo();
    setLoggedIn(false);
  }

  const [randomWords, setRandomWords] = useState("");    //setting its use state
  var randWordsFunc = require('random-words');          //Must require random-words


  function newWords() {
    const words = randWordsFunc({ exactly: 100, join: ' ' });
    const letters = words.length;
    console.log("letter", letters, "words", 100);
    setRandomWords(words);
  }

  //INCREMENTS MISSED LETTER AND UPDATES ACCINFO
  function incrementMissed(letter) {
    var jObj = JSON.parse(accountInfo.letter_misses);
    jObj[letter] = jObj[letter] + 1;
    setAccountInfo({ ...accountInfo, letter_misses: JSON.stringify(jObj) });

  }

  async function updateApiStats(avgWPM, topWpm, total_words, total_time) {

    console.log("Before Update Stats",
      avgWPM,
      topWpm,
      accountInfo)

    api.updateStats(
      avgWPM,
      topWpm,
      accountInfo.letter_misses,
      total_words,
      total_time,
      accountInfo.account_id)
  }

  const updateAccInfo = (numEntries, WPMTime, grossWPM) => {

    if (loggedIn) {

      var totWords = accountInfo.total_words + (numEntries / 5);
      var totTime = accountInfo.total_time + WPMTime;

      setAccountInfo({ ...accountInfo, total_words: totWords, total_time: totTime });

      if ((grossWPM > accountInfo.top_wpm) || (accountInfo.top_wpm == null)) {
        console.log("Gross wpm:", grossWPM);
        setAccountInfo({ ...accountInfo, top_wpm: grossWPM });
      } else {
        grossWPM = accountInfo.top_wpm;
      }

      var avgWPM = (totWords / totTime) * 60;
      setAccountInfo({ ...accountInfo, avg_wpm: avgWPM });

      console.log(avgWPM, totTime, totWords);

      updateApiStats(avgWPM, grossWPM, totWords, totTime);
    }
  }

  const grossWPM = () => {
    var words = (numEntries / 5);
    var wpm = ((words / WPMTime) * 60).toFixed(2);
    return wpm;
  };

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
      //EDITED TO MAKE LETTER MISSES UPDATE
      default:
        if (timerActive && !inCountdown) {
          if (event.key === randomWords[index]) {
            setIndex((index) => index + 1);
          } else if (event.key != randomWords[index] && loggedIn) {
            incrementMissed(randomWords[index]);
            console.log(randomWords[index]);
            console.log(accountInfo.letter_misses);
          }
        }
        break;
    }
  };


  const pageSwitch = (param) => {

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
          newWords={newWords}
          accountInfo={accountInfo}
          setAccountInfo={setAccountInfo}
          loggedIn={loggedIn}
          updateAccInfo={updateAccInfo}
          timer={timer}
          setTimer={setTimer}
          numEntries={numEntries}
          setNumEntries={setNumEntries}
          WPMTime={WPMTime}
          setWPMTime={setWPMTime}
          grossWPM={grossWPM}
        />
        break;
      case 1:
        return (loggedIn ? <Account accountInfo={accountInfo} /> : <OfflineAccount />);
        break;
      case 2:
        return (<Training />)
        break;
      case 4:
        return <Settings accountInfo={accountInfo} logout={logout} loggedIn={loggedIn} />
        break;
      default:
        break;
    }
  }

  const openSignIn = () => {
    setShowSignIn(prev => !prev);
  };

  useEffect(() => {   //using another useEffect so random words does not refresh everytime.

    newWords();  //Setting how many words given for the test right here.

  }, [])

  useEffect(() => {
    document.addEventListener('keydown', onKeyPress);

    if (timer === 0 && !timerActive && loggedIn) {
      console.log("Hey this works");

      updateAccInfo(numEntries, WPMTime, grossWPM());
    }

    return () => {
      document.removeEventListener('keydown', onKeyPress);
    };
  }, [accountInfo, index, timerActive, inCountdown, page])

  return (
    <div className="App">
      <div className="window">
        <div className="task-bar">
          <TaskBar page={page} setPage={setPage} />
        </div>
        <div className="landing">
          <TitleBar loggedIn={loggedIn} openSignIn={openSignIn} />
          <div className="main-window">
            {loading ? <LoadingSpinner /> : null}
            {pageSwitch(page)}
          </div>
        </div>
        <SignInModal onLogin={onLogin} showSignIn={showSignIn} setShowSignIn={setShowSignIn} />
      </div>

    </div>
  );
}

export default App;