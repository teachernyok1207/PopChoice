import React from "react";
import Questions from "./Questions";
import Results from "./Results";

export default function Main({ isStart, getResponse, handleFaveMovieChange, handleMovieTime, handleUserEmotion, isWaiting, disableSubmit, resultTitle, resultText }){
    return (
        <div className="popchoice-contents">
            <div className="popchoice-header">
                <img src="/assets/PopChoice-Icon.png" alt="PopChoice Logo" />
                <h1 className="popchoice-title">PopChoice</h1>
            </div>
            { isStart ? <Questions handleFaveMovieChange={handleFaveMovieChange} handleMovieTime={handleMovieTime} handleUserEmotion={handleUserEmotion} /> : <Results isWaiting={isWaiting} resultTitle={resultTitle} resultText={resultText} />}
            <input type="submit" className="popchoice-button" id="popchoice-submit" value={ isStart ? "Let's Go" : "Go Again"} onClick={ getResponse } disabled={ disableSubmit }/>
        </div>
    )
}