const a = [10, 20, 50, 60, 100];

//Looping in Array with of keyword --> direct values.
for(let i of a){
    console.log(i);
}

//in case we need index
for(const i of a.entries()){
    console.log(i)
}

//Using Destructuring 
for(const[i, el] of a.entries()){
    console.log(i, el);
}


//Object litrals after ES6
const Mayur = {
    Name : "Mayur",
    Technologies : ["Pyhton", "Java", "JS", "C", "C++"],
    Experience : "3 Years",
    getData(){
        console.log(this.Name, this.Experience);
    },

    getSpecificData : () => {
        console.log(this.Name, this.Experience);
    }
}

const adventurer = {
  name: "Alice",
  cat: {
    name: "Dinah",
  },
};
// 
// const dogName = adventurer.dog?.name;
// console.log(dogName);
// // Expected output: undefined
// 
// console.log(adventurer.someNonExistentMethod?.());
// // Expected output: undefined
// 
// Mayur.getData();
// Mayur.getSpecificData();


//*Optinal Chaining

// if(Mayur.company || "NA"){
//     console.log("Present")
// }

// const res = Mayur.company && "NA"
// console.log(res);

console.log(Mayur.getData?.());
               

