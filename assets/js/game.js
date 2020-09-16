//Defining the title screen variables
let titleContainer = document.getElementById("title-container");
let btnStartGame = document.getElementById("btnStart");
let btnGameInstruct = document.getElementById("btnInstruct");
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
let mainGame = document.getElementById("game-container");

//hides the main game container for the title screen to be active
mainGame.style.display = 'none';

// When the user clicks on the button, open the modal
btnGameInstruct.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//When the Start Game button is clicked this will take user to main game page
btnStartGame.addEventListener('click', function () {
  titleContainer.style.display = 'none';
  mainGame.style.display = 'block';
});

////////////////// Main Game Logic

//Defined and added the audio files that will be used in site
const winSound = new Audio("assets/sounds/win.mp3");
const lossSound = new Audio("assets/sounds/lose.mp3");
const hitSound = new Audio("assets/sounds/hit.wav");

//define the cardValues in an array
let cardValues = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];

//array for the the set of cards
var playersCards = [];
let dealersCards = [];

//array of the score values from the cards values that was converted to its numerical values
var playersScore = [];
var dealersScore = [];

//gets total score/sum of the score values
var playersScoreTotal = 0;
var dealersScoreTotal = 0;

//if it is the players turn playerHold will be false
var playerHold = false;

//query selector for the control buttons
document.querySelector('#btnHit').addEventListener('click', hitButtonFunc);
document.querySelector('#btnStay').addEventListener('click', stayButtonFunc);
document.querySelector("#btnDeal").addEventListener('click', dealButtonFunc);

//define the buttons
let hitButton = document.getElementById("btnHit");
let stayButton = document.getElementById("btnStay");
let dealButton = document.getElementById("btnDeal");

//if user presses Hit, users cards will be dealt
function hitButtonFunc() {
  playerHold = false;
  //button will operate only when playersscore is less than 16
  if (playersScoreTotal < 21) {
    //a random card is generated
    let gameCard = randomCard();
    //gameCardImage will take the random card and it will show the cards image
    gameCardImagePlayer(gameCard);
    //updates the total score 
    playersCards.push(gameCard);
    //push the convertedplayers score array into the playersScore array
    playersScore = getPlayersScore();
    //show the players score when the hitButton is clicked
    playersScoreTotal = showPlayersScore();
    changeStatus();
    document.querySelector("#blackjack-result").innerHTML = "Let's Play";
    document.querySelector("#blackjack-result").style.color = "white";
    hitSound.play();
  } 
  //if players score is over 21 / busted than the deal function will start immediately
  playerBusted();
  //disables Deal button, so user will not be able to press while it is their turn
  dealButton.disabled = true;
}

//if player busts than dealers hand is drawn immediately without user having to press stay
function playerBusted() {
  if(playersScoreTotal > 21) {
    stayButtonFunc();
    //stay button it be disabled, so user will should not be pressing as dealers turn is automatically going
    stayButton.disabled = true;
  };
}

//Code for async function to slow down the dealers hand reveals - idea from Clever Programmer - JavaScript Tutorial for Beginners[2020]
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//When player hits stay - this will deal out the dealers cards and update dealers score
async function stayButtonFunc() {
  //it is not the players turn it is the dealers turn
  playerHold = true;

  //while it is not the players turn - dealer will reveal all cards at once
  while (dealersScoreTotal < 16 && playerHold === true) {
    //button will operate only when dealersscore is less than 16
    //get a random card
    let gameCard = randomCard();
    //assign that new random card to its image
    gameCardImageDealer(gameCard);
    //push the random game card to the dealersCards array
    dealersCards.push(gameCard);
    //get dealersScore by converting the dealersCards into numerical values
    dealersScore = getDealersScore();
    //reveal the dealers total score
    dealersScoreTotal = showDealersScore();
    //change status will reveal who won or lost or if it was a draw at the top of screen
    changeStatus();
    //Hit button will be disabled, so user will not be able to deal another card
    hitButton.disabled = true;
    //deal button will be active, so user can press deal once dealers turn is over
    dealButton.disabled = false;
    //the card hit sound will be active
    hitSound.play();
    //will wait 700 ms until while loop loops again
    await sleep(800);
  }
  var winner = determineWinner();
  showWinner(winner);
  addToTable(winner);
}

