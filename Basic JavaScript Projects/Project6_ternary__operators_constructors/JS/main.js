// Function for Ternary Operators 
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height") .value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride") .innerHTML = Can_ride + " to ride.";
}
// Function for Ternary Operators
function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age") .value;
    Can_vote = (Age < 18) ? "You are not old enough to vote":"You can register";
    document.getElementById("Vote") .innerHTML = Can_vote + " to vote!";
}
// Constructor function for Vehicle objects
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
// Variable Function for three Vehicles
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("New_and_This") .innerHTML = "Emily drives a " + Emily.Vehicle_Color + "-colored " +
    Emily.Vehicle_Model + " manufactured in " + Emily.Vehicle_Year;
}
// Constructor function for Person objects
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
// Variable Function for one person 
var myFather = new Person("John", "Doe", 50, "blue");
function Age_Function() {
    document.getElementById("demo") .innerHTML =
    "My father is " + myFather.age + ".";
}
// Nested Function for arithemetic
function count_Function() {
    document.getElementById("Counting") .innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}
// Nested Function for arithemetic
function number_Function() {
    document.getElementById("Numbering") .innerHTML = Number();
    function Number() {
        var Starting_point = 5;
        function Minus_two() {Starting_point -= 2;}
        Minus_two();
        return Starting_point;
    }
}