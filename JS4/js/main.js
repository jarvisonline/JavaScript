//Numbers

const myNumber = 42;

const myFloat = 42.0151;

console.log(myFloat);

const myString = "42.123abc";

console.log(myNumber === myFloat);
console.log(myString + 3);
console.log(Number(myString) + 3);
console.log(Number("Aman"));

//Number Methods

console.log(Number.parseFloat(myString));
console.log(Number.parseFloat(myString).toFixed(2));
console.log(isNaN("Aman"));


