// Javascript looping
// for; while; do; forEach(new in ECMA5)

var todoList = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
]

// how would you add "!" to every item in the list
// for loops

for(var i=0; i< todoList.length; i++){
    todoList[i]= todoList[i] +"!";
    console.log(todoList[i], i)
}


// forEach

todoList.forEach(function(todo, i){
    console.log(todo, i);
})

// // while loop

// var counter =0;

// while(counter <10){
//     console.log(counter);
//     counter ++;
// }

// var counterTwo = 10;
// while(counterTwo > 0) {
//     console.log(counterTwo);
//     counterTwo--;
// }

// // do

// var doComuter = 10;
// do {
//     console.log(doComuter);
//     doComuter--
// } while(doComuter>0);

