//All array methods
const mainArray = ["John", "Doe", "Symbol", "Neena"];
const concatMethod = ["hub", "cyber", "security"];
const stringMethod = [1, 2, 3, 4, 5];
const includesMethod = "Hello wolrd";

function mainFunc() {
  mainArray.push("push", "method", "dev", "prod", "demo", "main", "purpsoe"); //added last element
  mainArray.pop(); // remove the last element.
  mainArray.shift(); // remove first element
  mainArray.unshift("development", "production"); // added first element
  mainArray.splice(1, 4, "hello", "Hii"); //condition indexes printing for param limit
  const sliceMethod = mainArray.slice(1, 5); //new Array
  const concationMethod = mainArray.concat(concatMethod); //new Array
  const strinngMethod = mainArray.join(" and "); //new string
  let indexOfMethod = mainArray.indexOf("hello", 2); // returns an array
  let lastIndexOfMethod = mainArray.lastIndexOf("dev", 3);
  let methodForIncludes = includesMethod.includes("Hello"); //second param
  // let findMethod = stringMethod.find((element) => {
  //   return element;
  // });
  //return true or false.
  /*
   */
  // const stringMethods = stringMethod.toString();
  //return all methods store in one object.
  return {
    mainArray,
    sliceMethod,
    concationMethod,
    strinngMethod,
    indexOfMethod,
    lastIndexOfMethod,
    methodForIncludes,
    // findMethod,
    // indexof,
    // stringMethods,
  };
}

function logs() {
  const {
    sliceMethod,
    concationMethod,
    strinngMethod,
    mainArray,
    indexOfMethod,
    lastIndexOfMethod,
    methodForIncludes,
    // findMethod,
    // indexof,
    // stringMethods,
  } = mainFunc();
  // console.log(findMethod);
  console.log(methodForIncludes);
  console.log(indexOfMethod);
  console.log(lastIndexOfMethod);
  console.log(stringMethod.toString());
  console.log(strinngMethod);
  console.log(concationMethod);
  console.log(sliceMethod);
  console.log(mainArray);
}

logs();

console.log(`This is Main array :::::${mainArray}`);
