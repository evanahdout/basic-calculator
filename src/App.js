import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
    const [display, setDisplay] = useState("0");

    function handleClear() {
        setDisplay("")
    }

    function handleSymbol(symbol) {
        setDisplay(symbol);
    }

    function handleAdd() {

    }

    function handleEquals() {

    }


    return (
        <div id="Application">
            <div id="display">{display}</div>
            <div id="symbols">
                <button id="equals" onClick="">=</button>
                <button id="zero" onClick={handleSymbol(0)}>0</button>
                <button id="one">1</button>
                <button id="two">2</button>
                <button id="three">3</button>
                <button id="four">4</button>
                <button id="five">5</button>
                <button id="six">6</button>
                <button id="seven">7</button>
                <button id="eight">8</button>
                <button id="nine">9</button>
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

