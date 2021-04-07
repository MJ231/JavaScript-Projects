function my_Dictionary() { //Defining a function and naming it
    var Animal = {         //Giving specific variables to the function
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    document.getElementById("Dictionary") .innerHTML = Animal.Color; //Putting a "Dictionary" id to HTML so the function will work 
}

var t = [];                 //Defining a function and naming it
function add() { 
    var t1 = document.getElementById('t1').value;   //Giving specific variables to the function
    var t2 = document.getElementById('t2').value;
    t.push({key:t1, value:t2});
    render();                                       //Putting a keyword to the function so it will work
}

function render() {         //Defining a function and naming it
    var html = '';          //Giving specific variables to the function
    t.forEach(function(element) {
      html += element['key'] +' = ' + element['value'] + '<br/>';
    })
    document.getElementById('p1').innerHTML = html;     //Putting a "p1" id to HTML so the function will work
}

function my_Dictionary() {  //Defining a function and naming it
    var Animal = {          //Giving specific variables to the function
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary") .innerHTML = Animal.Sound;        //Putting a "Dictionary" id to HTML so the function will work
}
