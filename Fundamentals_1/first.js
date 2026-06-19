// const mark = {
//     wt : 78,
//     ht : 1.69
// };
// 
// const john = {
//     wt : 92,
//     ht : 1.95
// };
// 
// let bmi_mark = mark["wt"] / (mark["ht"] * mark["ht"]);
// let bmi_john = john["wt"] / (john["ht"] * john["ht"]);
// 
// console.log(bmi_mark, bmi_john);
// 
// let markHigherBMI = false;
// 
// if(bmi_mark > bmi_john){
//     markHigherBMI = true;
//     console.log(`Marks BMI ${bmi_mark} is grater than jhons ${bmi_john}`);
// }else{
//     markHigherBMI = false;
// }

//* Conditional Cases (if, else if, else) */
// 
// dolphineScore = (97+112+101) / 3;
// koalaScore = (109+95+106) / 3;
// 
// console.log(dolphineScore, koalaScore)
// 
// if(dolphineScore > koalaScore && dolphineScore > 100){
//     console.log("Dolphine win the trophy");
// }
// else if(koalaScore === dolphineScore && (koalaScore >= 100 && dolphineScore >= 100)){
//     console.log("Both win the Trophy");
// }
// else if(koalaScore > dolphineScore && koalaScore > 100){
//     console.log("Koala wins the Trophy");
// }
// 
// else{
//     console.log("No Team wins the trophy");
// }


// //* Switch Case */
// 
// day = "Sunday";
// switch(day){
//     case "Monday":
//         console.log("Again going back to working");
//         break;
//     
//     case "Tuesday":
//         console.log("Tommarow is Upwas");
//         break;
//     
//     default:
//         console.log("Leave, Enjoy!!!!");
// 
// }
// 

// //* Ternary Op */
// let age = 19
// age >= 18 ? console.log("Go for voting") : console.log("Go to School");

//* Challange 4 */
// const bill = 5;
// let tip = 0
// switch(true){
//     case (bill >= 50 && bill <= 300):
//         tip = 0.15 * bill;
//         break;
//     
//     case bill > 300:
//         tip = 0.20 * bill;
//         break;
// }
// 
// if (bill >= 50 && bill <= 300){
//     tip = 0.15 * bill;
// }
// else if(bill >= 300){
//     tip = 0.20 * bill;
// }
// else{
//     console.log("No tip")
// }
// 
// bill >= 50 && bill <= 300 ? tip = 0.15*bill : tip = 0.20*bill;
// 
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

//*  Objects /
// const Mayur = { 
//     firstName : "Mayur",
//     lastName : "Katkar",
//     job : "Technical_Trainer",
//     birthYear : 2002,
//     friends : ["Deepak", "Zaid", "Gangaram", "Balaji", "Pratik"],
//     isDriverLicens : false,
// 
//     calcAge : function(){
//         this.age = 2026 - this.birthYear;
//         return this.age;
//     },
// 
//     getSummry : function(){
//         if(Mayur.isDriverLicens){
//             console.log(`Mayur is ${Mayur.age}-years old ${Mayur.job}, and he has a driver's License`);
//         }
//         else{
//             console.log(`Mayur is ${Mayur.age}-years old ${Mayur.job}, and he has not driver's License`);
//         }
//     }
// };

// //Accessing 
// // const input = prompt("What you want to know about Mayur?, Choose from firstName, lastname, job, Age, friends");
// // 
// // console.log(Mayur[input]);
// 
// 
// //Updating 
// // Mayur["firstName"] = "Mac";
// // 
// // //Adding new Value
// // Mayur["Location"] = "India";
// // console.log(Mayur);
// // 
// // console.log(`Mayur has ${Mayur.friends.length} friends and his best friend is ${Mayur.friends[0]}`)
// 
// 
// //Objects Methods 
// // console.log(Mayur.calcAge(1997));
// 
// //Challange
// Mayur.calcAge();
// Mayur.getSummry();


//* Itrations
//* Veriable declared under for loop will be local declaration.
// for(let i = 0; i < 10; i++){
//     console.log(i);
// }
// 
// 
// //Looping in Arrays
// Std_Data = [
//     "Mayur",
//     "Technical Trainer",
//     2026-2002,
// ];
// 
// 
// //Adding one array value to another array
// const type = [];
// 
// for(let i = 0; i < Std_Data.length; i++){
//     console.log(Std_Data[i]);
//     type.push(typeof Std_Data[i]);
// }
// console.log(type);
// 
// 
// //Break And Continue
// for(let i = 0; i < type.length; i++){
//     if(type[i] == "string") continue;
//     console.log(type[i]);
// }

const printForecast = function(arr){
    console.log(`${arr[0]} degree celsious in 1 days ... ${arr[1]} degree celsious in 2 days .... ${arr[2]} degree celsious in 3 days ...`);
}

temp = [17, 21, 23];
printForecast(temp);

console.log("hi");


