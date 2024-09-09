// An array storing several quotes on coding
const codingQuotes = [
  "Coding like poetry should be short and concise. - Santosh Kalwar",
  "It’s not a bug; it’s an undocumented feature. ― Anonymous",
  "First, solve the problem. Then, write the code. - John Johnson",
  "Code is like humor. When you have to explain it, it’s bad. – Cory House",
  "Make it work, make it right, make it fast. – Kent Beck",
  "Clean code always looks like it was written by someone who cares. — Robert C. Martin",
  "Of course, bad code can be cleaned up. But it’s very expensive. — Robert C. Martin",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. — Martin Fowler",
];

// Function to get a random quote from an array of quotes
const getRandomquote = (quotesArray) => {
  const randomIndex = Math.floor(Math.random() * quotesArray.length);
  return quotesArray[randomIndex];
};


// Function to display the random quote in the console
const displayRandomQuote = () => {
  const randomQuote = getRandomquote(codingQuotes);
  console.log(randomQuote);
}

// Invoke the function to log a random quote
displayRandomQuote();