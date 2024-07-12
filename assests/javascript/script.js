const buttons = document.getElementsById("control");
const playerScore = document.getElementsById("player-score");
const ComputerScore = document.getElementsById("computer-score");
const playerImage = document.getElementsById("player-image");
const ComputerImage = document.getElementsById("computer-image");
const messages = document.getElementsById("messages");
const choices = ["rock", "paper", "scissors"];

for (let button of buttons) {
    button.addEventListener("click", function() {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    })};