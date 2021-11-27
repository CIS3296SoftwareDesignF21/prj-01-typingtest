import React, { useState, useEffect, useRef } from 'react';
import { words } from "./words.json";
import TypingTest from './components/TypingTest';
import SignInModal from './components/SignInModal';
import TitleBar from './components/TitleBar';
import TaskBar from './components/TaskBar';
import './App.css';
import Account from './components/Account.js';
import OfflineAccount from './components/OfflineAccount';
import Training from './components/Training';
import Settings from './components/Settings.js';

function App() {

  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(0);

  const [showSignIn, setShowSignIn] = useState(false);
  const [timerActive, setTimerActive] = useState(false);
  const [inCountdown, setInCountdown] = useState(false);
  const [countdownToggleChecked, setCountdownToggleChecked] = useState(true);
  const [testing, setTest] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);
  const [accountInfo, setAccountInfo] = useState([
    {id: ""},
    {display_name: ""},
    {user_email: ""},
    {password: ""},
    {photo: ""}
  ]);
  
  const [avgWPM, setAvgWPM] = useState(0);
  const [topWPM, setTopWPM] = useState(0);
  const [totalWords, setTotalWords] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [letterMisses, setLetterMisses] = useState([]);

  const onLogin = (account) => {

    // Need to fix async issue when fetching from api
    // need to figure out way to wait for response before this function call

    // if(account.account_id != -1){
      setAccountInfo(account);
      setLoggedIn(true);
    // }else{
    //   alert('Account does not exist');
    // }
  }

  function logout(){
    setAccountInfo("","","","","");
    setLoggedIn(false);
  }

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
      case 2:
        return (<Training />)
        break;
      case 4:
        return <Settings logout={logout} loggedIn={loggedIn} />
        break;
      default:
        break;
    }
  }

<<<<<<< HEAD
  const request = require('postman-request');

  const options = {
    headers: {'Content-Type' : 'application/x-www-form-urlencoded'},
    url: 'https://9x38qblue2.execute-api.us-east-1.amazonaws.com/dev/signup',
    body: JSON.stringify( {
      "dispName": "fff",
      "email": "test56@website.com",
      "pw": "2222"
    })
  
  };

  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      setTest(body);
      const info = body;
      console.log(info);
    }
  }

  const test = () => {
   // await new Promise(resolve => setTimeout(resolve, 3000));
    console.log(options);
    request.post(options, callback);
    console.log(options);
  }
=======
  const openSignIn = () => {
    setShowSignIn(prev => !prev);
  };

  useEffect(() => {   //using another useEffect so random words does not refresh everytime.

    setRandomWords(randWordsFunc({exactly:45, join:' '}));  //Setting how many words given for the test right here.

  }, [])
>>>>>>> 6d40632d4210064ac093711827dce64b7fd28fce


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
          <TitleBar loggedIn={loggedIn} openSignIn={openSignIn} />
          <div className="main-window">
            {pageSwitch(page)}
          </div>
        </div>
        <SignInModal onLogin={onLogin} showSignIn={showSignIn} setShowSignIn={setShowSignIn} />
      </div>
      
    </div>
  );
}

export default App;