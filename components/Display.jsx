import React from "react"

export default function Display(promps){
    return(
        <div id="display">
            <input type="text" placeholder="0" value={promps.pip} readOnly/>
        </div>
    )
}