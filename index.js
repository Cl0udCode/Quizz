
var Readlinesync = require("readline-sync");
const chalk = require('chalk');



 
const ques = chalk.bold.red;
const ans = chalk.keyword('orange');

userAnswer = Readlinesync.question("what is your name?")


console.log("welcome "+ans(userAnswer)+' Welcome to ' + ques('Harry potter quiz') );
console.log("__________________________________________________")




 






function play(question,answer){
  userAnswer = Readlinesync.question(ques(question) )
  if(userAnswer === answer){
   console.log("you are right 👌");
   console.log("right answer is "+" -> "+ chalk.blue(answer) + "👏");
    
  }
  else {
   console.log("you are wrong 😭");
   console.log("right answer is "+" -> "+ chalk.blue(answer)+"🤷‍♂️");

  }



}

const question = [

 {
    question: "who wrote harry potter series?",

    answer: "J. K. Rowling"

  


}, 
  {
    question: "What spell did Harry use to kill Lord Voldemort?",

    answer: "Expelliarmus"


},
{
    question: "It’s Levi-O-sa, not…",

    answer: "Levi-o-SA"

  


},
{
    question: "Which Patronus belongs to Luna Lovegood?",

    answer: "Rabbit"

  


},
{
    question: "The tears of which animal are the only known antidote to basilisk venom?",

    answer: "Phoenix"

  


},
{
    question: "What position does Harry play on his Quidditch team?",

    answer: "Seeker"

  


},
{
    question: "Who knocks out the troll in the ladies’ bathroom in Harry Potter and the Philosopher’s Stone?",

    answer: "Ron"

  


},
{
    question: "Who poses as Mad-Eye Moody, Harry’s 4th year Defense Against the Dark Arts professor?",

    answer: "Barty Crouch Jr."

  


},
{
    question: "What magical talent does Harry share with Voldemort?",

    answer: "Being a Parselmouth"

  


},

]

for(i=0;i<question.length;i++){

 play(question[i].question,question[i].answer);

 console.log("__________________________________________________")

}

