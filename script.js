let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
  
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ['rock','paper','scissors'];
    const randIdx =  Math.floor(Math.random() * 3);  
    return options[randIdx];
};

const drawGame = () => {
   
    msg.innerText = "Game was draw. Play again";
    msg.style.backgroundColor ="orange";
;}

 const showWinner = (userWin, userchoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
     
        msg.innerText = `you win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
       
        msg.innerText = `you lose ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
 };
 
 const playGame = (userchoice) =>{
    console.log("user choice = ", userchoice);
    const compChoice = genCompChoice();
    console.log("comp choice = ", compChoice);
   
    if(userchoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userchoice === 'rock'){
            userWin = compChoice === "paper"? false : true;
        }
        else if(userchoice ==="paper"){
            userWin = compChoice === "scissors"? false : true;
        }else{
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin,userchoice,compChoice);
    }
 };

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () =>{
        const userchoice = choice.getAttribute("id");
          playGame(userchoice);
    });
});
