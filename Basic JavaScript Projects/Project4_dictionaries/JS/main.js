function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    document.getElementById("Dictionary") .innerHTML = Animal.Color;
}

var t = [];     
function add() { 
    var t1 = document.getElementById('t1').value;
    var t2 = document.getElementById('t2').value;
    t.push({key:t1, value:t2});
    render();
}

function render() {
    var html = '';
    t.forEach(function(element) {
      html += element['key'] +' = ' + element['value'] + '<br/>';
    })
    document.getElementById('p1').innerHTML = html;
}

function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary") .innerHTML = Animal.Sound;
}