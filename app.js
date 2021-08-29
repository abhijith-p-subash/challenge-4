//John Objects
var john = {
    firstName: "John",
    lastname: "Smith",
    height: 1.8, //height in meters
    mass: 85,    //mass in kg
    BMI: function () {
        this.BMI = this.mass / (this.height * this.height);
    }
}

//Mike Objects
var mike = {
    firstName: "Mike",
    lastname: "Tyson",
    height: 2.3, //height in meters
    mass: 95,    //mass in kg
    BMI: function () {
        this.BMI = this.mass / (this.height * this.height);
    }
}

//John BMI
john.BMI();
console.log("John BMI: " + john.BMI);
console.log(john);

//Mike BMI
mike.BMI();
console.log("Mike BMI: " + mike.BMI);


//Condition check
if (john.BMI > mike.BMI) {
    console.log(john.firstName + " " + john.lastname + " has height BMI:" + john.BMI);
} else if (john.BMI < mike.BMI) {
    console.log(mike.firstName + " " + mike.lastname + " has height BMI:" + mike.BMI);
} else {
    console.log("Both of them have same BMI: ");
}
