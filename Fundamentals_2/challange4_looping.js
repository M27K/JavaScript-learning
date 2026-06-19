"use Strict";

const calcTip = function (amt) {
  let tip = 0;
  if (amt >= 50 && amt <= 300) {
    tip = amt * 0.15;
    return tip;
  } else {
    tip = amt * 0.2;
    return tip;
  }
};

const calcAge = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

//Tips Calculations
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
}

//Total Values bill + tips
for (let i = 0; i < bills.length; i++) {
  totals.push(bills[i] + tips[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

console.log(calcAge(totals));
