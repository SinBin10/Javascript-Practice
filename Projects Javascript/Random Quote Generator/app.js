let quote = document.querySelector(".quote");
let person = document.querySelector(".person");
let button = document.querySelector(".btn");

const quotes = [
  {
    quote: "A rose by any other name would smell as sweet.",
    person: "William Shakespeare",
  },
  { quote: "All that glitters is not gold.", person: "William Shakespeare" },
  {
    quote:
      "Ask not what your country can do for you; ask what you can do for your country.",
    person: "John Kennedy",
  },
  { quote: "Eighty percent of success is showing up.", person: "Woody Allen" },
  { quote: "Go ahead, make my day.", person: "Harry Callahan" },
  { quote: "Elementary, my dear Watson.", person: "Sherlock Holmes" },
  {
    quote:
      "Genius is one percent inspiration and ninety-nine percent perspiration.",
    person: "Thomas Edison",
  },
  {
    quote: "He travels the fastest who travels alone.",
    person: "Rudyard Kipling",
  },
  {
    quote: "If at first you don’t succeed, try, try again.",
    person: "W. E. Hickson",
  },
  {
    quote: "If you are going through hell, keep going.",
    person: "Winston Churchill",
  },
];

button.addEventListener("click", function() {
  let random = Math.floor(Math.random() * quotes.length);
  quote.innerHTML = quotes[random].quote;
  person.innerHTML = quotes[random].person;
});
