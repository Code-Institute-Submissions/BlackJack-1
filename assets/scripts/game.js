// Define variables

let userWinScore = 0;
let userLoseScore = 0;
let userDrawScore = 0;
let userWins = document.getElementById("wins");
let userLosses = document.getElementById("losses");
let userDraw = document.getElementById("draw")

//title screen variables
let headerText = document.getElementById("header-text");
let btnStartGame = document.getElementById("btnStart")
let btnGameInstruct = document.getElementById("btnInstruct");
let titleContainer = document.getElementById("title-container");

//main game varaiables
let mainGame = document.getElementById("game-container");

//control buttons variables
let controls = document.getElementById("controls");
let dealButton = document.getElementById("btnDeal");
let hitButton = document.getElementById("btnHit");
let stayButton = document.getElementById("btnStay");

//table variables 
let scoreTable = document.getElementById("score-table");

let instructionsPopUp = document.getElementById("instructions-box");
let footer = document.getElementById('footer');

//define card values 
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack',
  'Ten', 'Nine', 'Eight', 'Seven', 'Six',
  'Five', 'Four', 'Three', 'Two', 'One'
];

// hidden elements
mainGame.style.display = 'none';
footer.style.display = 'none';


//titleContainer.style.display = 'none';

//reset game properties
let startGame = false;
let gameOver = false; 
let playerWon = false;
let dealerCards = [];
let playerCards = [];
let dealerScore = 0;
let playerScore = 0;

//When the Start Game button is clicked this will take user to main game page
btnStartGame.addEventListener('click', function() {
    titleContainer.style.display = 'none';
    mainGame.style.display = 'block';
    footer.style.display = 'block';
})

//When the Deal button is clicked, this will initalise the game
dealButton.addEventListener('click', function() {
    deck = creatNewDeck();
})

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

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

//Function to create a new deck
function createNewDeck () {
    //Create a new array for the deck
    let deck = [];
    //Loop through the suits array
    for (let i = 0; i < suits.length; i++) {
        //Loop through the values array
        for(let j = 0; j < values.length; j++) {
            //Define card to be the suits and values
            let card = {
                suit: suits[i],
                value: values[j]
            }
            //Push the card results to create a new deck array
            deck.push(card);
        }
    }
    //Call function to create a new deck when a new game starts
    return deck;
}

console.log(createNewDeck());

//defining the card numerical values
function cardValues(card) {
    switch(card.value){
        case 'Ace': return 1;
        case 'Two': return 2;
        case 'Three': return 3;
        case 'Four': return 4;
        case 'Five': return 5;
        case 'Six': return 6;
        case 'Seven': return 7;
        case 'Eight': return 8;
        case 'Nine': return 9;
        defult: return 10;
    }
}

//Function for when user wins
function win() {
    //user score will go up by one when user wins
    userWinScore++;
    //change the HTML text to reflect new userscore
    userWins.innerHTML = userWinScore;
}


//Function for when user losses
function lose() {
    //user losses score will go up by one when user losses
    userLoseScore++;
    //change the HTML text to reflect new userscore
    userLosses.innerHTML = userLoseScore;
}

//Function for when user and dealer draw
function draw(){
    //draw score will go up by one when score is tied
    userDrawScore++;
    //change the HTML to reflect the new draw score
    userDraw.innerHTML = userDrawScore;
}



//FUNCTION - get the current total of the hand 
//define variables of totalValue set to 0
//create if statement 

//Ace's will have a value of 1
//if the currentTotal is less than 11 then value of Ace will be 11

//the values of the King Queen and Jack are set to 10


//ON CLICK FUNCTION - when dealButton is clicked
//The game will begin - a pair of cards will be dealt to player and dealer 
//Both HIt and Stay buttons will be active 


//ON CLICK FUNCTION - when stayButton is clicked 