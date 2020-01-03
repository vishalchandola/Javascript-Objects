class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
}

var userOne = new User("vishal@hotmail.com", "Vishal");
var userTwo = new User("kartik@yopmail.com", "Kartik");

console.log(userOne);
console.log(userTwo);

// the 'new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constructor method
