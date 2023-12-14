import React from "react"

export default function Questions({ handleFaveMovieChange, handleMovieTime, handleUserEmotion }){
    return(
        <form>
            <div className="popchoice-body" id="popchoice-body">    
                <div className="popchoice-questionnaires">
                    <p className="popchoice-question">What’s your favorite movie and why?</p>
                    <textarea className="popchoice-response" id="popchoice-fave-movie" onChange={handleFaveMovieChange} required></textarea>
                </div>
                
                <div className="popchoice-questionnaires">
                    <p className="popchoice-question">Are you in the mood for something new or a classic?</p>
                    <textarea className="popchoice-response" id="popchoice-mood" onChange={handleMovieTime} required></textarea>
                </div>
                
                <div className="popchoice-questionnaires">
                    <p className="popchoice-question">Do you wanna have fun or do you want something serious?</p>
                    <textarea className="popchoice-response" id="popchoice-emotion" onChange={handleUserEmotion} required></textarea>
                </div>
            </div>
        </form>
    )
}