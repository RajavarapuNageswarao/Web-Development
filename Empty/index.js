//All array methods
const mainArray = ["John", "Doe", "Symbol", "Neena"];
const concatMethod = ["hub", "cyber", "security"];

function mainFunc() {
  mainArray.push("push", "method", "dev", "prod"); //added last element
  mainArray.pop(); // remove the last element.
  mainArray.shift(); // remove first element
  mainArray.unshift("development", "production"); // added first element
  mainArray.splice(1, 4, "hello", "Hii"); //condition indexes printing for param limit
  const sliceMethod = mainArray.slice(1, 5); //new Array
  const concationMethod = mainArray.concat(concatMethod); //new Array
  const strinngMethod = mainArray.join(" and "); //new string
  //return all methods store in one object.
  return { mainArray, sliceMethod, concationMethod, strinngMethod };
}

function logs() {
  const { sliceMethod, concationMethod, strinngMethod, mainArray } = mainFunc();
  console.log(strinngMethod);
  console.log(concationMethod);
  console.log(sliceMethod);
  console.log(mainArray);
}

logs();
