var database = [
    {
        name:"ayesha",
        password:"test",
    },
    {
        name:"bob",
        password:"test2",
    },
    {
        name:"sally",
        password:"test3",
    },
    {
        name:"Nosh",
        password:"test5",
    }
];

var newsFeed = [
    {
        username:"ayesha",
        timeline:"something"
    },
    {
        username:"ayesha2",
        timeline:"something2"
    },
    {
        username:"ayesha3",
        timeline:"something3"
    },
]

var userNameFromPrompt = prompt("What is your userName");
var passwordFromPrompt = prompt("Please enter your password");

function isUserValid(user, pass) {
    for(var i =0; i< database.length; i++){
     if(user === database[i].name && pass === database[i].password){
         return true;
     }
    }
    return false;
};

function loginAndViewFeed(user, pass){
    if(isUserValid(user, pass)){
       console.log(newsFeed);
   } else{
       alert("sorry invalid user");
   }
};

loginAndViewFeed(userNameFromPrompt, passwordFromPrompt)
