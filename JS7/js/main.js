//Conditionals : If Statements

//syntax

/* if (condition) {
    run some code
}

else{
    run some different code
} */

/* let customerIsBanned;
let soup;
let crackers;
let reply;
if(customerIsBanned){
    reply=`No Soup for you!`;
}

else if (soup && crackers){
    reply=`I love ${soup} & crackers`;
}

else if (soup){
    reply=`I love ${soup}`;
}
else{
    reply=`Sorry, we're out of soup`;
}

console.log(reply); */

//Example using scores

/* let testScore=92;
let grade;

if(testScore>=90){
    grade="A";
}

else if(testScore>=80){
    grade="B";
}
else if(testScore>=70){
    grade="B";
}
else if(testScore>=60){
    grade="B";
}
else{
    if(collegeStudent){
        grade="U";
    }
    else{
        grade="F";
    }
}
console.log(grade); */

//Decison Tree

if (playerOne === computer) {
  // Tie game
  console.log("It's a tie!");
} else if (playerOne === "rock") {
  if (computer === "paper") {
    // Computer wins
    console.log("Computer wins!");
  } else {
    // PlayerOne wins
    console.log("PlayerOne wins!");
  }
} else if (playerOne === "paper") {
  if (computer === "scissors") {
    // Computer wins
    console.log("Computer wins!");
  } else {
    // PlayerOne wins
    console.log("PlayerOne wins!");
  }
} else {
  if (computer === "rock") {
    // Computer wins
    console.log("Computer wins!");
  } else {
    // PlayerOne wins
    console.log("PlayerOne wins!");
  }
}


// Conditiional :Switch Statements

/* switch (Math.floor(Math.random() * 5 + 1)) {
  case 1:
    console.log(1);
    break;
  case 2:
    console.log(2);
    break;
  case 3:
    console.log(3);
    break;
  default:
    console.log("No Match");
} */

let playerOne="rock";
let computer="paper";

switch(playerOne) {
  case computer:
    console.log("Tie game");
    break;
  case "rock":
    if(computer==="paper"){
      console.log("computer wins!");
    }
    else{
      console.log("playerOne wins!");
    }
    break;
  case "paper":
    if(computer==="scissor"){
      console.log("computer wins!");
    }
    else{
      console.log("playerOne wins!");
    }
    break;
  default:
    if(computer==="rock"){
      console.log("computer wins!");
    }
    else{
      console.log("playerOne wins!");
    }
}

