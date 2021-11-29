import React from 'react'
import '../stylesheets/StatKeyboard.css'
import Image from "../assets/keyboard_shell.png"

const StatKeyboard = ({ letter_misses }) => {

    var total = null;
    var max = null;
    const map = JSON.parse(letter_misses);

    const calcTotal = () => {
        total = 0;
        max = Number.MIN_SAFE_INTEGER;
        Object.keys(map).map(el => {
            total += map[el];
            max = (max < map[el]) ? map[el] : max;
        });
        console.log(total);
    }

    const getColor = (key) => {

        const ratio = map[key] / max;

        console.log(ratio, key, max);

        if (ratio === 1) {
            return '#f25c54';
        } else if (ratio >= .50) {
            return '#FFA34E';
        } else if (ratio >= .25) {
            return '#f4845f';
        } else if (ratio >= .10) {
            return '#2dc653';
        } else if (ratio > 0) {
            return '#6ede8a';
        } else {
            return '#92e6a7';
        }

    }

    calcTotal();

    return (
        <div className="keyboard-base">
            <div style={{ backgroundColor: getColor("q") }} className="key" id="q" />
            <div style={{ backgroundColor: getColor("w") }} className="key" id="w" />
            <div style={{ backgroundColor: getColor("e") }} className="key" id="e" />
            <div style={{ backgroundColor: getColor("r") }} className="key" id="r" />
            <div style={{ backgroundColor: getColor("t") }} className="key" id="t" />
            <div style={{ backgroundColor: getColor("y") }} className="key" id="y" />
            <div style={{ backgroundColor: getColor("u") }} className="key" id="u" />
            <div style={{ backgroundColor: getColor("i") }} className="key" id="i" />
            <div style={{ backgroundColor: getColor("o") }} className="key" id="o" />
            <div style={{ backgroundColor: getColor("p") }} className="key" id="p" />
            <div style={{ backgroundColor: getColor("a") }} className="key" id="a" />
            <div style={{ backgroundColor: getColor("s") }} className="key" id="s" />
            <div style={{ backgroundColor: getColor("d") }} className="key" id="d" />
            <div style={{ backgroundColor: getColor("f") }} className="key" id="f" />
            <div style={{ backgroundColor: getColor("g") }} className="key" id="g" />
            <div style={{ backgroundColor: getColor("h") }} className="key" id="h" />
            <div style={{ backgroundColor: getColor("j") }} className="key" id="j" />
            <div style={{ backgroundColor: getColor("k") }} className="key" id="k" />
            <div style={{ backgroundColor: getColor("l") }} className="key" id="l" />
            <div style={{ backgroundColor: getColor("z") }} className="key" id="z" />
            <div style={{ backgroundColor: getColor("x") }} className="key" id="x" />
            <div style={{ backgroundColor: getColor("c") }} className="key" id="c" />
            <div style={{ backgroundColor: getColor("v") }} className="key" id="v" />
            <div style={{ backgroundColor: getColor("b") }} className="key" id="b" />
            <div style={{ backgroundColor: getColor("n") }} className="key" id="n" />
            <div style={{ backgroundColor: getColor("m") }} className="key" id="m" />
            <img className="keyboard-img" src={Image} />
        </div>
    )
}

export default StatKeyboard
