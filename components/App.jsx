import React from "react"
import Display from "./Display"
import Buttons from "./Buttons"

var count = 0

export default function App(){
    const [write, setWrite] = React.useState("0")

    if(write.substring(write.length - 2, write.length) === "++" || write.substring(write.length -2, write.length) === "--" ||write.substring(write.length -2, write.length) === "//" || write.substring(write.length -2, write.length) === "%%" || write.substring(write.length -2, write.length) === ".." || write.substring(write.length - 3, write.length) === "***" ){
        setWrite(prevWrite => prevWrite = prevWrite.substring(0, prevWrite.length - 1))
    }
    else if(write.substring(write.length - 2, write.length) === "+-" || write.substring(write.length - 2, write.length) === "+/" || write.substring(write.length - 2, write.length) === "+%" || write.substring(write.length - 2, write.length) === "+."){
        setWrite(prevWrite => prevWrite = prevWrite.replace(prevWrite.substring(prevWrite.length - 2, prevWrite.length - 1), prevWrite.substring(prevWrite.length - 1, prevWrite.length)))
    }
    else if(write.substring(write.length - 2, write.length) === "-+" || write.substring(write.length - 2, write.length) === "-/" || write.substring(write.length - 2, write.length) === "-%" || write.substring(write.length - 2, write.length) === "-."){
        setWrite(prevWrite => prevWrite = prevWrite.replace(prevWrite.substring(prevWrite.length - 2, prevWrite.length - 1), prevWrite.substring(prevWrite.length - 1, prevWrite.length)))
    }
    else if(write.substring(write.length - 2, write.length) === "*-" || write.substring(write.length - 2, write.length) === "*+" || write.substring(write.length - 2, write.length) === "*/" || write.substring(write.length - 2, write.length) === "*%" || write.substring(write.length - 2, write.length) === "*."){
        setWrite(prevWrite => prevWrite = prevWrite.replace(prevWrite.substring(prevWrite.length - 2, prevWrite.length - 1), prevWrite.substring(prevWrite.length - 1, prevWrite.length)))
    }
    else if(write.substring(write.length - 2, write.length) === "/-" || write.substring(write.length - 2, write.length) === "/+" || write.substring(write.length - 2, write.length) === "/%" || write.substring(write.length - 2, write.length) === "/."){
        setWrite(prevWrite => prevWrite = prevWrite.replace(prevWrite.substring(prevWrite.length - 2, prevWrite.length - 1), prevWrite.substring(prevWrite.length - 1, prevWrite.length)))
    }
    else if(write.substring(write.length - 2, write.length) === "%-" || write.substring(write.length - 2, write.length) === "%/" || write.substring(write.length - 2, write.length) === "%+" || write.substring(write.length - 2, write.length) === "%."){
        setWrite(prevWrite => prevWrite = prevWrite.replace(prevWrite.substring(prevWrite.length - 2, prevWrite.length - 1), prevWrite.substring(prevWrite.length - 1, prevWrite.length)))
    }
    else if(write.substring(write.length - 2, write.length) === ".-" || write.substring(write.length - 2, write.length) === "./" || write.substring(write.length - 2, write.length) === ".%" || write.substring(write.length - 2, write.length) === ".+"){
        setWrite(prevWrite => prevWrite = prevWrite.replace(prevWrite.substring(prevWrite.length - 2, prevWrite.length - 1), prevWrite.substring(prevWrite.length - 1, prevWrite.length)))
    }
    else if(write.substring(write.length - 2, write.length) === "-*" || write.substring(write.length - 2, write.length) === "+*" || write.substring(write.length - 2, write.length) === "/*" || write.substring(write.length - 2, write.length) === "%*" || write.substring(write.length - 2, write.length) === ".*"){
        setWrite(prevWrite => prevWrite = prevWrite.replace(prevWrite.substring(prevWrite.length - 2, prevWrite.length -1 ), ""))
    }
    else if(write === "%" || write === "/" || write === "*" || write === "." || write === "+"){
        setWrite("")
    }

    if(write.substring(write.length -1, write.length) === "."){
        count += 1
    }
    if(count >= 2 && write.substring(write.length -1, write.length) === ".") {
        setWrite(prevWrite => prevWrite = prevWrite.substring(0, prevWrite.length - 1))
    }

    write.substring(write.length -1, write.length) === "+" ||
    write.substring(write.length -1, write.length) === "-" ||
    write.substring(write.length -1, write.length) === "*" ||
    write.substring(write.length -1, write.length) === "/" ||
    write.substring(write.length -1, write.length) === "%" ? count = 0 : count

    console.log(count)
    function add(v){
        write.substring(write.length -2, write.length) === "+0" && v != "." ? setWrite(prevWrite => prevWrite = prevWrite.substring(0, prevWrite.length -1)) : write
        write.substring(write.length -2, write.length) === "-0" && v != "." ? setWrite(prevWrite => prevWrite = prevWrite.substring(0, prevWrite.length -1)) : write
        write.substring(write.length -2, write.length) === "*0" && v != "." ? setWrite(prevWrite => prevWrite = prevWrite.substring(0, prevWrite.length -1)) : write
        write.substring(write.length -2, write.length) === "/0" && v != "." ? setWrite(prevWrite => prevWrite = prevWrite.substring(0, prevWrite.length -1)) : write
        write.substring(write.length -2, write.length) === "%0" && v != "." ? setWrite(prevWrite => prevWrite = prevWrite.substring(0, prevWrite.length -1)) : write

        if(write === "0" && v != "."){
            setWrite(prevWrite => prevWrite = v)
        }
        else{
            setWrite(prevWrite => prevWrite += v)
        }
    }
    function exe(){
        write.substring(write.length - 1, write.length) === "+" || write.substring(write.length - 1, write.length) === "-" || write.substring(write.length - 1, write.length) === "*" || write.substring(write.length - 1, write.length) === "/" || write.substring(write.length - 1, write.length) === "." || write.substring(write.length - 1, write.length) === "%" ? setWrite(prevWrite => prevWrite = prevWrite.substring(0, write.length -1)) : setWrite(prevWrite => prevWrite = String(eval(prevWrite)))
    }
    function clear(){
        setWrite("")
        count = 0
    }
    function deleted(){
        setWrite(prevWrite => prevWrite = prevWrite.substring(0, prevWrite.length - 1))
    }

    return(
        <div id="calculator">
            <Display pip = {write}/>
            <Buttons handleClick = {add} execute={exe} clean={clear} delete={deleted}/>
        </div>
    )
}