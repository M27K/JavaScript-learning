//* short circuting with &&(AND) and || (OR)

// //without short-circuting
// if (!Alliance.cours) {
//   console.log("NA");
// }
// else{
//   console.log(Alliance.courses);
// }
//
// //with short-circuting for OR and AND
// const ispresent = Alliance.cou && "NA";
// // const ispresent = Alliance.getData && Alliance.getData("bclr");
//
// console.log(ispresent);

const Emp1 = {
  Name: "Mayur",
  Working: "FacePrep",
  Experience: "3 Years",
  homeTown: "Maharashtra",
};

const Empe2 = {
  Name: "Preetam",
  Working: "FacePrep",
  homeTown: "TamilNodu",
};
Empe2.Experience = 0;

// Emp1.Experience = Emp1.Experience || "1.5 Years";
// Empe2.Experience = Empe2.Experience || "1.5 Years";

//Logical OR, AND, Nullish Oprators Uses

// Empe2.Experience ||= "1.5 Years";
Empe2.Experience ??= "1.5 Years";
Emp1.Experience &&= "2.5 Years";

console.log(Emp1.Experience);
console.log(Empe2.Experience);
