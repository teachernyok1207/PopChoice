import { openai, supabase } from './config.js';
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

const form = document.querySelector("form");
const popchoiceFaveMovie = document.getElementById("popchoice-fave-movie");
const popchoiceMood = document.getElementById("popchoice-mood");
const popchoiceEmotion = document.getElementById("popchoice-emotion");

form.addEventListener("submit",function(e){
    e.preventDefault();
    
    const userInput=`
    Question 1: "What’s your favorite movie and why?" Answer: "${popchoiceFaveMovie.value}",
    Question 2: "Are you in the mood for something new or a classic?" Answer: "${popchoiceMood}",
    ${popchoiceEmotion}"`
    main(userInput);
})

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
    content: `You are an enthusiastic movie expert who loves recommending movies to people. You will be given two pieces of information - some context about movies and a question. Your main job is to formulate a recommendation based from the response of the user using the provided context. If the answer is not given in the context, find the answer in the conversation history if possible. If you are unsure and cannot find the answer, say, "Sorry, I don't know the answer." Please do not make up the answer. Always speak as if you were chatting to a friend.`
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
}