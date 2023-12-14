import React from "react";
import { openai, supabase } from './config';
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import moviesData from "./content";
import Main from "./components/Main";

export default function App(){
    const [movie,setMovie] = React.useState(true);
    const [faveMovie,setFaveMovie] = React.useState("");
    const [movieTime,setMovieTime] = React.useState("");
    const [userEmotion,setUserEmotion] = React.useState("");
    const [waiting,setWaiting] = React.useState(true);
    const [disableButton,setDisableButton] = React.useState(true);
    const [resultTitle,setResultTitle] = React.useState("");
    const [resultText, setResultText] = React.useState("");
    
    const handleFaveMovieChange = (event) => {
        setFaveMovie(event.target.value);
    }
    
    const handleMovieTime = (event) => {
        setMovieTime(event.target.value);
    }
    
    const handleUserEmotion = (event) => {
        setUserEmotion(event.target.value)
    }
    
    React.useEffect(() => {
        if (faveMovie && movieTime && userEmotion){
            setDisableButton(false)
        }
    },[faveMovie, movieTime, userEmotion])
    
    // Start of Getting Input from User and Generating AI Response
    function getResponse(){
        if (movie){
            fetchData();
        }else{
            setFaveMovie("");
            setMovieTime("");
            setUserEmotion("");
            setResultTitle("");
            setResultText("");
        }
        
        setMovie(currentState => !currentState)
    }

    async function fetchData(){
        const userInput=`
        Question 1: "What’s your favorite movie and why?" Answer: "${faveMovie}",
        Question 2: "Are you in the mood for something new or a classic?" Answer: "${movieTime}",
        ${userEmotion}"`;
        
        setWaiting(true);
        await main(userInput);
        setWaiting(false)
    }

    async function main(input){
        try{
            const embedding = await createEmbedding(input);
            const match = await findNearestMatch(embedding);
            await getChatCompletion(match, input);
        } catch (error) {
            console.error("Error in main function.",error.message);
        }
    }

    async function createEmbedding(input) {
    const embeddingResponse = await openai.embeddings.create({
        model: "text-embedding-ada-002",
        input
    });
    return embeddingResponse.data[0].embedding;
    }

    async function findNearestMatch(embedding) {
    const { data } = await supabase.rpc('match_movies', {
        query_embedding: embedding,
        match_threshold: 0.50,
        match_count: 4
    });
    
    const match = data.map(obj => obj.content).join('\n');
    return match;
    }

    const chatMessage = [{
        role: "system",
        content: `You will be given two pieces of information - some context about movies and the question. Your main job is to formulate a recommendation based from the question using the provided context. If the answer is not given in the context, find the answer in the conversation history if possible but make sure that you are not suggesting a movie that is not in the context. If you are unsure and cannot find the answer, say, "Sorry, I don't know the answer." Please do not make up the answer. Please provide the title only of your recommended movie and nothing more.`
    }];

    async function getChatCompletion(text, query){
        chatMessage.push({
            role: "user",
            content: `Context: ${text} Question: ${query}`
        })
        
        const { choices } = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: chatMessage,
            temperature: 0.65,
            frequency_penalty: 0.5
        })
        
        chatMessage.push(choices[0].message);
        console.log(choices[0].message.content);
        findTextInResponse(choices[0].message.content);
    }

    function findTextInResponse(inputString) {
        // Regular expression to match text inside double quotes
        const regex = /"([^"]*)"/g;

        // Use the match method with the regular expression
        const matches = inputString.match(regex);
        let cleanedTexts = [];

        // Check if matches were found
        if (matches) {
            // Extract the text inside quotes from the matches
            const textsInsideQuotes = matches.map(match => match.slice(1, -1));

            cleanedTexts = textsInsideQuotes.map(text => text.replace(/[.,]/g, ''));
        } else {
            cleanedTexts = [];
        }
        
        searchFromCleanedTexts(cleanedTexts);
    }

    function searchFromCleanedTexts(result){
        for (let i = 0;i < result.length; i++){
            const currentTitle = moviesData.filter(function(movieList){
                return movieList.title.toLowerCase().includes(result[i].toLowerCase());
            }).map(function (movie) {
                return movie.title;
            })
            .join(', ');
            
            console.log(currentTitle);
            
            if (currentTitle){
                searchFromCurrentTitle(currentTitle);
                break;
            }
        }
        
        if (result.length === 0){
            searchFromCurrentTitle("none");
        }
    }

    function searchFromCurrentTitle(title){
        const currentMovie = moviesData.filter(function(movieList){
            return movieList.title === title;
        });
        
        console.log(JSON.stringify(currentMovie) + " - Result from index.jsx")
        
        if (currentMovie.length > 0){
            setResultTitle(`${currentMovie[0].title} (${currentMovie[0].releaseYear})`);
            setResultText(currentMovie[0].content);
        }else{
            setResultTitle("Sorry! I don't know the answer");
            setResultText("");
        }
    }
    
    // console.log(resultTitle + " " + resultText + " - Result from index.jsx");
    
    return (
        <>
            <Main 
                isStart = {movie}
                getResponse = {() => getResponse()}
                handleFaveMovieChange = {handleFaveMovieChange}
                handleMovieTime = {handleMovieTime}
                handleUserEmotion = {handleUserEmotion}
                isWaiting = {waiting}
                disableSubmit = {disableButton}
                resultTitle = {resultTitle}
                resultText = {resultText}
            />
        </>
    )
}