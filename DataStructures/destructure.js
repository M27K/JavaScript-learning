//Array Destructoring
// const a = [10, 20, 30, 40];
// const [x, y, z, w] = a;
//
// console.log(x, y, z, w);
//
// //Printing by skipping some charecters
// const [first, , , last] = a;
// console.log(first, last);
//
// restorant = {
//   mainCourse: ["puranpoli", "chpati", "Bhat"],
//   secondary: ["Loncha", "Papd", "meeth"],
//
//   order: function (mainNum, SecNum) {
//     return [this.mainCourse[mainNum], this.secondary[SecNum]];
//   },
// };
//
// // console.log(restorant.mainCourse)
//
// const [lunch, addon] = restorant.order(2, 0);
// console.log(lunch, addon);
//
//
// //Nested Destructuring
// const nested = [2, 4, [5, 6]]
// const [i, , [j, k]] = nested
//
// console.log(i, j, k)
//
//
// //We can default values as well
// const [m = 1, n = 2] = [8]
// console.log(m, n)

//* Object Destructuring
Alliance = {
  Dept: "FacePrep",
  courses: {
    bclr: 5,
    pip: 3,
    pp: 2,
    lbj: 1,
  },

  sem: 4,
  workingHr: 8,

  getData: function (sub) {
    return this.courses[sub];
  },

  semesterReport: function ({course, faculty, DSA:{Att}}) {
    console.log(`Course Name is ${course} this Handlled by ${faculty} and Attendance had marks of ${Att}`);
  },
};

Alliance.semesterReport({
  course: "PIP",
  courseCode: "E1202MK",
  faculty: "Mayur",
  DSA: {
    Att: 5,
    cs: 10,
    MP: 10,
    BL: 5,
  },  
});

// Alliance.semesterReport({
//   course: {
//     PIP : {
//       courseCode: "E1202MK",
//       faculty: "MAyur",
//       DSA: {
//         Att: 5,
//         cs: 10,
//         MP: 10,
//         BL: 5,
//       },
//     }
//   },
//   
// });

console.log(Alliance);

const hr = Alliance.getData("bclr");
console.log(hr);

//in object destructring we have to use curly brackets
// const {Dept, sem} = Alliance;
// console.log(Dept, sem);

//default values
const { hods = [], Dept } = Alliance;
console.log(hods, Dept);

//Mutable variables
((a = 45), (b = 35));
const obj = { a: 10, b: 20, c: 30 };
// const {a, b} = obj //This will give an error like again trying to intiallize
({ a, b } = obj);
console.log(a, b);

//nested object destructuring
const {
  courses: { bclr:sub, pp },
} = Alliance;
console.log("Nested Destructuring : ", bclr, pp);

//Practise
// Alliance = {
//   Dept: "FacePrep",
//   courses: {
//     bclr: 5,
//     pip: 3,
//     pp: 2,
//     lbj: 1,
//   },
//
//   sem: 4,
//   workingHr: 8,
//
//   getData: function (sub) {
//     return this.courses[sub];
//   },
//
//   getSpecificData : (sub) => {
//     return this.courses[sub]
//   }
// };
//
// const res = Alliance.getData()
// console.log(onepieceisreal)
