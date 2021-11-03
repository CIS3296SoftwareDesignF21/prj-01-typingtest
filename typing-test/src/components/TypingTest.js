import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import "../stylesheets/TypingTest.css"

const TypingTest = (props) => {

    const [staticCountdown, setStaticCountdown] = useState(15);
    const [countdown, setCountdown] = useState(15);

    function useInterval(callback, delay) {
        const savedCallback = useRef();

        // Remember the latest callback.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            function tick() {
                savedCallback.current();
            }
            if (delay !== null) {
                let id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [delay]);
    }

    const setCount = (count) => {
        if (!props.timerActive) {
            setStaticCountdown(count);
            setCountdown(count);
        }
    };

    useInterval(() => {
        if (countdown === 0) {
            props.setTimerActive(false);
            props.setIndex(0);
            setCountdown(staticCountdown);
        } else {
            setCountdown(countdown => countdown - 1);
        }
    }, props.timerActive ? 1000 : null);

    return (
        <div className="container">
            <div className="timer-wrapper">
                <div style={props.timerActive ? { color: '#50E3C2', textShadow: ' 0px 0px 9px #50E3C2' } : {color: '#75749C'}} className="countdown">
                    {countdown}s
                </div>
                <div className="timer-select">
                    <div onClick={() => setCount(15)} style={staticCountdown === 15 ? { color: '#50E3C2', textShadow: ' 0px 0px 9px #50E3C2' } : null} className="time-button">
                        15
                    </div>
                    <div onClick={() => setCount(30)} style={staticCountdown === 30 ? { color: '#50E3C2', textShadow: ' 0px 0px 9px #50E3C2' } : null} className="time-button">
                        30
                    </div>
                    <div onClick={() => setCount(45)} style={staticCountdown === 45 ? { color: '#50E3C2', textShadow: ' 0px 0px 9px #50E3C2' } : null} className="time-button">
                        45
                    </div>
                </div>
            </div>

            <div className="word-base">
                {props.timerActive ? null : <div className="start-signal">
                    Press Enter To Start
                </div>}
                <div className="test-text">
                    {props.words.split("").map(function (char, idx) {
                        return (
                            <span key={idx}
                                className={(idx < props.index) ? 'right' : 'default'}
                            >
                                {char}
                            </span>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default TypingTest;