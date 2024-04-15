//control statements--> control flow statements are used
//to control the flow
//of execution in javascript program.
//if statement
// let age = 40;
// let country = "India";
// if (age <= 18 && country == "India") {
//   console.log(`you are a minor your country is ${country}`);
// } else if (age >= 18 && country == "India") {
//   console.log(`You are a adult your country is ${country}`);
// } else {
//   console.log("You are stable person");
// }
//switch statement,
// let age;
// switch (true) {
//   case age <= 18:
//     console.log("You are a minor");
//     break;
//   case age >= 18:
//     console.log("You are a adult");
//     break;
//   default:
//     console.log("You are a nothing to select");
//     break;
// }
//ternator operator
// let age = 16;
// let msg = age >= 18 ? "you are a adult" : "you are a minior";
// console.log(msg);
//loops
// let maps = ["map", "liner", "javascript"];
// for (let dev = 0; dev < maps.length; dev++) {
//   if (maps[dev] === maps[2]) {
//     console.log(
//       "Element at index",
//       dev,
//       "is equal to the first element:",
//       maps[dev]
//     );
//   }
// }
//functions;
//arugements,parameters passing in javascript
// function first_func(first_name, last_name = "0") {
//   console.log("Hi " + first_name + last_name);
// }
// first_func("john ");
//This is for default parameter
// function second_func(a, b = 0) {
//   console.log(a + b);
// }
// second_func(10);
//return keyword using in javascript
// Function that takes another function (callback) as an argument
//callback functions are used in javascript;
// function greet(name, callback) {
//   console.log("Hey Hi!!! " + name);
//   callback();
// }
// function callback_func() {
//   console.log("good bye");
// }
// greet("alice ", callback_func);
//anonymous functions
// let anonymous_function = function (x, y) {
//   console.log(x + y);
// };
// anonymous_function(4, 5);
//simple example of anynomun functions
// setTimeout(function () {
//   console.log("Hey this is for time considering!");
// }, 2000);
// setTimeout(function () {
//   console.log("This is for demo purpose!");
// }, 1000);
