// Function for a while loop
function Call_Loop() {
    var text = "";
    var i = 0;
    while (i < 10) {
        text += "<br>The number is " + i;
        i++;
    }
    document.getElementById("Loop") .innerHTML = text;
}

// A string function to display text
function str_Length() {
    var str = "Hello World!";
    var n = str.length;
    document.getElementById("String") .innerHTML = n;
}

// Function for a string of instruments
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Lop() {
    for (Y = 0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments") .innerHTML = Content;
}

// Function for a string of Power Rangers
var Rangers = ["Red", "Yellow", "Black", "Blue", "Pink", "Green"];
var Content = "";
var X;
function for_Lrop() {
    for (X = 0; X < Rangers.length; X++) {
    Content += Rangers[X] + "<br>";
    }
    document.getElementById("Ranger_List") .innerHTML = Content;
}

// Function for cat pics
function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat") .innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

// Function of array displaying certain sentences
function array_Function() {
    var Player_Picture = [];
    Player_Picture[0] = "shooting";
    Player_Picture[1] = "dribbling";
    Player_Picture[2] = "dunking";
    document.getElementById("Array") .innerHTML = "In this picture, the player is " + Player_Picture[1] + " & " + Player_Picture[2] + ".";
}

// Function of constant displaying certain sentences
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant") .innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

// Function to display variables of a sentence
var X = 10;
X = 7;
document.write(X);

function const_Func() {
    const Musical_Instrument = {type:"drum", brand:"Fender", color:"blue"};
    Musical_Instrument.color = "yellow";
    Musical_Instrument.price = "$150";
    document.getElementById("Cont") .innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

// Variable of arithemetic
var X = 82;
document.write(X);
{
    var X = 33;
    document.write("<br>" + X);
}
document.write("<br>" + X);

// Variable of arithemetic
var X = 34;
document.write(X);
{
    let X = 95;
    document.write("<br>" + X);
}
document.write("<br>" + X);

// Function for return statement
function retur_Ment() {
var x = myFunction(4, 3); 
function myFunction(a, b) {
  return a * b;   
}
document.getElementById("ret") .innerHTML = x;
}

// Function for object
function rental_Deion() {
var car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object") .innerHTML = car.description();
}

// Function for breaking statement
function bre_Smt() {
var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 3) {break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("breaking") .innerHTML = text;
}

// Function for continue statement 
function cont_Loop() {
var text = "";
var i;
for (i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>";
}
document.getElementById("cnte") .innerHTML = text;
}