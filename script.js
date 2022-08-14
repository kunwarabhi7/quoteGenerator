const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterButton = document.getElementById('twitter');
const newQuoteButton = document.getElementById('new-quote');




let apiQuotes = [];

//show new Quote

const newQuote = () => {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length) + 1]
    authorText.textContent = quote.author;
    quoteText.textContent = quote.text;

}

//Get Quotes from API

async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl)
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        alert(error)
    }
}

//onLoad
getQuotes();


