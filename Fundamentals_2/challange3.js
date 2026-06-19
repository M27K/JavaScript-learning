const Mark = {
    fullName : "Mark Miller",
    mass : 78,
    ht : 1.69,

    calcBMI : function(){
        this.bmi = this.mass / this.ht ** 2;
        return this.bmi;
    }
};

const John = {
    fullName : "John Smith",
    mass : 92,
    ht : 1.95, 

    calcBMI : function(){
        this.bmi = this.mass / this.ht ** 2;
        return this.bmi;
    }
};

if(Mark.calcBMI() > John.calcBMI()){
    console.log(`${John.fullName}'s BMI (${John.bmi}) is higher than ${Mark.fullName}'s (${Mark.bmi})`)
}
else{
    console.log(`${Mark.fullName}'s BMI (${Mark.bmi}) is higher than ${John.fullName}'s (${John.bmi})`)
}
