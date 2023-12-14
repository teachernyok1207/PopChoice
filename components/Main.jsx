import React from "react";
import Questions from "./Questions";
import Results from "./Results";
import popChoiceIcon from "../assets/PopChoice-Icon.png";

export default function Main({ isStart, getResponse, handleFaveMovieChange, handleMovieTime, handleUserEmotion, isWaiting, disableSubmit, resultTitle, resultText }){
    return (
        <div className="popchoice-contents">
            <div className="popchoice-header">
                <img src={ popChoiceIcon } alt="PopChoice Logo" />
                <h1 className="popchoice-title">PopChoice</h1>
            </div>
            { isStart ? <Questions handleFaveMovieChange={handleFaveMovieChange} handleMovieTime={handleMovieTime} handleUserEmotion={handleUserEmotion} /> : <Results isWaiting={isWaiting} resultTitle={resultTitle} resultText={resultText} />}
            <input type="submit" className={ isWaiting ? "popchoice-button hide" : "popchoice-button show" } value={ isStart ? "Let's Go" : "Go Again"} onClick={ getResponse } disabled={ disableSubmit }/>
        </div>
    )
}