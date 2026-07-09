// Boolean 

// boolean  have one two value True and false .
// The Boolean value of an expression is the basis for all JavaScript comparisons and conditions.

// Key Boolean Characteristics
// true and false are boolean data types
// true and false are the only possible boolean values
// true and false must be written in lowercase
// true and false must be written without quotes

// Booleans are extensively used in if statements to determine the code blocks to execute based on the logic.

// Booleans are extensively used in loops to determine conditions for looping.

// You can use the Boolean() function to find out if an expression (or a variable) is true:

Boolean(10 > 9)

// Everything With a "Value" is True

// -15 is true

// true is true

// "Hello" is true

// "false" is true

// (7 + 1 + 3.14) is true

// [ ] is true

// { } is true

// Everything Without a "Value" is False

// 0 is false

// "" is false

// undefined is false

// null is false

// NaN is false

// false is false

console.log(true);
console.log(false);
console.log(Boolean(true));

// +++++++ if Statement +++++

// Use the JavaScript if statement to execute a block of code when a condition is true.

if (true) {
    console.log('hi'); // output : hi    
}

// You can use an if statement inside another if statement:

if (age == 12) {
    if (Name == 'ali') {
        console.log('You Are Pass');
    }
}

// Nested if statements can make your code more complex.

// A better solution is to use the logical AND operator:

if (age == 12 && name == 'ali') {
    console.log('You Are Pass');
}

// else Statement

// Use the else statement to specify a block of code to be executed if a condition is false.
let hour = 20;
if (hour < 18) {
    console.log("Good day")
} else {
    console.log("Good evening")
}

// +++++++else if Statement+++++++

// Use the else if statement to specify a new condition if the first is false.

if (1 > 2) {
    console.log('if');
} else if (1 == 1) {
    console.log('else if');
} else {
    console.log('else');
}

//  or Operator ||

console.log(true || false); // output : true  
console.log(!false); // output : true

// +++++Ternary Operator++++

console.log(0 ? 'true' : 'false');

// The conditional operator is a shorthand for writing conditional if...else statements.

// It is called a ternary operator because it takes three operands.

// Syntax
// (condition) ? expression1 : expression2

// Guard Operator

console.log(true && "Hello");       // "Hello" (First is truthy, returns second)
console.log(false && "Hello");       //  (First is falsy, short-circuits)

//default operator+++++

// Often used as a "default operator," the || operator returns the right - hand operand
// if the left - hand operand is "falsy"(like null or undefined).

console.log(false || 'ali'); //outPut 'ali'

