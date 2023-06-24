let compChoice;
let playerChoice;
let countPlayer = 0;
let countComp = 0;

for (let i = 0; i < 5; i++){
function game(i){
function getPlayerChoice(){
    playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    return (playerChoice);
        
}
getPlayerChoice();

function getComputerNumber(){
    let compNumb = Math.floor(Math.random() * 3);
    if (compNumb == 0) {
        compChoice = "Rock";
    }
    else if (compNumb == 1) {
        compChoice = "Paper";
    }   
    else if (compNumb == 2) {
        compChoice = "Scissors";
    }
    return (compChoice)
}
getComputerNumber();

function determineWin (){
    if (playerChoice == "rock" && compChoice == "Rock") {
        alert ("Rock v Rock, Play again!")
    }
    else if (playerChoice == "rock" && compChoice == "Paper") {
        document.getElementById("countComp").innerHTML = countComp;
        countComp += 1;
        alert ("Rock v Paper, You lose!")
    }
    else if (playerChoice == "rock" && compChoice == "Scissors") {
        document.getElementById("countPlayer").innerHTML = countPlayer;
        countPlayer += 1;
        alert ("Rock v Scissors, You win!")
    }
    else if (playerChoice == "paper" && compChoice == "Rock") {
        alert ("Paper v Rock, You win!")
        document.getElementById("countPlayer").innerHTML = countPlayer;
        countPlayer += 1;
    }
    else if (playerChoice == "paper" && compChoice == "Paper") {
        alert ("Paper v Paper, Play again!")
    }
    else if (playerChoice == "paper" && compChoice == "Scissors") {
        alert ("Paper v Scissors, You lose!")
        document.getElementById("countComp").innerHTML = countComp;
        countComp += 1;
    }
    else if (playerChoice == "scissors" && compChoice == "Rock") {
        alert ("Scissors v Rock, You lose!")
        document.getElementById("countComp").innerHTML = countComp;
        countComp += 1;
    }
    else if (playerChoice == "scissors" && compChoice == "Paper") {
        alert ("Scissors v Paper, You win!")
        document.getElementById("countPlayer").innerHTML = countPlayer;
        countPlayer += 1;
    }
    else if (playerChoice == "scissors" && compChoice == "Scissors") {
        alert ("Scissors v Scissors, Play again!")
    }
}

determineWin()


}
game();

}