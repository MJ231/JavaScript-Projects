function myFunction() {                     //Defining a function and naming it
    var sentence = "I am learning!";        //Defining a variable and giving it a
                                            //string value
    sentence += " a lot from this book!";    //Using a sentence operator
                                            //str variable
    document.getElementById("Concatenate").innerHTML = sentence;   //Putting the value
                                                            //of sentence into HTML element with "Concatenate" id
}