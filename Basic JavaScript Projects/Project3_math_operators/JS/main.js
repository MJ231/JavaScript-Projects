function addition_Function() {              //Defining a function and naming it
    var Addition = 5 + 2;                   //Defining a variable and giving it str vaule
    document.getElementById("Math") .innerHTML = "5 + 2 = " + Addition;     //Putting the value of arithemetic into HTML element with "Math" id
}

function subtraction_Function() {           //Defining a function and naming it
    var subtraction = 5 - 2;                //Defining a variable and giving it str vaule
    document.getElementById("Math") .innerHTML = "5 - 2 = " + subtraction;  //Putting the value of arithemetic into HTML element with "Math" id
}

function multiplication() {                 //Defining a function and naming it
    var simple_Math = 6 * 8;                //Defining a variable and giving it str vaule
    document.getElementById("Math") .innerHTML = "6 x 8 = " + simple_Math;  //Putting the value of arithemetic into HTML element with "Math" id
}

function division() {                       //Defining a function and naming it
    var simple_Math = 48 / 6;               //Defining a variable and giving it str vaule
    document.getElementById("Math") .innerHTML = "48 / 6 = " + simple_Math; //Putting the vlaue of arithemetic into HTML element with "Math" id
}

function more_Math() {                      //Defining a function and naming it
    var simple_Math = (1 + 2) * 10 / 2 -5;  //Defining a variable and giving it str vaule
    document.getElementById("Math").innerHTML = "1 plus 2, multiplied by 10, divided in half and then subtracted by 5 equals " + simple_Math;
}                                           //Putting the value of arithemetic into HTML element with "Math" id

function modulus_Operator() {               //Defining a function and naming it
    var simple_Math = 25 % 6;               //Defining a variable and giving it str vaule
    document.getElementById("Math").innerHTML = "When you divide 25 by 6 you have a remainder of: " + simple_Math;
}                                           //Putting the value of arithemetic into HTML element with "Math" id

function negation_Operator() {              //Defining a function and naming it
    var x = 10;                             //Defining a variable and giving it str vaule
    document.getElementById("Math") .innerHTML = -x;    //Putting the value of arithemetic into HTML element with "Math" id
}

var X = 5;  //Defining a variable and giving it str vaule
X++;        //Giving an element so it works in HTML
document.write(X);  //Putting the value of arithemetic into HTML element with "Math" id

var X = 5.25;   //Defining a variable and giving it str vaule
X--;            //Giving an element so it works in HTML
document.write(X);  //Putting the value of arithemetic into HTML element

window.alert(Math.random() * 100);  //Putting the value of arithemetic into HTML element 