//Javascript Classes
class Pizza {
  constructor(pizzaSize) {
    /* this.type = pizzaType; */
    this._size = pizzaSize;
    this._crust = "original";
    /* this.toppings=[]; */
  }
  getCrust() {
    return this._crust;
  }
  setCrust(pizzaCrust) {
    this._crust = pizzaCrust;
  }
  /* getToppings(){
    return this.toppings;
  }
  setToppings(topping){
    this.toppings.push(topping);
  } */
/*   bake() {
    console.log(
      `Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`
    );
  } */
}

/* const myPizza = new Pizza("Pepproni", "small");
myPizza.setCrust("thin");
myPizza.bake();
myPizza.setToppings("sausage");
myPizza.setToppings("olives");
console.log(myPizza.getCrust());
console.log(myPizza.getToppings()); */

/* class SpecialityPizza extends Pizza{
  constructor(pizzaSize){
    super(pizzaSize)
    this.type="The Works";
  }
  slice(){
    console.log(`Our ${this.type} ${this.size} pizza has 8 slices`);
  }
}

const mySpecialtiy=new SpecialityPizza("medium");
mySpecialtiy.slice(); */

//Factory function

function pizzaFactory(pizzaSize){
  const crust="original";
  const size=pizzaSize;
  return {
    bake:() => console.log(`Baking a ${size} ${crust} crust pizza.`)
  };
}

const myPizza=pizzaFactory("small");
myPizza.bake();
