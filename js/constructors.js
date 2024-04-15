//constructor using in javascript
function data(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
  this.getFullname = function () {
    return this.first_name + " " + this.last_name;
  };
}
const person1 = new data("elon", "mosk");
const person2 = new data("man", "she");

console.log(person1.getFullname());
