import React from "react"
import styles from "../Class"

export default function Buttons(props){
    const array = styles.map(style => {
        if(style.class === "keys--sign"){
            return <input type="button" key={style.id} className={style.class} value={style.keys} onClick={()=>{props.handleClick(style.keys)}}></input>
        }
        else if(style.class === "keys--clear"){
            return <input type="button" key={style.id} className={style.class} value={style.keys} onClick={props.clean}></input>
        }
        else if(style.class === "keys--delete"){
            return <input type="button" key={style.id} className={style.class} value={style.keys} onClick={props.delete}></input>
        }
        else if(style.class === "keys--number"){
            return <input type="button" key={style.id} className={style.class} value={style.keys} onClick={()=>{props.handleClick(style.keys)}}></input>
        }
        else{
            return <input type="button" key={style.id} className={style.class} value={style.keys} onClick={props.execute}></input>
        }
    })

    return(
        <div id="keys">
            {array}
        </div>
        
    )
}