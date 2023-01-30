import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
    const [expression, setExpression] = useState("");
    const [result, setResult] = useState("");

    const handleNumber = (symbol) => {
        if (expression === "0") {
            setExpression(symbol.target.value);
        } else {
            setExpression(expression + symbol.target.value);
        }
    }

    const handleClear = () => {
        setExpression("");
        setResult("");
    }

    const handleEquals = () => {
        try {
            setResult(eval(expression));
        } catch(error) {
            setResult("Error");
        }
        setResult(eval(expression));
    }

    const handleDecimal = () => {
        if (!display.includes(".")) {
            setDisplay(display + ".");
        } 
    }

    const handleOperator = (symbol) => {
        setExpression(expression + symbol.target.value);
    }

    return (
        <div id="Application">
            <div id="display">{expression}</div>
            <div id="result">{result}</div>
            <div id="symbols">
                <button id="equals" onClick={handleEquals}>=</button>
                <button id="zero" value="0" onClick={handleNumber}>0</button>
                <button id="one" value="1" onClick={handleNumber}>1</button>
                <button id="two" value="2" onClick={handleNumber}>2</button>
                <button id="three" value="3" onClick={handleNumber}>3</button>
                <button id="four" value="4" onClick={handleNumber}>4</button>
                <button id="five" value="5" onClick={handleNumber}>5</button>
                <button id="six" value="6" onClick={handleNumber}>6</button>
                <button id="seven" value="7" onClick={handleNumber}>7</button>
                <button id="eight" value="8" onClick={handleNumber}>8</button>
                <button id="nine" value="9" onClick={handleNumber}>9</button>
                <button id="add" value="+" onClick={handleOperator}>+</button>
                <button id="subtract" value="-" onClick={handleOperator}>-</button>
                <button id="multiply" value="*" onClick={handleOperator}>*</button>
                <button id="divide" value="/" onClick={handleOperator}>/</button>
                <button id="decimal" onClick={handleDecimal}>.</button>
                <button id="clear" onClick={handleClear}>AC</button>
            </div>
        </div>
    )
}

export default App;

