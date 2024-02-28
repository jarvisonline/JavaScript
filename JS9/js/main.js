//Conditional Statemenets : ternary opearator

//stynatx
//condition ? ifTrue : ifFalse;

/* let soup = "Chicken Noodle Soup";
let response = soup ? "Yes we have soup" : "Sorry , nos soup today.";
console.log(response); */

/* let soup = "Chicken Noodle Soup";
let isCustomerBanned = false;
let soupAcess = isCustomerBanned
  ? "Sorry, no soup for you!"
  : soup
  ? `Yes we have ${soup} today`
  : "Sorry , no soup today.";
console.log(soupAcess); */

/* let testScore = 100 ;
let myGrade =
  testScore > 89
    ? "A"
    : testScore > 79
    ? "B"
    : testScore > 69
    ? "C"
    : testScore > 59
    ? "D"
    : "F";
console.log(`My Test grade is a ${myGrade}.`); */

let playerOne = "rock";
let computer = "scissors";
let result =
  playerOne === computer
    ? "Tie game!"
    : playerOne === "rock" && computer === "paper"
    ? "Computer wins!"
    : playerOne === "paper" && computer === "scissors"
    ? "Computer wins!"
    : playerOne === "scissors" && computer === "rock"
    ? "Computer wins!"
    : "playerOne wins!";
console.log(result);
