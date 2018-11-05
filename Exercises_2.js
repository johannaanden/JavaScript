//  What is this? Does it have an equivalent in Ruby?

// ANSWER:
// this refers to the object that call the function.
// this in JavaScript is the same concept as self in Ruby.

//  The above Person class is written with ES5, now that we've learned about ES2015, convert the above code class to an ES2015 version using the new class syntax
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }
    
    greet() {
        console.log(`Hello, I am ${this.firstName} ${this.lastName}`)
    }
}
   
bob = new Person(“Thomas”, “Ochman”)
bob.greet()