//Function to randomise the values
function randomCard() {
  const randomIndex = Math.floor(Math.random() * 13);
  return cardValues[randomIndex];
}

//Whenever the HIT button is clicked a card image will be shown
function gameCardImagePlayer(gameCard) {
  //creates a section within the player's box so the image can be shown within the box
  let cardImage = document.createElement('img');
  //the gameCard will match the name of the png and that card will show on the board
  cardImage.src = `assets/images/PNG/${gameCard}.png`;
  document.querySelector('#players-box').appendChild(cardImage);
}

//Whenever the STAY button is clicked a card will be shown
function gameCardImageDealer(gameCard) {
  //create a section within the dealer's box so the image can be shown within the box
  let cardImage = document.createElement('img');
  //the gameCard will match the name of the png and that card will show on the board
  cardImage.src = `assets/images/PNG/${gameCard}.png`;
  document.querySelector('#dealers-box').appendChild(cardImage);
}

//When player presses the dealButton 
function dealButtonFunc() {
  //it is not the players turn
  playerHold = false;

  //define variables to select all images within the players and dealers boxes
  let playersCardImages = document.querySelector("#players-box").querySelectorAll('img');
  let dealersCardImages = document.querySelector("#dealers-box").querySelectorAll('img');

  //for loop to remove all of the images within the boxes at once
  //remove the images within the players box
  for (i = 0; i < playersCardImages.length; i++) {
    playersCardImages[i].remove();
  }
  //remove the images within the dealers box
  for (j = 0; j < dealersCardImages.length; j++) {
    dealersCardImages[j].remove();
  }
  //players and dealers cards to reset to none
  playersCards = [];
  dealersCards = [];

  //total score counter to reset to 0
  playersScoreTotal = 0;
  dealersScoreTotal = 0;

  //players and dealers score spans will be set back to 0
  document.querySelector("#players-result").innerHTML = 0;
  document.querySelector("#dealers-result").innerHTML = 0;

  //players and dealers score spans will be set back to the color white
  document.querySelector("#players-result").style.color = "white";
  document.querySelector("#dealers-result").style.color = "white";

  //the above status will revert back to Let's play
  document.querySelector("#blackjack-result").innerHTML = "Let's play";
  document.querySelector("#blackjack-result").style.color = "white";

  //the Hit button will be active to initiate the players next round of cards
  hitButton.disabled = false;
  //if player busts stay button is disabled, so this activates it again once deal is pressed
  stayButton.disabled = false;
}

//get the players score that converts the string to numeric values
function getPlayersScore() {
  var convertedArray = [];
  //convert the playersCards array items to numeric values 
  for (let i = 0; i < playersCards.length; i++) {
    let converted = getCardNumericValue(playersCards[i]);
    //push the new converted numbers to the playersScore array
    convertedArray.push(converted);
  }
  return convertedArray;
}

//get dealers score that converts the string to numeric values
function getDealersScore() {
  var convertedArray = [];
  //convert the playersCards array items to numeric values 
  for (let i = 0; i < dealersCards.length; i++) {
    let converted = getCardNumericValue(dealersCards[i]);
    //push the new converted numbers to the playersScore array
    convertedArray.push(converted);
  }
  return convertedArray;
}

//function to convert the cardValues from a string to a numeric value that will be added to the score
function getCardNumericValue(toConvertCard) {
  if (toConvertCard === 'Ace') {
    return 1;
  } else if (toConvertCard === 'Two') {
    return 2;
  } else if (toConvertCard === 'Three') {
    return 3;
  } else if (toConvertCard === 'Four') {
    return 4;
  } else if (toConvertCard === 'Five') {
    return 5;
  } else if (toConvertCard === 'Six') {
    return 6;
  } else if (toConvertCard === 'Seven') {
    return 7;
  } else if (toConvertCard === 'Eight') {
    return 8;
  } else if (toConvertCard === 'Nine') {
    return 9;
  } else {
    return 10;
  }
}

