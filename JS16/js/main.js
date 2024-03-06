//Objects
//key-value pairs in curly braces

/* const myObj = { name: "Aman" };
console.log(myObj.name);

const anotherObj = {
  alive: true,
  answer: 42,
  hobbies: ["Eat", "Sleep", "Code", "Repeat"],
  beverage: {
    morning: "Buttermilk",
    afternoon: "Water",
  },
  action: function () {
    return `Time for ${this.beverage.morning}`;
  }
};

console.log(anotherObj.action()); */

/* const vehicle={
    wheels:4,
    engine: function () {
        return "Vrooom!";
    }
} */

/* const truck= Object.create(vehicle);
truck.doors=2;
console.log(truck);
console.log(truck.wheels);
console.log(truck.engine()); */
/* const car=Object.create(vehicle);
car.doors=4;
car.engine= function() {
    return "Whooosh!";
};
console.log(car.engine());
console.log(car.wheels);
const tesla = Object.create(car);
console.log(tesla.wheels)
tesla.engine= function() {
    return "Shhhhhh....."
}
console.log(tesla.engine()); */

const band={
    vocals:"Robert Plant",
    guitar:"Jimmy Page",
    bass:"John Paul Jones",
    drums:"John Bonham"
};

/* delete band.drums;
console.log(band.hasOwnProperty("drums"));
console.log(Object.keys(band));
console.log(Object.values(band));

for(let job in band){
    console.log(`On ${job},its ${band[job]}! `);
} */

//destructuring objects

/* const { guitar: myVariable,bass:myBass}= band;
console.log(myVariable);
console.log(myBass); */

function sings({vocals}){
    return `${vocals} sings!`;
}
console.log(sings(band));