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
