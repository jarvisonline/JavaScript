//JSON : JavaScript Object Notation
/*
JSON is used to send and recieve data.
JSON is a text format this is completely language independent.
Meaning JSON is used to send & recieve data in many languages ...no t just in javascript
*/

const myObj = {
  name : "Aman",
  hobbies: ["Eat", "Sleep", "Code", "Repeat"],
  hello: function(){
    console.log("Hello World!");
  }
};
console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

const sendJson=JSON.stringify(myObj);
console.log(sendJson);//converts JS object into string
console.log(typeof sendJson);
console.log(sendJson.name);

const recieveJson=JSON.parse(sendJson);
console.log(recieveJson);//converts string back to JS object
console.log(typeof recieveJson);
console.log(recieveJson.name);