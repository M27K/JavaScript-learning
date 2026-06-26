Alliance = {
  Dept: "FacePrep",
  courses: {
    bclr: 5,
    pip: 3,
    pp: 2,
    lbj: 1,
  },

  faculty: [
    "Mayur",
    "Deepak",
    "Harshini",
    "Susma",
    "thameem",
    "Monica",
    "Bhavani",
    "Gaytri",
    "Megsline",
    "Thilagawati",
  ],
  firstYear: ["Mayur", "Deepak", "Sushma"],
  fyCourse: ["PIP", "PP"],

  sem: 4,
  workingHr: 8,

  getData: function (sub) {
    return this.courses[sub];
  },

  semesterReport: function ({ course, faculty, DSA: { Att } }) {
    console.log(
      `Course Name is ${course} this Handlled by ${faculty} and Attendance had marks of ${Att}`,
    );
  },

  CourseDuration: function (...name) {
    console.log(name);
    for (let i = 0; i < name.length; i++) {
      // console.log(name[i])
      console.log(name[i], ":", this.courses[name[i]]);
    }
  },
};

//what is Rest Op ?
//Same as Spred op but left side of equals to sign
const [f1, f2, ...others] = Alliance.faculty;
console.log(f1, f2, others);

//for objects
const { Dept, ...moreInfo } = Alliance;
console.log(Dept, moreInfo);

//Using Rest Op in function
const course = ["bclr", "pip", "pp", "lbj"];
Alliance.CourseDuration(...course);





