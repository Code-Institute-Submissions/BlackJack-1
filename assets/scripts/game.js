//Define varaiables 
let mainGame = document.getElementById("game-container");
let footer = document.getElementById('footer');
let btnStartGame = document.getElementById("btnStart")
let titleContainer = document.getElementById("title-container");
let btnGameInstruct = document.getElementById("btnInstruct");
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];

//define card values 
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack',
  'Ten', 'Nine', 'Eight', 'Seven', 'Six',
  'Five', 'Four', 'Three', 'Two'
];

// hidden elements
mainGame.style.display = 'none';
footer.style.display = 'none';

//When the Start Game button is clicked this will take user to main game page
btnStartGame.addEventListener('click', function() {
    titleContainer.style.display = 'none';
    mainGame.style.display = 'block';
    footer.style.display = 'block';
})

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

//Resource that helped with shuffle https://www.programiz.com/javascript/examples/shuffle-card
//Empty array to contain the cards
let deck = [];

//Create a deck of cards
for(let i = 0; i < suits.length; i++) {
    for(let j = 0; j < values.length; j++) {
        let card = {
            Value: values[j],
            Suit: suits[i]
        }; deck.push(card);
    }
}

//Shuffle the cards
for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}

//Display the first 5 cards
for (let i = 0; i < 5; i++){
    console.log(`${deck[i].Value} of ${deck[i].Suit}`);
}




//FUNCTION - get the current total of the hand 
//define variables of totalValue set to 0
//create if statement 

//Ace's will have a value of 1
//if the currentTotal is less than 11 then value of Ace will be 11

//the values of the King Queen and Jack are set to 10


//ON CLICK FUNCTION - when dealButton is clicked
//A deck will be created
//the deck will be shuffled
//The game will begin - a pair of cards will be dealt to player and dealer 
//Both HIt and Stay buttons will be active 
