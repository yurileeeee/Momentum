const quotes = [
  {
    quote : "Knowledge cannot replace friendship. I rather be an idiot than to lose you.",
    author : "Patrick",
  },
  {
    quote : "You're my best friend cuz I wouldn't dare to be this weird with anyone else.",
    author : "Spongebob",
  },
  {
    quote : "In life, we never lose friends. We only learn who our true ones are.",
    author : "Spongebob",
  },
  {
    quote : "If we were to die right now due to the carelessness of a friend, that would be okay.",
    author : "Spongebob",
  },
  {
    quote : "I'm your Patrick, you're my Spongebob. Let's be friends forever.",
    author : "Patrick",
  },
  {
    quote : "Trusting you is my decision, proving me wrong is yours.",
    author : "Patrick",
  },
  {
    quote : "I can't give a friend something trivial!",
    author : "Patrick",
  },
  {
    quote : "You can't be someone else. You are only you.",
    author : "Spongebob",
  },
  {
    quote : "Friend! Don't show your tears in front of me! Nothing in the world can be solved with tears!",
    author : "Squidward",
  },
  {
    quote : "Just because it didn't go as planned doesn't mean it's not the best day",
    author : "Mr.Krabs",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;