//Web Storage API

//Not part of the DOM- refers to the Window API
// Available to JS via the global variable: window

//We do not have to type window. It is implied:

/* window.alert(window.location);
alert(location); */

const myArray = ["eat", "sleep", "code"];
const myObject = {
  name: "aman",
  hobbies: ["eat", "sleep", "code"],
  logName: function () {
    console.log(this.name);
  },
};

localStorage.setItem("myKey", JSON.stringify(myArray));
const storeLength=localStorage.length
const myLocalData=JSON.parse(localStorage.getItem("myKey"));

console.log(storeLength);



