var user = {
    name:"Ayesha",
    age:27,
    hobby:"reading",
    married:true,
    emergencyContacts: ["mom", "dad"],
    sayHello: function() {
        console.log("Hi there");
    },
};

user.name;
user.age;

// we can add properties

user.favouriteFood="fried chicken";

// or update an existing value

user.name="Ayesha New";

// an interesting distinction. A functions inside an object is
// called a method

