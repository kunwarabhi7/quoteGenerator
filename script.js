const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterButton = document.getElementById('twitter');
const newQuoteButton = document.getElementById('new-quote');
const loader = document.getElementById('loader');




let apiQuotes = [];

//Loading Show

const loading = () => {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//hide loading

const complete = () => {
    quoteContainer.hidden = false
    loader.hidden = true
}

//show new Quote

const newQuote = () => {
    loading();
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
    complete();


}


//Get Quotes from API

async function getQuotes() {
    loading();
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



