import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
    const [display, setDisplay] = useState("0");

    function handleClear() {
        setDisplay("0");
    }

    function handleEquals() {

    }

// problem: 

    function handleNumber(symbol) {
        if (display === '0') {
            setDisplay(symbol);
          } else {
            setDisplay(display + symbol);
          }
        };

    function handleDecimal() {
        
    }

    function handleOperator(symbol) {

    }


    return (
        <div id="Application">
            <div id="display">{display}</div>
            <div id="symbols">
                <button id="equals" onClick="">=</button>
                <button id="zero" onClick={() => handleNumber("0")}>0</button>
                <button id="one" onClick={() => handleNumber("1")}>1</button>
                <button id="two" onClick={() => handleNumber("2")}>2</button>
                <button id="three" onClick={() => handleNumber("3")}>3</button>
                <button id="four" onClick={() => handleNumber("4")}>4</button>
                <button id="five" onClick={() => handleNumber("5")}>5</button>
                <button id="six" onClick={() => handleNumber("6")}>6</button>
                <button id="seven" onClick={() => handleNumber("7")}>7</button>
                <button id="eight" onClick={() => handleNumber("8")}>8</button>
                <button id="nine" onClick={() => handleNumber("9")}>9</button>
                <button id="add">+</button>
                <button id="subtract">-</button>
                <button id="multiply">*</button>
                <button id="divide">/</button>
                <button id="decimal">.</button>
                <button id="clear" onClick={handleClear}>AC</button>
            </div>
        </div>
    )
}

export default App;

