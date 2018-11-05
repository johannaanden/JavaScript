// Create an array and add three numbers to it.
my_array = [25, 50, 75]

// Use your array to return the second number.
console.log(1)

// What data type is 123/12? "Things in quotes!"? undefined?
// 123/12 = number
// "Things in quotes!" = String
// undefined = undefined

// Write an if statement that returns true.
let isEven = function(number) {
    return number % 2 === 0;
  };
  
  console.log(isEven(4));


// Consider these two arrays: myArray = ['Thomas', 'Amber', 'Raoul'] and emptyArray = []. 
//Use a for loop to add our names to emptyArray. (Hint: n needs to be the length of the array. Google a helper method for finding the length of an array in Javascript. Is it the same as Ruby?)
let myArray = ['Thomas', 'Amber', 'Raoul'];
let emptyArray = [];

for (let i=0; i < myArray.length; i++) {
    emptyArray.push( myArray[i] );
}

console.log(emptyArray, myArray);