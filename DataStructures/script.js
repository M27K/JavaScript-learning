//Array Destructoring
const a = [10, 20, 30, 40];
const [x, y, z, w] = a;

console.log(x, y, z, w);

//Printing by skipping some charecters
const [first, , , last] = a;
console.log(first, last);

restorant = {
  mainCourse: ["puranpoli", "chpati", "Bhat"],
  secondary: ["Loncha", "Papd", "meeth"],

  order: function (mainNum, SecNum) {
    return [this.mainCourse[mainNum], this.secondary[SecNum]];
  },
};

// console.log(restorant.mainCourse)

const [lunch, addon] = restorant.order(2, 0);
console.log(lunch, addon);


//Nested Destructuring 
const nested = [2, 4, [5, 6]]
const [i, , [j, k]] = nested

console.log(i, j, k)


//We can default values as well 
const [m = 1, n = 2] = [8]
console.log(m, n)