// //-->objects are in javascript;
// const objects = {
//   first_name: "john",
//   last_name: "lean",
//   age: 34,
//   country: {
//     address: "UK",
//     state: "US",
//   },
// };

// //access the data.
// console.log(objects);
// console.log(objects.first_name);
// console.log(objects.country.state);
// //update the data
// console.log((objects.country.state = "AU"));
// //add new proeperties
// console.log((objects.company = "cap"));
// console.log(objects);
// //delete the data
// console.log(delete objects.company);
// console.log(objects);
// //check the property have or not
// console.log("first_name" in objects);
// //using for in loop
// for (let data in objects) {
//   console.log(data + ":" + objects[data]);
// }

//adding new keyword
// const keyword = new Object();
// keyword.first_name = "john";
// keyword.last_name = "doel";
// keyword.age = 24;
// console.log(keyword.first_name);

//inside the objects using functions this keyword
const fn1 = {
  first_name: "john",
  last_name: "doel",
  age: 30,
  greet() {
    console.log("Hello wolrd : " + this.first_name);
    console.log("Hello wolrd : " + this.last_name);
    console.log("you are age is  :" + this.age);
  },
};
fn1.greet();
