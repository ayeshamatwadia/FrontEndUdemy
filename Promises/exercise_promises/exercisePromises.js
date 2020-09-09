// Solve the questions below:

// #1) Create a promise that resolves in 4 seconds and returns "success" string
const fourSecondPromise = new Promise((resolve, reject) => {
  setTimeout(resolve, 400, "success");
})
// incorrect see answers

// #2) Run the above promise and make it console.log "success"
fourSecondPromise.then(result => console.log(result));


// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"
Promise.resolve("success").then(function(value){
  console.log(value);
})

// this is incorrect as well

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed').catch(() =>{
  console.log("Oooops something went wrong")
})

// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'http://swapi.dev/api/people/1',
  'http://swapi.dev/api/people/2',
  'http://swapi.dev/api/people/3',
  'http://swapi.dev/api/people/4'
]

Promise.all(urls).then((values) => {
  console.log(values);
}).catch(()=> console.log("there was an error"))

// this is also incorrect - you forgot to make the call

// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?
// 