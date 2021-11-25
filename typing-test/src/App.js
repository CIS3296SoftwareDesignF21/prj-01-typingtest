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
import { colors } from '@react-spring/shared';
import Training from './components/Training';

function App() {

  const [index, setIndex] = useState(0);
  const [page, setPage] = useState(0);

  const [showSignIn, setShowSignIn] = useState(false);
  const [timerActive, setTimerActive] = useState(false);
  const [inCountdown, setInCountdown] = useState(false)
  const [countdownToggleChecked, setCountdownToggleChecked] = useState(true);
  const [testing, setTest] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);
  const [accountInfo, setAccountInfo] = useState([
    {id: ""},
    {display_name: ""},
    {user_email: ""},
    {password: ""},
    {photo: ""}])

  const onLogin = ({id, display_name, user_email, password, photo}) => {
    setAccountInfo(id, display_name, user_email, password, photo);
    setLoggedIn(true);
  }

  function logout(){
    setAccountInfo("","","","","");
    setLoggedIn(false);
  }

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
        if (event.key === words[index] && timerActive && !inCountdown) {
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
          words={words}
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

        return (<div>
          <button onClick={test} />
          <div style={{ color: "white" }} >
            {testing}
          </div>
        </div>)
        break;
    }
  }

  const request = require('postman-request');

  const options = {
    url: 'https://9x38qblue2.execute-api.us-east-1.amazonaws.com/dev/getaccbyid?accId=10',
  };

  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      setTest(body);
      const info = JSON.parse(body);
      console.log(info);
    }
  }

  const test = () => {
    request(options, callback);
  }

  const openSignIn = () => {
    setShowSignIn(prev => !prev);
  };

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
