const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterButton = document.getElementById('twitter');
const newQuoteButton = document.getElementById('new-quote');




let apiQuotes = [];

//show new Quote

const newQuote = () => {
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length) + 1]
    if (!quote.author) {
        authorText.textContent = 'Unknown';

    } else {
        authorText.textContent = quote.author;
    }
    if (quote.text.length > 70) {
        quoteText.classList.add('long-quote')

    } else {
        quoteText.classList.remove('long-quote')
    }

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


// Tweet Quote

const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

newQuoteButton.addEventListener('click', newQuote)
twitterButton.addEventListener('click', tweetQuote)

//onLoad
getQuotes();



