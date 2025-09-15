let userscore = 0;
let compscore = 0;
let msg = document.querySelector("#msg");
let scoreuser = document.querySelector("#user-score");
let scorecomp = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
let msgcomp=document.querySelector("#computer-choice");
//computer random choice
const compchoice = () => {
  let option = ["scissors", "rock", "paper"];
  let randomidx = Math.floor(Math.random() * option.length);
  return option[randomidx];
};
//user game
let playgame = (userchoice) => { //arrow function
  const computer = compchoice();
  //check who is winner
  if (userchoice === computer) {
    msg.innerText = "The game was Draw";
    msg.style.color="#7b0f8aff";
    msg.style.backgroundColor="gray";
    msgcomp.innerText= "Computer: "+computer;    //chnage text in htmal tag p
  } else if (                             //if I won the game
    (userchoice === "rock" && computer === "scissors") ||
    (userchoice === "scissors" && computer === "paper") ||
    (userchoice === "paper" && computer === "rock")
    
  ) {     
     msg.style.color="#F7B1AB";
    msg.style.backgroundColor="black";                                    
     msgcomp.innerText="Computer: "+computer;
    msg.innerText = "wahoo you win the game";
    userscore++;
    scoreuser.innerText = userscore;
  } else {                //if computer won the game
     msgcomp.innerText="Computer: "+computer;
      msg.style.color="#df0479ff";
    msg.style.backgroundColor="black";
    msg.innerText = "computer win"; 
    compscore++;
    scorecomp.innerText = compscore;
  }
};
// images hai jo select kare ge
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    

    const choiceID = choice.getAttribute("id");

    playgame(choiceID);// function call
  });
});

