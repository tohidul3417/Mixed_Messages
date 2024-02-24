// A variable that stores several quotes on coding in an array
const codingQuotes = ['Coding like poetry should be short and concise. - Santosh Kalwar',
    'It’\s not a bug; it’\s an undocumented feature. ― Anonymous',
    'First, solve the problem. Then, write the code. - John Johnson',
    'Code is like humor. When you have to explain it, it’\s bad. – Cory House',
    'Make it work, make it right, make it fast. – Kent Beck',
    'Clean code always looks like it was written by someone who cares. — Robert C. Martin',
    'Of course, bad code can be cleaned up. But it’\s very expensive. — Robert C. Martin',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.'

];


// A function that takes an array of string as an argument, and returns one of those strings randomly.
const randomString = stringArray => {
    const randomNumber = Math.floor(Math.random() * stringArray.length)
    return stringArray[randomNumber];
}

console.log(randomString(codingQuotes));


