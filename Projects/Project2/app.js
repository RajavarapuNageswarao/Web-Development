//declare the document type
const containerE1 = document.querySelector(".container");
//store one array
const AppsStreams = [
  "You Tuber",
  "Instuctor",
  "web developer",
  "Singing",
  "web developing",
  "python developer",
  "java developer",
  ".net developer",
  "javascript developer",
];

//declaring the variables we want use in function
let Carrers = 0;
let CharacterIndex = 0;

//declare in one function
//Slice is used to Perform the specific Array conditions

Apps(); //calling function
function Apps() {
  CharacterIndex++;
  //inner html for function declaring the display
  //words
  containerE1.innerHTML = `
<h1>I am ${AppsStreams[Carrers].slice(0, 2) === "I" ? "an" : "a"}
${AppsStreams[Carrers].slice(0, CharacterIndex)}</h1>`;
  //if condition for display proper content
  if (CharacterIndex === AppsStreams[Carrers].length) {
    Carrers = (Carrers + 1) % AppsStreams.length;
    CharacterIndex = 0;
  }
  //timing for display the words
  setTimeout(Apps, 300);
}
