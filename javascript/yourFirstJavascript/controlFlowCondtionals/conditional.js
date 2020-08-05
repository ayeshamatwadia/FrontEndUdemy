// if else if and else

var name = "Ayesha";

if(name === "Ayesha") {
    alert("Hi Ayesha");
} 
else if (name === "Susy") {
    alert("Hi there susy");
}
else {
    alert("Hi I don't know you");
}

// logical operators - && || !

if(name === "Ayesha" || name === "Billy") {
    alert("hello someone");
}

var firstName = "Bob";
var lastName = "Smith";
if(firstName === "Bob" && lastName === "Smith") {
    alert("Hi Bob Smith");
}

if(!(firstName === "Bob")){
    alert("Hi not Bob");
}