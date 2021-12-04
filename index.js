var readlineSync = require("readline-sync");
var chalk = require("chalk")


//List of questions
var quizList = [
  {
    question: "In what city is Saul working (as a Cinnabon manager) at the start of episode 1? ",
    options: ["Orange County", "Omaha", "Illinois"],
    answer: 1
  },
  {
    question: "Who said, \"Slippin' Jimmy with a law degree is like a chimp with a machine gun?\" ",
    options: ["Chuck", "Nacho", "Mike"],
    answer: 0
  },
  {
    question: "What is \"Nacho's\" real name? ",
    options: ["Ignacio Varga", "Hector Salamanca", "Howard Hamlin"],
    answer: 0
  },
  {
    question: "Where were the Kettlemans hiding the stolen money? ",
    options: ["Behind a wall", "Under their mattress", "Under the bathroom sink"],
    answer: 2
  },
  {
    question: "In what city did Mike work as a police officer? ",
    options: ["Boston", "Philadelphia", "Nantucket"],
    answer: 0
  },
  {
    question: "From what university did Jimmy McGill receive his law degree? ",
    options: ["University of New Mexico", "Harvard University", "University of American Samoa"],
    answer: 2
  },
  {
    question: "What does Chuck \"suffer\" from? ",
    options: ["Light sensitivity", "Cryptophobia", "Electromagnetic hypersensitivity"],
    answer: 2
  },
  {
    question: "What is Saul Goodman's real name? ",
    options: ["James Morgan McGill", "James Jones McGill", "Jeffrey James McGill"],
    answer: 0
  },
  {
    question: "Who is the dealer on the other side of Pryce's first drug deal (for which Mike acts as bodyguard)? ",
    options: ["Tuco", "No-Doze", "Nacho"],
    answer: 2
  },
  {
    question: "Which nursing home does Jimmy make his first big case? ",
    options: ["Sandpiper Crossing", "Home of Old Hearts", "Alberquerque Seniors Center"],
    answer: 0
  },
]

//Play each question
function letsplay(question, options, answer){
  var userAnswer = readlineSync.keyInSelect(options, question, {cancel: 'Exit'});

  console.log("\n")

  if(userAnswer === answer){
    console.log(chalk.bgGreen("S'ALL GOOD, MAN! Correct Answer!"));
    score += 1
  } else if(userAnswer === -1){
    console.log(chalk.bgYellow("Sorry to see you leave! Exiting game..."));
    return;
  } else {
    console.log(chalk.bgRed("Dont be a Slippin' Jimmy! Wrong Answer!"));
  }

  console.log("Your sentencing count: " + chalk.magenta(score));
  console.log("----------------------------------------");

}

//Score counter
var score = 0;

//Scoreboard
var scoreBoard = [
  {
    name: "Omar",
    score: 7
  },
  {
    name: "Namya",
    score: 4
  },
  {
    name: "George",
    score: 3
  }
]

//introduction of game
var playerName = readlineSync.question("What's your name? ");
console.log(chalk.bgCyan("Welcome " + playerName + " to the BETTER CALL SAUL QUIZ!!"));
console.log(chalk.bold("*Song from Little Barrie's album plays....*"));
console.log("----------------------------------------");
console.log("\n");
console.log("This quiz contains 10 questions covering all 5 seasons of Better Call Saul. Do you have what it takes to answer them all?");
console.log("LET'S BEGIN");

//Loop through each question
for(var i=0; i<quizList.length; i++){
  letsplay(quizList[i].question, quizList[i].options, quizList[i].answer)
}

//end of game
console.log("\n")
console.log("YAY!! You scored " + score + " points!")
console.log("\n")
console.log("How did you do? Check out the scoreboard below!");
console.log("If you got a highscore, ping me the proof and I'll update it here!!");

//display scoreboard
console.log("\n")
console.log("SCOREBOARD");
for(var i=0; i<scoreBoard.length; i++){
  console.log(scoreBoard[i].name + " : " + scoreBoard[i].score);
}