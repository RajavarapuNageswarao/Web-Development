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

//=====2
