// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

// it should look like this:
'     ||<- Start line'
'       🐢'
'       🐇'
turtle.padStart(7);
rabbit.padStart(7);
// when you do:

console.log(startLine);
console.log(turtle);
console.log(rabbit);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, '=');
// adds 7 =s to the end of the turtle


// #3) Get the below object to go from:
let obj = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}

let finishString ="";

Object.entries(obj).map(arr => {
  finishString = `${finishString} ${arr[0]} ${arr[1]}`;
})

// to this:
'my name is Rudolf the raindeer'

// answer in the solutions
Object.entries(obj).map(value => value.join(" ")).join(' ')
