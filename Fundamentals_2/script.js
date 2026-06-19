'use strict';

//* Function Declarations/
// console.log(calcAge(2002))
// 
// function calcAge(birthYear){
//     
// }


//* Function Expration/
// const calcAge2 = function (birthYear){
//     return 2026 - birthYear;
// }
// 
// console.log(calcAge2(2000))


//* Arrow Function/

//Single Statments
// const calcAge3 = (birthYear) => 2026 - birthYear;
// console.log(calcAge3(2002));

//MultiLines Statments
// const yearLeft = (birthYear, Name) => {
//     const age = 2026 - birthYear;
//     const left = 100 - age;
//     return `The ${Name} is going to leave till ${left}`;
// }
// console.log(yearLeft(2002, "ABC"))


//* this keyword 
// console.log(this);
// 
// //Normal Function
// const calcAge = function(birthYear){
//     console.log(2026 - birthYear);
//     console.log(this);
// 
// };
// calcAge(1990);
// 
// //Arraow Function
// /*
// Arrow Function dose not have its own this keyword it will use its parent this keyword that is windows. 
// */
// const calcAgeArrow = (birthYear) => {
//     console.log(2026 - birthYear);
//     console.log(this);
// 
// };
// calcAgeArrow(2026);
// 
// //Object 
// const mayur = {
//     year : 2002,
//     calcAge : function(){
//         console.log(this);
//         // console.log(this.year);
//         console.log(2026 - this.year);
//     }
// };
// 
// mayur.calcAge();
// 
// //Method Boorowing - getting one object method to another object
// const zaid = {
//     year : 2001
// };
// zaid.calcAge = mayur.calcAge; //method borrowing
// zaid.calcAge();
// 
// //when object become a normal function
// const f = mayur.calcAge;
// f();


//*Object Refernce
/*The Mutation Problem
Because both variables point to the exact same space in the heap, modifying a property through one variable will instantly alter the original object.*/
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family : ["Alliace", "Bob"]
};

// Copying the variable ONLY copies the reference pointer
const marriedJessica = jessica; 
marriedJessica.lastName = 'Davis';

console.log(jessica.lastName);        // "Davis" (Original mutated!)
console.log(marriedJessica.lastName); // "Davis"

//*Shallow copy
const jassicaCopy = {...jessica};
jassicaCopy.lastName = "Williams";

// console.log("Before:", jessica.lastName);
// console.log("After:", jassicaCopy.lastName);

jassicaCopy.family.push("Mac");
console.log(jassicaCopy.family);
console.log(jessica.family);


//*Deep Clone
const jassicaClone = structuredClone(jessica);
jassicaClone.family.push("mac");
console.log(jassicaClone.family);
console.log(jessica.family);

