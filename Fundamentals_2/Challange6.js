'use strict';

const calcTip = function(amt){
    let tip = 0;
    if(amt >= 50 && amt <= 300){
        tip = amt * 0.15;
        return tip;
    }
    else{
        tip = amt * 0.20;
        return tip;
    }
};

// console.log(calcTip(100));

const bills = new Array(125, 555, 44);
// const Tips = new Array();
const Tips = [];

Tips.push(calcTip(bills[0]));
Tips.push(calcTip(bills[1]));
Tips.push(calcTip(bills[2]));

console.log(Tips);

// const Total = new Array();
const Total = [];
Total.push(Tips[0] + bills[0]);
Total.push(Tips[1] + bills[1]);
Total.push(Tips[2] + bills[2]);

console.log(Total);



