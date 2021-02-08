/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const background = document.querySelector("body");
const slideshow = document.querySelector("#slide-quote");

const quotes = [
  {quote: "Make like a tree, and get out of here.", source: "Bif", citation: "Back To the Future", type: "Movie"},  
  {quote: "I'll never let go, Jack.", source: "Rose Dawson", citation: "Titanic", year: "1999", type: "Movie"}, 
  {quote: "Whenever I'm about to do something, I think 'Would an idiot do that?' And if they would, I do not do that thing.", source: "Dwight Schrute", citation: "The Office", type: "TV Show"},  
  {quote: "Don't count the days, make the days count", source: "Muhammad Ali", type: "People"},
  {quote: "I live my life a quarter mile at a time", source: "Dominic Toretto", citation: "The Fast & the Furious", year: "2001", type: "Movie"},
  {quote: "That's what she said.", source: "Michael Scott", citation: "The Office", type: "TV Show"}
];

/*
  Create random color, and set to background color
*/

const randomColor = ()=>{
  let color = [0, 0, 0];

  for(let i = 0; i < color.length; i++){
  let randomNum = Math.floor(Math.random() * 255);
    color[i] = randomNum;
  }
  background.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
}

/***
 * Generates random number with length of quotes array
 * Returns random quote object
***/

const getRandomQuote = ()=>{
  let num = Math.floor(Math.random() * quotes.length);
  return quotes[num];
}

/***
 * Runs random color funtion for backgorund
 * Updates HTML with new quote and info
***/

const printQuote = ()=>{
  // variables
  let returnedQuote = getRandomQuote();
  let quoteString =
   `<p class="quote">${returnedQuote.quote}</p>
    <p class="source">${returnedQuote.source}
   `;
   const quoteBox = document.querySelector("#quote-box");
  const type = document.querySelector(".type");

  // run random color function
  randomColor();

  // updates category for type of quote above the quote in HTML
  let quoteType = `<h2>${returnedQuote.type}`;

  // checks to see if citation exists in quote
  if(returnedQuote.citation){
    quoteString += `<span class="citation">${returnedQuote.citation}</span>`;
  }

  // checks to see if year exists in quote
  if(returnedQuote.year){
    quoteString += `<span class="year">${returnedQuote.year}</span>`;
  }

  // add closing p tag to extraInfo
  quoteString += "</p>";

  // add quote string and quote type info to HTML to print to screen
  quoteBox.innerHTML = quoteString;
  type.innerHTML = quoteType;
}

/*
  Set interval to generate random quote every 5 seconds 
*/
  setInterval(printQuote, 5000);
  
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);