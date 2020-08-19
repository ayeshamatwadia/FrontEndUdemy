// Solve the below problems:
// Remember 2 inclusions for es7 were .includes and exponential operator

// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.includes('John');

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
let s = false;
dragons.forEach(element => {
    if (element.includes("John")){
        s = true;
    }
})

// better answer from solution dragons.filter(name => name.includes('John'))


// #3) Create a function that calulates the power of 100 of a number entered as a parameter
function power100(x) {return x**100;} 

// new syntax const power100 = (num) => num**100;

// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result

// you get infinity because the number is larger than the Number max_value
// which is 1.79e+308 - you should probably use BigInt in this case