//simple function to get the sum of values
function getSum(total, num) {
  return total + num;
}

//function to display the playersscore sum to the HTML span tag
function showPlayersScore() {
  document.getElementById("players-result").innerHTML = playersScore.reduce(getSum, 0);
  return playersScore.reduce(getSum, 0);
}

//function to display the dealersscore sum to the HTML span tag
function showDealersScore() {
  document.getElementById("dealers-result").innerHTML = dealersScore.reduce(getSum, 0);
  return dealersScore.reduce(getSum, 0);
}

//change the status to indicate if score has hit 21 or went over 21 and busted
function changeStatus() {
  //if players score is greater than 21
  if (playersScoreTotal > 21) {
    //change color to red
    document.querySelector("#players-result").style.color = 'Red';
    //change score text to Bust
    document.querySelector("#players-result").innerHTML = 'BUST!';
    //if score is equal to 21 change color to green to indicate 21 has been reached
  } else if (playersScoreTotal === 21) {
    document.querySelector("#players-result").style.color = '#45fc03';
  }

  //change status of dealers score if hit 21 or over 21 and busted
  //if dealers score is greater than 21
  if (dealersScoreTotal > 21) {
    //change color to red
    document.querySelector("#dealers-result").style.color = 'Red';
    //change score text to Bust
    document.querySelector("#dealers-result").innerHTML = 'BUST!';
    //if score is equal to 21 change color to green
  } else if (dealersScoreTotal === 21) {
    document.querySelector("#dealers-result").style.color = '#45fc03';
  }
}

//logic to determine who has won each of the rounds
function determineWinner() {
  var winner;
    //if players score is greater than 21 and players score is less than or equal to 21
  if (playersScoreTotal > dealersScoreTotal && playersScoreTotal <= 21) {
    winner = "playerWins";
    //if players score is less than dealers score and dealers score is less than or equal to 21
  }  else if (playersScoreTotal < dealersScoreTotal && dealersScoreTotal <= 21) {
    winner = "dealerWins";
    //if players score and dealers score is the same and botha re equal to or less than 21
  } else if (playersScoreTotal === dealersScoreTotal && playersScoreTotal <= 21) {
    winner = "wasDraw";
    //if players score is greater than 21
  } else if (playersScoreTotal > 21) {
    winner = "dealerWins";
    //if dealers score is greater than 21 and players score is less than or equal to 21
  } else if (dealersScoreTotal > 21 && playersScoreTotal <= 21) {
    winner = "playerWins";
  } 
  return winner;
}

//displays the winner in the blackjack-result span and updates the text and color
function showWinner(winner) {
  if (winner === "playerWins") {
    document.querySelector("#blackjack-result").style.color = '#45fc03';
    document.querySelector("#blackjack-result").innerHTML = 'YOU WON';
    winSound.play();
  } else if (winner === "dealerWins") {
    document.querySelector("#blackjack-result").style.color = 'Red';
    document.querySelector("#blackjack-result").innerHTML = 'YOU LOST, DEALER WINS';
    lossSound.play();
  } else if (winner === "wasDraw") {
    document.querySelector("#blackjack-result").style.color = 'Blue';
    document.querySelector("#blackjack-result").innerHTML = "NO WINNER";
  }
}

//increment the table scores by 1 by who the winner of the round was
function addToTable(winner) {
  if (winner === "playerWins") {
    document.querySelector("#wins").innerHTML++;
  } else if (winner === "dealerWins") {
    document.querySelector("#losses").innerHTML++;
  } else if (winner === "wasDraw") {
    document.querySelector("#draw").innerHTML++;
  }
}