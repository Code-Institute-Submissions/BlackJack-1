
//define card values 
//removed suits values as they were not needed in order for game logic to work
//easier to work through the logic of the game
let values = ['Ace', 'King', 'Queen', 'Jack',
  'Ten', 'Nine', 'Eight', 'Seven', 'Six',
  'Five', 'Four', 'Three', 'Two'
];



let dealButton = document.getElementById("btnDeal");
let hitButton = document.getElementById("btnHit");
let stayButton = document.getElementById("btnStay");

let deck = [];
playerCards = [];
dealerCards = [];

dealButton.addEventListener('click', function() {
  //create a deck
  deck = createDeck();
  //shuffle the deck
  shuffleDeck(deck);
  //dealer gets cards
  dealerCards = [nextCard(), nextCard()];
  //player gets cards
  playerCards = [nextCard(), nextCard()];

})

hitButton.addEventListener('click', function() {
  playerCards.push(nextCard());

})

function createDeck() {
  let deck = []
    for (let j = 0; j < values.length; j++) {
      let card = {
        value: values[j]
      }
      deck.push(card);
    }
  }
  return deck;
}

function shuffleDeck(deck) {
  for(let i = 0; i < deck.length; i++) {
    let randomChoice = Math.floor(Math.random() * 52);
    let tmp = deck[randomChoice];
    deck[randomChoice] = deck[i];
    deck[i] = tmp;
  }
}

/*
function nextCard() {
  return deck.shift();
}
*/

//Define varaiables 
let mainGame = document.getElementById("game-container");
let footer = document.getElementById('footer');
let btnStartGame = document.getElementById("btnStart")
let titleContainer = document.getElementById("title-container");
let btnGameInstruct = document.getElementById("btnInstruct");
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];



// hidden elements
mainGame.style.display = 'none';
footer.style.display = 'none';


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


