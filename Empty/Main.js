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
// const namesObject = namesArray.reduce((obj, name, index) => {
//   obj[index] = name;
//   return obj;
// }, {});
// console.log(namesObject);

// const referenceArray = namesArray.reduce((obj, item, index) => {
//   obj[index] = item;
//   return obj;
// }, {});
// console.log(referenceArray);
const emptyObject = {};
namesArray.forEach((name, index) => {
  emptyObject[index] = name;
});
console.log(emptyObject);

//======================================================//
const students = [
  { id: 1, fullName: "John Doe", age: 20 },
  { id: 2, fullName: "Jane Smith", age: 22 },
  { id: 3, fullName: "Sam Johnson", age: 21 },
];

function convertArrayToObject(studentsArray) {
  const emptyObject = {};
  studentsArray.forEach((student) => {
    emptyObject[student.id] = {
      fullName: student.fullName,
      age: student.age,
    };
  });
  return emptyObject; // Moved the return statement outside of the forEach loop
}

const outputArray = convertArrayToObject(students);
console.log(outputArray);

//=========================================================//
const books = [
  { title: "Book1", author: "Author1", publicationYear: 2001 },

  { title: "Book2", author: "Author2", publicationYear: 2005 },

  { title: "Book3", author: "Author3", publicationYear: 2010 },
];

// function convertBooksArrayToObject(booksElements) {
//   const bookObject = {};
//   booksElements.forEach((book) => {
//     bookObject[book.title] = {
//       author: book.author,
//       publicationYear: book.publicationYear,
//     };
//   });

//   return bookObject;
// }

// const bookOutput = convertBooksArrayToObject(books);
// console.log(bookOutput);

const objetArray = Object.assign(
  {},
  ...books.map((book) => ({
    [book.title]: {
      author: book.author,
      publicationYear: book.publicationYear,
    },
  }))
);

console.log(objetArray);

///===========================================///

const sortNumbers = [1, 2, 3, 7, 4, 5, 6];

function sortFunction(sortNumbers) {
  return sortNumbers.sort((a, b) => a - b);
}
const asendingOrder = sortFunction(sortNumbers);
console.log(asendingOrder);
