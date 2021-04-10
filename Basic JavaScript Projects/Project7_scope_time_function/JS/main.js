// Global Variable
var X = 10;
function Add_numbers_1() {
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();

// Local Variable Function
function Add_numbers_1() {
    var X = 10;
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
    }
Add_numbers_1();
Add_numbers_2();

// Console Log Debugging Function
function Add_numbers_1() {
    var X = 10;
    console.log(15 + X);
}
function Add_numbers_2() {
    console.log(X + 100);
}
Add_numbers_1();
Add_numbers_2();

// If statement pertaining a variable
if (1 < 2) {
    document.write("The left number is less than the number on the right.");
}

// Function containing a greeting message
function getWeek() {
    if (21 > 18) {
    document.getElementById("Greeting") .innerHTML = "How are you today?";
    }
}

// Function containing a greeting message
function getMonth() {
    if (16 > 15) {
    document.getElementById("Hello") .innerHTML = "You are Cool!";
    }
}

// If statement pertaining a variable
if (20 > 18) {
    document.write("The left number is greater than the number to the right.");
}

// Else Statement about voting age
function Age_Function() {
    Age = document.getElementById("Age") .value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?") .innerHTML = Vote;
}

// Else Statement about the time
function Time_Function() {
    Time = document.getElementById("Time") .value;
    if (Time >= 13) {
        todaysDay = "The time is past 13!";
    }
    else {
        todaysDay = "The time is not past 13!";
    }
    document.getElementById("What_is_the_date?") .innerHTML = todaysDay;
}

// Else statement about the date
function Time_function() {
    var Time = new Date() .getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day") .innerHTML = Reply;
}