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

var userName = prompt("What is your userName");
var password = prompt("Please enter your password");

if((userName === database[0].name) && (password === database[0].password)){
    console.log(newsFeed);
}
else{
    console.log("you failed to login");
}