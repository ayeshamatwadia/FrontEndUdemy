// Creating a function using function delaration

function sayHello() {
    console.log("Hello");
}
// This is defining the functions we still need to call it

sayHello();

// 2nd way of creating a fcuntion - function expression

var sayBye = function() {
    console.log("Bye");
}

// again we need to call this

sayBye();

// Let's talk about the function that has been assigned to sayBye variable
// What is the name of it (ie sayHello's function name is well.. sayHello)
// the function has no name - it is an anonymous function

// functions with arguments/parameters

function sing(lyrics){
    console.log(lyrics);
}

sing("lalala");
sing("dededededde");

function multiply(a, b) {
    a*b;
}

// remember to add returns to your functions in js, the above will return undefined when called
function multiply(a, b) {
    return a*b;
}

function returnIsTheLastStatement() {
    return 1;
    return 2;
    return 10;
}

// the 2nd 2 return statements are unreachable code - the will not be executed and the fucntion will
// exit after the first return

