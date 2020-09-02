
//define card values and mapped values to correct numberical values
//removed suits values as they were not needed in order for game logic to work
//easier to work through the logic of the game
let cards = {
  'cardValues': ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'],
  'cardMapping': {'Ace': [1, 11], 'King': 10, 'Queen': 10, 'Jack': 10, 'Ten': 10, 'Nine': 9, 'Eight': 8, 'Seven': 7, 'Six': 6, 'Five': 5, 'Four': 4, 'Three': 3, 'Two': 2},
};

//query select the control buttons
document.querySelector('#btnHit').addEventListener('click', hitButton())
document.querySelector('#btnStay').addEventListener('click', stayButton());
document.querySelector("#btnDeal").addEventListener('click', dealButton());


dealButton.addEventListener('click', function() {
  

})

hitButton.addEventListener('click', function() {


})

function shuffleDeck(deck) {
  for(let i = 0; i < deck.length; i++) {
    let randomChoice = Math.floor(Math.random() * 52);
    let tmp = deck[randomChoice];
    deck[randomChoice] = deck[i];
    deck[i] = tmp;
  }
}

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


