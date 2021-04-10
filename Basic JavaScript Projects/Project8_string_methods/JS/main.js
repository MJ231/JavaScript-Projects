// Written function for the Concatenate Sentence
function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence. ";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate") .innerHTML = whole_sentence;
}

// Written function for the Slice Method
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice") .innerHTML = Section;
}

// Written function for the Slice Method
function sliceMethod() {
    var Sentence = "You seem to be happy.";
    var Section = Sentence.slice(9,20);
    document.getElementById("Newslice") .innerHTML = Section;
}

// Written function for the Uppercase Method
function uppercase_Method() {
    var str = "Hello You!";
    var res = str.toUpperCase();
    document.getElementById("Uppercase") .innerHTML = res;
}

// Written function for the Search Method
function search_Method() {
    var str = "Visit Tech Academy!";
    var n = str.search("Tech Academy");
    document.getElementById("Search") .innerHTML = n;
}

// Written function for the String Method
function string_Method() {
    var X =182;
    document.getElementById("Numbers_to_string") .innerHTML = X.toString();
}

// Written function for the String Method
function str_Method() {
    var Y =190;
    document.getElementById("Numberto_str")  .innerHTML = Y.toString();
}

// Written function for the Precision Method
function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision") .innerHTML = X.toPrecision(10);
}

// Written function for the Precision Method
function preMethod() {
    var Y = 13456.4012881111009;
    document.getElementById("Precis") .innerHTML = Y.toPrecision(10);
}

// Written function for the Fixed Method
function fixed_Function() {
    var num = 6.55789;
    var n = num.toFixed(3);
    document.getElementById("fixed") .innerHTML = n;
}

// Written function for the Value Method
function value_Method() {
    var num = 21;
    var x = num.valueOf()
    document.getElementById("Value") .innerHTML = x;
}