let titleContainer = document.getElementById("title-container");
let btnStartGame = document.getElementById("btnStart");
let btnGameInstruct = document.getElementById("btnInstruct");
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
let mainGame = document.getElementById("game-container");

//mainGame.style.display = 'none';

titleContainer.style.display = 'none';

// When the user clicks on the button, open the modal
btnGameInstruct.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//When the Start Game button is clicked this will take user to main game page
btnStartGame.addEventListener('click', function() {
    titleContainer.style.display = 'none';
    mainGame.style.display = 'block';
});


////////////////// Main Game Logic

//define the cardValues in an array
let cardValues = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two']

let playerWins = [];
let playerLosses = [];
let playerDraws = [];

let playersCards = [];
let dealersCards = [];

var playersScore = [];

//query select the control buttons
document.querySelector('#btnHit').addEventListener('click', hitButton);
//document.querySelector('#btnStay').addEventListener('click', stayButton);
//document.querySelector("#btnDeal").addEventListener('click', dealButton);

function hitButton() {
  //a random card is generated
  let gameCard = randomCard();
  //gameCardImage will take the random card and it will show the cards image
  gameCardImage(gameCard);
  //update the total score 
  playersCards.push(gameCard);

  playersScore = getPlayersScore();
};

//Function to randomise the values
function randomCard() {
  const randomIndex = Math.floor(Math.random() * 13);
  return cardValues[randomIndex];
};

//Whenever the HIT button is clicked a card will be shown
function gameCardImage(gameCard) {
  //create a section within the player's box so the image can be shown within the box
  let cardImage = document.createElement('img');
  //the gameCard will match the name of the png and that card will show on the board
  cardImage.src = `assets/images/PNG/${gameCard}.png`;
  document.querySelector('#players-box').appendChild(cardImage);
}

/*
//When player presses the dealButton
function dealButton() {
  //define variables to select all images within the players and dealers boxes
  let playersCardImages = document.querySelector("#players-box").querySelectorAll('img');
  let dealersCardImages = document.querySelector("#dealers-box").querySelectorAll('img');

  //for loop to remove all of the images within the boxes
  //remove the images within the players box
  for(i = 0; i < playersCardImages.length; i++){
    playersCardImages[i].remove();
  }
//remove the images within the dealers box
  for(j = 0; j < dealersCardImages.length; j++){
    dealersCardImages[j].remove();
  }

  //player and dealers score are set back to be 0
  playersScore = 0;
  dealersScore = 0;

  //players and dealers score spans will be set back to 0
  document.querySelector("#players-result").innerHTML = 0;
  document.querySelector("#dealers-result").innerHTML = 0;

  //the status of the game will revert back to "lets play" after a winner or loser is indicated
  document.querySelector("#blackjack-result").innerHTML = "Test test";
}
*/


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
};

//function to convert the cardValues to the numerical value
function getCardNumericValue(toConvertCard) {
  if(toConvertCard === 'Ace') {
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

/*
//function for if the player wins
function wins() {
  playerWins ++;
  //change the HTML for wins in score table
  document.querySelector("#wins").innerHTML = playerWins;
}

function losses() {
  playerLosses++;
  //change the HTML for losses in score table
  document.querySelector("#losses").innerHTML = playerLosses;
}

function draws() {
  playerDraws++;
  //change the HTML for draws in score table
  document.querySelector("#draw").innerHTML = playerDraws;
}
*/