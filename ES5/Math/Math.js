console.log(2 + 2); // 4 
console.log(2 * 2); // 4 
console.log(2 / 2); // 1 
console.log(2 - 2); // 0 
// Math Object 
// The Math object allows you to perform mathematical tasks on numbers.
//                                      <====================================>
// Operators
// + (addition)
// - (subtraction)
// * (multiplication)
// / (division)

//                                      <====================================>

// oder of operations
// * and / are performed before + and - performed after * and / are performed, and operations with the same precedence are performed from left to right.


// Example:
console.log(2 + 3 * 4); // 14 Because multiplication is performed before addition
// if we want to change the order of operations, we can use parentheses to group the operations.
console.log((2 + 3) * 4); // 20 Because the operations inside the parentheses are performed first

//                                      <====================================>

// Decimal numbers

// javaScript also supports decimal numbers, which are represented using the Number type. You can perform math operations on decimal numbers just like you would with whole numbers.

// Example:
console.log(2.5 + 3.5); // 6
console.log(2.5 * 3.5); // 8.75

//                                      <====================================>

//Exercise 1: Use the Math Object to perform the following tasks: 
// plus 5 and 10
// minus 5 and 10
// times 5 and 10
// divide 5 and 10
console.log(5 + 10) // 15
console.log(5 - 10); // -5
console.log(5 * 10); // 50
console.log(5 / 10); // 0.5

//                                      <====================================>

// Exercise 2: Add to Card Item Total Price

const ballPrice = 20.95;
const numberOfBalls = 1;
const SocksPrice = 10.90;
const socksNumber = 2;
const ShippingFee = 4.99;
const EstimatedTax = 4.77;
const totalPrice = (ballPrice * numberOfBalls) + (SocksPrice * socksNumber) + ShippingFee + EstimatedTax // totalPrice = (20.95*1) + (10.90*2) + 4.99 + 4.77
console.log(totalPrice); // 52.51

//                                      <====================================>

//Exercise 3: Calculate The 10% Tax Price of an Item

const item1Price = 20.95;
const item2Price = 7.99;
const numberOfItems = 2;
const taxPercent = 0.1;
const tax10Percent = (item1Price + (item2Price * numberOfItems)) * taxPercent // tax10Percent = (20.95+7.99*2)*0.1
console.log(tax10Percent); // 3.694

//                                      <====================================>

// Exercise 4: Calculate the Total Price of Orders
let soupPrice = 10;
let soupQuantity = 1;
let burgerPrice = 8;
let burgerQuantity = 3;
let iceCreamPrice = 5;
let iceCreamQuantity = 1;
let totalOrderPrice = ((soupPrice*soupQuantity)+(burgerPrice*burgerQuantity)+(iceCreamPrice*iceCreamQuantity));
console.log(totalOrderPrice); 

//                                      <====================================>
// Exercise 5: Calculate the Total Price of Orders 

console.log(18.50+(7.50*2)); // 33.50

//                                      <====================================>
// exercise 6: Calculate the Total Price of Orders with 10% Tax

console.log(18.50+(7.50*2))*0.1; // 3.35
//                                      <====================================>

// Exercise 7: Calculate the Total Price of Orders with 20% Tax

console.log(18.50+(7.50*2))*0.2; // 6.70

//                                      <====================================>

// How to Find % of a number

console.log(10 / 100); // 0.1 
// To find the percentage of a number, you can multiply the number by the percentage (as a decimal). For example, to find 20% of 50, you would do:
console.log(20/50); // 0.4
console.log(0.4 * 100); // 40%

//                                      <====================================>

//  converting Cents to Dollars

console.log((2095+799)/100); // 28.94
// for example, if you have a price in cents and you want to convert it to dollars, you can divide the price by 100. For example, if you have a price of 2095 cents and 799 cents, you can convert it to dollars like this:

//                                      <====================================>

// Uses of Math Operations
// above are the basic math operations, but the Math object has many more methods that can be used for various purposes. like:
// Math.round() - rounds a number to the nearest integer

console.log(Math.round((2095+799)*0.1)/100); 

//                                      <====================================>

// Math.ceil() - rounds a number up to the next largest integer

console.log(Math.ceil('2.8')); // 3

// The Math.ceil() method in JavaScript rounds a number up to the next largest integer (or smallest integer greater than or equal to the number). As a static method of the Math object, it is always used as Math.ceil(x) rather than on a created object, returning the same value as -Math.floor(-x)

//                                      <====================================>

// Math.floor() - rounds a number down to the next smallest integer

console.log(Math.floor('2.32'));

// The Math.floor() static method in JavaScript rounds a number down to the nearest integer, returning the largest integer less than or equal to the input. It operates on both positive and negative numbers by shifting them toward negative infinity, ensuring they are rounded down.

//                                      <====================================>


// Math.random() - generates a random number between 0 and 1
// Math.max() - returns the largest of zero or more numbers
// Math.min() - returns the smallest of zero or more numbers