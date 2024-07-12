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

    


const getUseerChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      console.log('Error');
    }
  };
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
      }
  }
  
  const determineWinner = function(userChoice, computerChoice){
    if (userChoice === computerChoice){
      return 'The game is a tie!';
    }
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'The computer won';
      }else{
        return 'You won!';
      }
    }
    if(userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return 'The computer won!';
      }else{
        return 'You Won!';
      }
    }
    if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return 'The computer won!';
      } else{
        return 'You won!';
      }
    }
  }
  const playGame = () =>{
    const userChoice = getUserChoice('scissors');
    const computerChoice = getComputerChoice();
    console.log('You threw:' + userChoice);
    console.log('The computer threw' + computerChoice);
    console.log(determineWinner(userChoice,computerChoice));
  };
  
  playGame()