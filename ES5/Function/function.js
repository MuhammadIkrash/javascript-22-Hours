// What are Functions?
// Functions are reusable code blocks designed for particular tasks
// Functions are executed when they are called or invoked
// Functions are fundamental in all programming languages

function msg() {
    console.log('hello');
}

// Functions are executed when they are called or invoked
// You call a function by adding parentheses to its name: name()

msg(); // hello

// Parameters allow you to send values to a function
// Parameters are listed in parentheses in the function

function mess(sayHi) {
    console.log(sayHi);
}

// Function Return Values
// A function can return a value back to the code that called it
// The return statement is used to return a value from a function

mess('hay'); // hay


// Function Arguments
// Function parameters and arguments are distinct concepts
// Parameters are the names listed in the function definition
// Arguments are the values received by the function

mess('jan'); // hay

// A function expression is a function stored in a variable
// The variable name can be used to call the function

let _function = function ha(params) {
    console.log(1 + 2);
}
_function();

// Arrow Functions (Es6)
// Arrow Functions is a short syntax for function expressions
// You can skip the function keyword
// You can skip the return keyword
// You can skip the curly brackets

let arrowFunction = (val1, val2) => {
    return (val1 * val2);
}
console.log(arrowFunction(1, 3));


// Example 1

// Celsius To Fahrenheit 
let covC = (Celsius, Fahrenheit) => {
    Celsius = 24
    Fahrenheit = ((Celsius * 9) / 5) + 32
    return `${Fahrenheit} °F `
}
console.log(covC());

// Example 2

// Fahrenheit To  Celsius 
let covF = (Celsius, Fahrenheit) => {
    Fahrenheit = 4
    Celsius = ((Fahrenheit - 32) * 5) / 9
    return `${Celsius} °C `
}
console.log(covF());
