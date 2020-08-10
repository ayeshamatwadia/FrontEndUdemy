var database = [
    {
        name:"ayesha",
        password:"test",
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

function loginAndViewFeed(user, pass){
    if((user === database[0].name) && (pass === database[0].password)){
        console.log(newsFeed);
    }
    else{
        console.log("you failed to login");
    }
};

loginAndViewFeed(userNameFromPrompt, passwordFromPrompt)
