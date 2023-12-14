import React from "react"

export default function Results({ isWaiting, resultTitle, resultText }){
    console.log(isWaiting);

    console.log(resultTitle + " " + resultText  + " - Result from Results.jsx");  
    
    return(
        <div className="popchoice-result" id="popchoice-result">
            <div className="result-preloading-div">
                <img className={isWaiting ? `result-preloading show` : `result-preloading hide`} id="result-preloading" src="assets/preloading.gif"/>
            </div>
            <p className="result-title" id="result-title">{resultTitle}</p>
            <p className="result-text" id="result-text">{resultText}</p>
        </div>
    )
}