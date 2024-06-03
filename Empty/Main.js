//Array some practical questions:
//====>1
//students array;
const studentArray = [
  { name: "john2", age: 10, major: false },
  { name: "john3", age: 20, major: false },
  { name: "john", age: 28, major: true },
  { name: "doe", age: 30, major: true },
  { name: "donglee", age: 35, major: true },
];

function elderThanStudents(students) {
  return students.filter((ele) => ele.age < 25);
}

let filteredArray = elderThanStudents(studentArray);

console.log(filteredArray);

//=====>>>2
const studentCalc = [
  { name: "john2", age: 10, amount: 3000 },
  { name: "john3", age: 20, amount: 4000 },
  { name: "john", age: 28, amount: 5000 },
  { name: "doe", age: 30, amount: 6000 },
  { name: "donglee", age: 35, amount: 7000 },
];

const mainFunc = (studentCalc) => {
  return studentCalc.reduce((total, student) => total + student.amount, 0);
};

let countStudents = mainFunc(studentCalc);
console.log(countStudents);

//=====>>>3
const studentsCourses = [
  { name: "John Doe", courses: ["Math", "Science", "History"] },
  { name: "Jane Smith", courses: ["Math", "Art", "Biology"] },
  { name: "Jim Brown", courses: ["Science", "History", "Geography"] },
];

function coursesPaidUnique(studentsCourses) {
  // const allCourses = studentsCourses.reduce((accumator, student) => {
  //   return accumator.concat(student.courses);;
  const allCourses = studentsCourses.reduce((accumator, student) => {
    return accumator.concat(student.courses);
  }, []);
  const uniqueCourses = [...new Set(allCourses)];
  return uniqueCourses;
}

const output = coursesPaidUnique(studentsCourses);
console.log(output);
//==========================================================//
const countNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = countNumbers
  .filter((num) => num % 2 !== 0) //odd numbers
  .map((num) => num * num) //square of the numbers
  .reduce((sum, num) => sum + num, 0); //sum of the numbers

console.log(`Sum of all Numbers ${result}`);

//===========================================================//
const originalArray = [1, 2, 3, 4, 5];
const copiedArray = originalArray.slice();
originalArray.push(6);

console.log(copiedArray);
console.log(originalArray);

const originalArray1 = [1, 2, 3, 4, 5];
const copiedArray1 = [...originalArray1];

originalArray1.push(6);
console.log(originalArray1);
console.log(copiedArray1);

//===================================================//
// const arrayElements = ["John", "Jane", "Sam"];
// const objectElements = { ...arrayElements };
// console.log(objectElements);

//without spread
const namesArray = ["John", "Jane", "Sam"];
// const namesObject = {};
// namesArray.forEach((name, index) => {
//   namesObject[index] = name;
// });
// const obj = {};
const namesObject = namesArray.reduce((obj, name, index) => {
  obj[index] = name;
  return obj;
}, {});
console.log(namesObject);

//======================================================//
