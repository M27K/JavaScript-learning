const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(85, 54, 41);
let scoreKoalas = calcAverage(23, 34, 27);

console.log(scoreDolphins, scoreKoalas);


const winner = function checkWinner(avgDolphine, avgKoalas){
    // console.log(avgDolphine, avgKoalas);
    if(avgDolphine > 2 * avgKoalas){
        console.log(`Dolphine Won🏆🏆 there score is ${avgDolphine}`);
    }
    else if(avgKoalas > 2 * avgDolphine){
        console.log(`Koala Won 🏆🏆 there score is ${avgKoalas}`);
    }
    else{
        console.log("No Team Wins");
    }

}

winner(scoreDolphins, scoreKoalas);