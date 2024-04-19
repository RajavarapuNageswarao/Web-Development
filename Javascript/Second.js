//functions are used:
//global scope
//local scope
//lexical scope

//global scope
//closure:
//a closure is a function having access to the parent scope, even after the perent function has closed.
//a closure is created when the function we define a function, not when function is executed.
// let x = 1;

// const ParentFunction = () => {
//   //local scope
//   let Myvalue = 2;
//   console.log(x);
//   console.log(Myvalue);
//   //lexical scope:
//   const ChildFunction = () => {
//     console.log((x += 5));
//     console.log((Myvalue += 1));
//   };
//   return ChildFunction;
// };
// const newFunc = ParentFunction();
// console.log(newFunc);
// newFunc();

//IIFE(imediently invoked function expression):
//you can add () => operator paramthesis
// const privatefunction = (() => {
//   let initialValue = 0;
//   console.log(`initial value is ${initialValue}`);
//   return () => {
//     initialValue += 1;
//     console.log(initialValue);
//   };
//   //using oprator parathensis
// })();
// privatefunction();
// privatefunction();
// privatefunction();
// privatefunction();

//during game:
// const gameFunction = ((num) => {
//   credits = num;
//   console.log(`initial credits value is ${credits}`);
//   return () => {
//     credits -= 1;
//     if (credits > 0) console.log(`playing game ${credits} crediats`);
//     if (credits <= 0) console.log("not enought credits");
//   };
// })(3);
// gameFunction();
// gameFunction();
// gameFunction();

//__proto__
// const person = {
//   name: "nnnn",
//   lname: "nnnnn",
// };

// const Person = {
//   name: "nnnn",
//   lname: "nnnnn",
// };

// //ES6 is considered getPrototypeOf and setPrototypeOf
// //using instead of __proto__
// Object.setPrototypeOf(person, Person);
// console.log(Object.getPrototypeOf(Person));
// console.log(Person.__proto__);
// console.log(Object.getPrototypeOf(Person) === Person.__proto__);

//iterator function
//recursive function
// const countToten = (num = 1) => {
//   if (num > 10) return;
//   console.log(num);
//   num++;
//   countToten(num);
// };

// countToten();

//curry functions:
// const sandwize = (ingredients1) => {
//   return (ingradients2) => {
//     return (ingradients3) => {
//       return `This is ${ingredients1},${ingradients2},${ingradients3}`;
//     };
//   };
// };
// const myFood = sandwize("non")("mon")("fridge");
// console.log(myFood);

// //let's refactor:
// const reFactor = (ingread1) => (ingread2) => (ingread3) =>
//   `${ingread1},${ingread2},${ingread3}`;
// const resamy = reFactor("turkey")("moon")("reg");
// console.log(resamy);

//details
// const addCustomer =
//   (fn1) =>
//   (...args) => {
//     console.log("Saving customer info......");
//     return fn1(...args);
//   };

// //processing order:
// const ProcessOrder =
//   (fn2) =>
//   (...args) => {
//     console.log(`Processing order #${args[0]}`);
//     return fn2(...args);
//   };

// //completed order;
// const completedOrder =
//   (fn3) =>
//   (...args) => {
//     console.log(`completed order #${[...args].toString} completed`);
//   };

// completedOrder = ProcessOrder(completedOrder);
// console.log(completedOrder);
