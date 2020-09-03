
//define the cardValues in an array
const cardValues = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two']


//query select the control buttons
document.querySelector('#btnHit').addEventListener('click', hitButton);
document.querySelector('#btnStay').addEventListener('click', stayButton);
document.querySelector("#btnDeal").addEventListener('click', dealButton);

function hitButton() {
  let gameCard = randomCard();
  gameCardImage(gameCard);
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
function getCardValue() {
  if(card === 'Ace') return 1;
  if(card === 'King') return 10;
  if(card === 'Queen') return 10;
  if(card === 'Jack') return 10;
  if(card === 'Ten') return 10;
  if(card === 'Nine') return 9;
  if(card === 'Eight') return 8;
  if(card === 'Seven') return 7;
  if(card === 'Six') return 6;
  if(card === 'Five') return 5;
  if(card === 'Four') return 4;
  if(card === 'Three') return 3;
  if(card === 'Two') return 2;
};
*/

/*
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
    footer.style.display = 'block';
});
*/

