import React from "react"

export default function App(){
    var val = document.getElementById("inp")

    function add(v){
        val.value += v
    }

    function exe(){
        val.value = eval(val.value)
    }

    function clear(){
        val.value = ""
    }
    function del(){
        val.value = val.value.substr(0, val.value.length -1)
    }
    return(
        <div id="calculator">
            <div className="calculator-display"><input type="text" id="inp" placeholder="0" /></div>
            <div className="calculator-keys">
                <button onClick={() => add("+")} className="key--operator">+</button>
                <button onClick={() => add("-")} className="key--operator">-</button>
                <button onClick={() => add("*")} className="key--operator">*</button>
                <button onClick={() => add("/")} className="key--operator">/</button>
                <button onClick={() => add(7)}>7</button>
                <button onClick={() => add(8)}>8</button>
                <button onClick={() => add(9)}>9</button>
                <button onClick={del} className="key--operator">⌫</button>
                <button onClick={() => add(4)}>4</button>
                <button onClick={() => add(5)}>5</button>
                <button onClick={() => add(6)}>6</button>
                <button onClick={() => add(1)}>1</button>
                <button onClick={() => add(2)}>2</button>
                <button onClick={() => add(3)}>3</button>
                <button onClick={() => add(".")}>.</button>
                <button onClick={() => add(0)} className="zero">0</button>
                <button onClick={exe} className="key--equal">=</button>
                <button onClick={clear} data-action="clear">AC</button>
            </div>
        </div>
    )
}