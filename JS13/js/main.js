//Functions

//Methods =built -in methods

//Functions Reusable Code

/* console.log("AMAN".toLowerCase()); */

//Function Declaration Syntax:

/* function sum(num1,num2){
  if (num2===undefined){
    return num1;
  }
  return num1+num2;
}

console.log(sum(2)); */

/* function getUserNameFromEmail(email){
  return email.slice(0,email.indexOf("@"));
}

console.log(getUserNameFromEmail("player1@random.com")); */

/* const getUserNameFromEmail=function(email){
  return email.slice(0,email.indexOf("@"));
}

console.log(getUserNameFromEmail("player1@random.com")); */

//Using arrow function

/* const getUserNameFromEmail=(email) => {
  return email.slice(0,email.indexOf("@"));
}

console.log(getUserNameFromEmail("player1@random.com")); */

const toProperCase = (name) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

console.log(toProperCase("febuary"));
