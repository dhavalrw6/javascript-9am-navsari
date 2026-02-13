const quotes = [
  {
    id: 1,
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    id: 2,
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    id: 3,
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    id: 4,
    quote: "Hard work beats talent when talent doesn’t work hard.",
    author: "Tim Notke"
  },
  {
    id: 5,
    quote: "Dream big and dare to fail.",
    author: "Norman Vaughan"
  },
  {
    id: 6,
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    id: 7,
    quote: "Push yourself, because no one else is going to do it for you.",
    author: "Unknown"
  },
  {
    id: 8,
    quote: "Your limitation—it’s only your imagination.",
    author: "Unknown"
  },
  {
    id: 9,
    quote: "Sometimes later becomes never. Do it now.",
    author: "Unknown"
  },
  {
    id: 10,
    quote: "Great things never come from comfort zones.",
    author: "Unknown"
  }
];

let currQuote = 0;

const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');

const nextQuote = ()=>{  
  console.log(currQuote);
  
  quoteText.textContent = quotes[++currQuote].quote;
  quoteAuthor.textContent = quotes[currQuote].author;
  console.log(currQuote);
  if(currQuote >= 9){
    currQuote = -1
  }
  console.log("-----------");
  
}

setInterval(nextQuote,3000);