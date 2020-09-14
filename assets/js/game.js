//Defining the title screen variables
let titleContainer = document.getElementById("title-container");
let btnStartGame = document.getElementById("btnStart");
let btnGameInstruct = document.getElementById("btnInstruct");
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
let mainGame = document.getElementById("game-container");

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

//define the cardValues in an array
let cardValues = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];

//array for the the set of cards
var playersCards = [];
let dealersCards = [];

//array for the scores from the cards values to numerical values
var playersScore = [];
var dealersScore = [];

//gets total score/sum of the score values
var playersScoreTotal = 0;
var dealersScoreTotal = 0;

//it is the players turn
var playerHold = false;

//query selector for the control buttons
document.querySelector('#btnHit').addEventListener('click', hitButtonFunc);
document.querySelector('#btnStay').addEventListener('click', stayButtonFunc);
document.querySelector("#btnDeal").addEventListener('click', dealButtonFunc);

//define the buttons
let hitButton = document.getElementById("btnHit");
let dealButton = document.getElementById("btnDeal");

function hitButtonFunc() {
  playerHold = false;
  //button will operate only when playersscore is less than 16
  if (playersScoreTotal < 21) {
    //a random card is generated
    let gameCard = randomCard();
    //gameCardImage will take the random card and it will show the cards image
    gameCardImagePlayer(gameCard);
    //update the total score 
    playersCards.push(gameCard);
    //push the convertedplayers score array into the playersScore array
    playersScore = getPlayersScore();
    //show the players score when the hitButton is clicked
    playersScoreTotal = showPlayersScore();
    changeStatus();
  }
  dealButton.disabled = true;
}

//Code for async function to slow down the dealers hand reveals - idea from Clever Programmer - JavaScript Tutorial for Beginners[2020]
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//When players hits stay - this will deal out the dealers cards adn score
async function stayButtonFunc() {
  //it is not the players turn
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
    dealersScoreTotal = showDealersScore();
    changeStatus();
    hitButton.disabled = true;
    dealButton.disabled = false;
    await sleep(700);
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

//Whenever the HIT button is clicked a card will be shown
function gameCardImagePlayer(gameCard) {
  //create a section within the player's box so the image can be shown within the box
  let cardImage = document.createElement('img');
  //the gameCard will match the name of the png and that card will show on the board
  cardImage.src = `assets/images/PNG/${gameCard}.png`;
  document.querySelector('#players-box').appendChild(cardImage);
}

//Whenever the HIT button is clicked a card will be shown
function gameCardImageDealer(gameCard) {
  //create a section within the player's box so the image can be shown within the box
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

  //for loop to remove all of the images within the boxes
  //remove the images within the players box
  for (i = 0; i < playersCardImages.length; i++) {
    playersCardImages[i].remove();
  }
  //remove the images within the dealers box
  for (j = 0; j < dealersCardImages.length; j++) {
    dealersCardImages[j].remove();
  }

  //players and dealers cards to reset 
  playersCards = [];
  dealersCards = [];

  //total score counter to reset
  playersScoreTotal = 0;
  dealersScoreTotal = 0;

  //players and dealers score spans will be set back to 0
  document.querySelector("#players-result").innerHTML = 0;
  document.querySelector("#dealers-result").innerHTML = 0;

  //players and dealers score spans will be set back to the color white
  document.querySelector("#players-result").style.color = "white";
  document.querySelector("#dealers-result").style.color = "white";

  document.querySelector("#blackjack-result").innerHTML = "Let's play";
  document.querySelector("#blackjack-result").style.color = "white";

  hitButton.disabled = false;
}

//get the players score
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

//function to convert the cardValues to the numerical value
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
  if (playersScoreTotal > dealersScoreTotal && playersScoreTotal <= 21) {
    winner = "playerWins";
  } else if (playersScoreTotal < dealersScoreTotal && dealersScoreTotal <= 21) {
    winner = "dealerWins";
  } else if (playersScoreTotal === dealersScoreTotal && playersScoreTotal <= 21) {
    winner = "wasDraw";
  } else if (playersScoreTotal > 21) {
    winner = "dealerWins";
  } else if (dealersScoreTotal > 21 && playersScoreTotal <= 21) {
    winner = "playerWins";
  }
  return winner;
}

//display the winner in the blackjack-result span
function showWinner(winner) {

  if (winner === "playerWins") {
    document.querySelector("#blackjack-result").style.color = '#45fc03';
    document.querySelector("#blackjack-result").innerHTML = 'YOU WON';
  } else if (winner === "dealerWins") {
    document.querySelector("#blackjack-result").style.color = 'Red';
    document.querySelector("#blackjack-result").innerHTML = 'YOU LOST, DEALER WINS';
  } else if (winner === "wasDraw") {
    document.querySelector("#blackjack-result").style.color = 'Blue';
    document.querySelector("#blackjack-result").innerHTML = "NO WINNER";
  }
}

//incremeant the table by 1 by who the winner of the round was
function addToTable(winner) {
  if (winner === "playerWins") {
    document.querySelector("#wins").innerHTML++;
  } else if (winner === "dealerWins") {
    document.querySelector("#losses").innerHTML++;
  } else if (winner === "wasDraw") {
    document.querySelector("#draw").innerHTML++;
  }
}