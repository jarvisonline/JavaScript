// var,let,const

/* var x = 1;
var x = 2;
console.log(x); */

/* cosnt x= 1;
x = 2;
console.log(x); */

// global scope
/* var x = 1;

let y = 2;
const z = 3;

//function scope
function myFunc() {
  const z = 5;
  console.log(y);

// local scope
//block scope
    {
        let y = 4;
        console.log(y);
    }
  
}
myFunc(); */

var x = 1;
let y = 2;
const z = 3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFunc() {
  var x = 10;
  const z = 5;
  {
    var x = 11;//function scoped
    const z = 6;//block scoped
    console.log(`block: ${x}`);
    console.log(`block: ${y}`);
    console.log(`block: ${z}`);
  }
  console.log(`function: ${x}`);
  console.log(`function: ${y}`);
  console.log(`function: ${z}`);
}

myFunc();
