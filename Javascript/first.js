//object destructoring:
//another method also used instead of objects
//using of objects literals syntax
let firstname = "bill";
let lastname = "gates";
let age = 34;
const Person = {
  firstname,
  lastname,
  age,
};
let { firstname: fname, lastname: lname, age: aged } = Person;
console.log(`Hi ${fname} ${lname} Your age is ${aged}`);

//classes:
//two types class
//named class:
//unnamed class
class Example {
  //using the constructor inside class
  constructor(name, lname) {
    this.firstname = name;
    this.lastname = lname;
  }
  //using get method
  get method() {
    return console.log("Hello " + this.firstname);
  }
  //using set method
  set method(NewValue) {
    this.firstname = NewValue;
  }
}
const example1 = new Example("bill", "gates");
//using get method
console.log(example1.method);
//using set method
example1.ChangeName = "Avinash";
console.log(example1.ChangeName);

//another method using class no name
//it will store the variable
let AnotherMethod = class {
  //using the constructor inside class
  constructor(name, lname) {
    this.firstname = name;
    this.lastname = lname;
  }
  //using get method
  get method() {
    return console.log("Hello " + this.firstname);
  }
  //using set method
  set method(NewValue) {
    this.firstname = NewValue;
  }
};
const example2 = new AnotherMethod("bill", "gates");
//using get method
console.log(example2.method);
//using set method
example1.ChangeName = "Avinash";
console.log(example2.ChangeName);

//inheritence:
class Inheritence {
  constructor(age, department) {
    this.age = age;
    this.department = department;
  }
  get Method() {
    return "Hello " + this.department;
  }
}

class OneInheritence extends Inheritence {}
const Student1 = new OneInheritence(23, "IT");
console.log(Student1.Method);

//static method:
class StaticMethod {
  constructor(name) {
    this.firstname = name;
  }
  static getMethod(x) {
    return "Hello " + x.firstname;
  }
}
const Person1 = new StaticMethod("john");
console.log(StaticMethod.getMethod(Person1));
