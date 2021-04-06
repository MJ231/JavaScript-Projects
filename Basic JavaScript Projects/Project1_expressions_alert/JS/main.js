window.alert("Hello, World!");
document.write("Coding is cool");

var J = "Coding is a challenge";
document.write(J);

var red = "Red with envy.";
var red = red.fontcolor("red");
document.write(red);

var Family = "The Johnsons", Dad = "Joe", Mom = "Jane", Son = "Jack";
document.write(Mom);

var B = "Coding" + "String"
document.write(B)

document.write("\"Be yourself," + " because you should!\"" + "-Jordan");

function My_First_Function() {              //Defining a function and naming it
    var str = "This text is purple!";        //Defining a variable and giving it a
                                            //string value
    var result = str.fontcolor("purple");    //Using the fontcolor method on
                                            //str variable
    document.getElementById("Purple_Text").innerHTML = result;   //Putting the value
                                                            //of result into HTML element with "Purple_Text" id
}