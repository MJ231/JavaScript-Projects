function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input") .value;
    var Color_String = " is a great color!";
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Black":
            Color_Output = "Black" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Teal":
            Color_Output = "Teal" + Color_String;
        break;
        case "Silver":
            Color_Output = "Silver" + Color_String;
        break;
        default:
        Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output") .innerHTML = Color_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0] .innerHTML = "The text has changed!";
}

var c = document.getElementById("Picture");
var ctx = c.getContext("2d");
var my_gradient = ctx.createLinearGradient(0, 0, 170, 0);
my_gradient.addColorStop(0, "black");
my_gradient.addColorStop(0.5, "red");
my_gradient.addColorStop(1, "white");
ctx.beginPath();
ctx.arc(155,50,40,0,2*Math.PI);
ctx.stroke();
ctx.font = "30px Arial";
ctx.fillText("Hello World", 80, 120);
ctx.fillStyle = my_gradient;
ctx.fillRect(10, 10, 90, 90);
