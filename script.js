window.addEventListener("DOMContentLoaded", (event) => {
	const playerText = document.querySelector("#p-choice");
const computerText = document.querySelector("#c-choice");
const resultText = document.querySelector("#result");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {

    player = button.textContent.replace(/\s+/g, '');
    computerTurn();
    playerText.textContent = ` ${player}`;
    computerText.textContent = `${computer}`;
    resultText.textContent = checkWinner();
	console.log(player);
}));

function computerTurn(){

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum){
      case 1:
        computer = "ROCK";
        break;
      case 2:
        computer = "PAPER";
        break;
      case 3:
        computer = "SCISSORS";
        break;
    }
	console.log(computer);
}
function checkWinner(){
    if(player == computer){
      return "Draw!";
    }
    else if(computer == "ROCK"){
      return (player == "PAPER") ? "You Win!" : "You Lose!"
    }
    else if(computer == "PAPER"){
      return (player == "SCISSORS") ? "You Win!" : "You Lose!"
    }
    else if(computer == "SCISSORS"){
      return (player == "ROCK") ? "You Win!" : "You Lose!"
    }
}

});