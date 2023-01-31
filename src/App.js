import React from "react";
import "./App.css";
import { useState } from "react";

function App() {
    const [expression, setExpression] = useState("0");
    const [result, setResult] = useState("0");

    const handleNumber = (symbol) => {
      if (expression.length === 20 || expression === "Digit Limit Met") {
        setExpression("Digit Limit Met");
        return;
      }
      if (expression === "0") {
          setExpression(symbol.target.value);
      } else {
          setExpression(expression + symbol.target.value);
      }
    };

    const handleClear = () => {
        setExpression("0");
        setResult("0");
    };

    const handleEquals = () => {
        if (expression === "Digit Limit Met") {
          return;
        }
        const lastChar = expression[expression.length - 1];
        if (["+", "-", "*", "/"].includes(lastChar)) {
            setExpression(expression.slice(0, expression.length - 1));
            setResult(expression.slice(0, expression.length - 1));
        } else {
            try {
              const evaluated = Math.round(eval(expression)*10000) / 10000;
              setExpression(evaluated.toString());
              setResult(evaluated.toString());
            } catch (error) {
              setResult('Error');
            }
        }
    };

    const handleDecimal = () => {
        if (expression === "Digit Limit Met") {
          return;
        }
        const operators = ["+", "-", "*", "/"];
        let lastSymbol = "";
        if (expression === "0") {
          setExpression("0.");
          return;
        }
        for (let i = expression.length - 1; i >= 0; i--) {
          if (operators.includes(expression[i])) break;
          lastSymbol = expression[i] + lastSymbol;
        }
        if (!lastSymbol.includes(".") && !operators.includes(expression[expression.length - 1])) {
          setExpression(expression + ".");
        } else if (operators.includes(expression[expression.length - 1])) {
          setExpression(expression + "0.");
        }
    };

    const handleOperator = (symbol) => {
        if (expression === "Digit Limit Met") {
          return;
        }
        const lastSymbol = expression[expression.length - 1];
        const operators = ["+", "-", "/", "*"];
        if (expression.length > 1 && operators.includes(expression[expression.length - 2]) && operators.includes(lastSymbol)) {
          setExpression(expression.slice(0, expression.length - 2) + symbol.target.value);
          return;
        }
        if (lastSymbol === "-" && symbol.target.value === "-") {
          setExpression(expression.slice(0, expression.length - 1) + "+");
          return;
        }
        if (operators.includes(lastSymbol) && symbol.target.value === "-") {
          setExpression(expression + symbol.target.value);
          return;
        }
        if (!operators.includes(lastSymbol)) {
          setExpression(expression + symbol.target.value);
          return;
        }
        if (["+", "*", "/"].includes(lastSymbol)) {
          setExpression(expression.slice(0, expression.length - 1) + symbol.target.value);
          return;
        }
    };

    return (
        <div id="app">
            <div id="calculator">
                <div id="displayAndResultWrapper">
                    <div id="display">{expression}</div>
                    <div id="result">{result}</div>
                </div>
                <div id="symbolsWrapper">
                  <div>
                      <button class="bigger" id="clear" onClick={handleClear}>AC</button>
                      <button class="bigger" id="equals" onClick={handleEquals}>=</button>
                  </div>
                  <div>
                      <button id="seven" value="7" onClick={handleNumber}>7</button>
                      <button id="eight" value="8" onClick={handleNumber}>8</button>
                      <button id="nine" value="9" onClick={handleNumber}>9</button>
                      <button id="divide" value="/" onClick={handleOperator}>/</button>
                  </div>
                  <div>
                      <button id="four" value="4" onClick={handleNumber}>4</button>
                      <button id="five" value="5" onClick={handleNumber}>5</button>
                      <button id="six" value="6" onClick={handleNumber}>6</button>
                      <button id="multiply" value="*" onClick={handleOperator}>*</button>
                  </div>
                  <div>
                      <button id="one" value="1" onClick={handleNumber}>1</button>
                      <button id="two" value="2" onClick={handleNumber}>2</button>
                      <button id="three" value="3" onClick={handleNumber}>3</button>
                      <button id="subtract" value="-" onClick={handleOperator}>-</button>
                  </div>
                  <div>
                      <button class="bigger" id="zero" value="0" onClick={handleNumber}>0</button>
                      <button id="decimal" onClick={handleDecimal}>.</button>
                      <button id="add" value="+" onClick={handleOperator}>+</button>
                  </div>
                </div>
            </div>
        </div>
    );
}

export default App;