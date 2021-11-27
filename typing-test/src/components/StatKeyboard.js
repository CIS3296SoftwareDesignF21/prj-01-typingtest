import React from 'react'
import '../stylesheets/StatKeyboard.css'
import Image from "../assets/keyboard_shell.png"

const StatKeyboard = (props) => {

    const getColor = () => {
        return 'white';
    }

    return (
        <div className="keyboard-base">
            <div style={{backgroundColor: getColor()}} className="key" id="q" />
            <div style={{backgroundColor: getColor()}} className="key" id="w" />
            <div style={{backgroundColor: getColor()}} className="key" id="e" />
            <div style={{backgroundColor: getColor()}} className="key" id="r" />
            <div style={{backgroundColor: getColor()}} className="key" id="t" />
            <div style={{backgroundColor: getColor()}} className="key" id="y" />
            <div style={{backgroundColor: getColor()}} className="key" id="u" />
            <div style={{backgroundColor: getColor()}} className="key" id="i" />
            <div style={{backgroundColor: getColor()}} className="key" id="o" />
            <div style={{backgroundColor: getColor()}} className="key" id="p" />
            <div style={{backgroundColor: getColor()}} className="key" id="a" />
            <div style={{backgroundColor: getColor()}} className="key" id="s" />
            <div style={{backgroundColor: getColor()}} className="key" id="d" />
            <div style={{backgroundColor: getColor()}} className="key" id="f" />
            <div style={{backgroundColor: getColor()}} className="key" id="g" />
            <div style={{backgroundColor: getColor()}} className="key" id="h" />
            <div style={{backgroundColor: getColor()}} className="key" id="j" />
            <div style={{backgroundColor: getColor()}} className="key" id="k" />
            <div style={{backgroundColor: getColor()}} className="key" id="l" />
            <div style={{backgroundColor: getColor()}} className="key" id="z" />
            <div style={{backgroundColor: getColor()}} className="key" id="x" />
            <div style={{backgroundColor: getColor()}} className="key" id="c" />
            <div style={{backgroundColor: getColor()}} className="key" id="v" />
            <div style={{backgroundColor: getColor()}} className="key" id="b" />
            <div style={{backgroundColor: getColor()}} className="key" id="n" />
            <div style={{backgroundColor: getColor()}} className="key" id="m" />
            <img className="keyboard-img" src={Image} />
        </div>
    )
}

export default StatKeyboard
