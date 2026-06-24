Alliance = {
  Dept: "FacePrep",
  courses: {
    bclr: 5,
    pip: 3,
    pp: 2,
    lbj: 1,
  },

  faculty : ["Mayur", "Deepak", "Harshini", "Susma", "thameem", "Monica"],
  firstYear : ["Mayur", "Deepak", "Sushma"],
  fyCourse : ["PIP", "PP"],
  
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

  fyReport : function(f1, f2, f3, courses){
    console.log(`First Year Faculties ${f1}, ${f2}, ${f3}. they are handling ${courses} course`);
  }
};

//Join Array
const updateFaculty = [...Alliance.faculty, "Bhavani", "Thilga"];
console.log(updateFaculty)

//Copy Array
const copyFacultyArray = [...updateFaculty]
console.log(copyFacultyArray);

//Spread Op for String
const str = "Mayur";
console.log(...str);


//Spred Op in function
//* If Array having 3 value but we are assigning to 2 variable. then 3rd one will be undefined. same vice versa.
Alliance.fyReport(...Alliance.firstYear, Alliance.fyCourse);



//spread Op for Objects in ES18 updates
//Before that for objects spred op will not work.

const AlliancCopy = {...Alliance}
console.log(AlliancCopy)



