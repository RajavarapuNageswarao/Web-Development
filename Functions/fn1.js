const startBtnGame = document.getElementById("start-button");
//global variables
const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER = "ROCK";
let gameisrunning = false;
//user choice for game
const getPlayerChoice = function () {
  //user prompt
  const selection = prompt(
    `Enter ${PAPER}, ${SCISSORS}, or ${ROCK}`,
    ""
  ).toUpperCase();
  //if condition for user enter the selection
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice! we choose ${DEFAULT_USER} for you!`);
    return DEFAULT_USER;
  }
  return selection;
};

//main function
startBtnGame.addEventListener("click", function () {
  if (gameisrunning) {
    return;
  }
  gameisrunning = true;
  console.log("Game is starting!!!");
  //declare the local varibales
  const localVariables = getPlayerChoice();
  console.log(localVariables);
});
