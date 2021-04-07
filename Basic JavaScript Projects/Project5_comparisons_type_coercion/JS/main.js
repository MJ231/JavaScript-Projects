document.write(typeof 4);   //Written document method and type of operator with variable

document.write("10" + 5);   //Written document method and type of operator with variable

function my_Function() {    //Defining a function and naming it
    document.getElementById("Test") .innerHTML = 0/0; //Putting a "Test" id to HTML document so it will work
}

function my_Function2() {   //Defining a function and naming it
    document.getElementById("Test1") .innerHTML = isNaN('This is a string');    //Putting a "Test1" id to HTML document so it will work
}

function my_Function3() {   //Defining a function and naming it
    document.getElementById("Test2") .innerHTML = isNaN('007'); //Putting a "Test2" id to HTML document so it will work
}

function my_Function4() {   //Defining a function and naming it
    document.getElementById("Test3") .innerHTML = (2E310);  //Putting a "Test3" id to HTML document so it will work
}

function my_Function5() {   //Defining a function and naming it
    document.getElementById("Test4") .innerHTML = (5 > 10 || 10 > 4);   //Putting a "Test4" id to HTML document so it will work
}

function my_Function6() {   //Defining a function and naming it
    document.getElementById("Test5") .innerHTML = (3 == 11);    //Putting a "Test5" id to HTML document so it will work
}

function my_Function7() {   //Defining a function and naming it
    document.getElementById("Test6") .innerHTML = (10 == 10);   //Putting a "Test6" id to HTML document so it will work
}

function my_Function8() {   //Defining a function and naming it
    X = 10;
    Y = 10;
    document.getElementById("Test7") .innerHTML = (X === Y);    //Putting a "Test7" id to HTML document so it will work
}

function my_Function9() {   //Defining a function and naming it
    document.getElementById("Test8") .innerHTML = (5 > 10 && 10 > 4);   //Putting a "Test8" id to HTML document so it will work
}

function not_Function() {   //Defining a function and naming it
    document.getElementById("Not") .innerHTML = ! (5 > 10); //Putting a "Not" id to HTML document so it will work
}