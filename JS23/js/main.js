//Modules
/* import playGuitar from "./guitar.js";
import { shredding as shred, plucking as pluck} from "./guitar.js"; */

import * as Guitars from "./guitar.js";
import { shredding as shred, plucking as pluck} from "./guitar.js";
import User from "./user.js";

const me=new User("nigamamanlko@rediffmail.com", "Aman");
console.log(me);
console.log(me.greeting());
/* console.log(Guitars.playGuitar());
console.log(Guitars.shred());
console.log(Guitars.pluck()); */

//Doing using impoet * all then dont use defaullt in guitar.js