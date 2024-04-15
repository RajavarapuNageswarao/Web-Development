//objects -->key value pair
// const objects = {
//   first_name: "john",
//   last_name: "Neena",
//   age: 35,
//   address: {
//     country: "UK",
//     street: "layolaa",
//     company: "capgemini",
//   },
// };
// //using for in loop.
// for (let noun in objects) {
//   console.log(noun + ":" + objects[noun]);
// }

//access the data another properties
// console.log(objects.address.country);

// //checking the property is available or not.
// console.log("first_name" in objects);

// //access the data using . or []
// console.log(objects.first_name);
// //update the data
// console.log((objects.first_name = "leee"));

// //add new properties
// console.log((objects.company = "telsa"));
// console.log(objects);

// //delete the properties
// console.log(delete objects.company);
// console.log(objects);

//Adding new keyword
// const new_keyword = new Object();
// new_keyword.first_name = "mohan";
// new_keyword.last_name = "lee";
// new_keyword.age = 23;

// console.log(new_keyword);

// const keyword = new Object({
//   first_name: "john",
//   last_name: "lenaa",
//   age: 24,
// });
// console.log(keyword.first_name);

const person = {
  first_name: "john",
  last_name: "linkan",
  age: 34,
  greet() {
    console.log("Hello world " + this.first_name);
  },
};
person.greet();
