## Testing
The below outlines the testing that was carried out for each of the major features of the site as well as manual testing of site responsivness of various browsers and devices. 

### Code Validation

- HTML - HTML markup has passed and no errors were found  using the [W3 Validator](https://validator.w3.org/)
- CSS - CSS has been checked and no error has been found using the [Jigsaw W3 Validator](https://jigsaw.w3.org/css-validator/)
- JavaScript - JavsScript has been checked with no errors, but with 25 warnings in regards to ES6 - [JSHint](https://jshint.com/) 

## Testing Against user stories

#### As a user, I want a start button to initialise the game
* The site will first load the title screen. User will be given two options to Start the game or to read the instructions on how to play
* Pressing the Start button will intialise the game and enter the main game section
#### As a user, I want to reset the game whenever I want
* Once a round of the game has been completed the game board will need to be cleared for the next round
* If player has 'Hit' and then pressed 'Stay', the 'Deal' button will be active
* Once player goes through the steps of the round 'Deal' button will be active, once selected the card images will be removed, the score will revert to 0 and the status of the game will go back to 'Let's Play'
#### As a user, I want to have options to Stay or Bet, so that I can decide my next move
* When user starts game, player will be given options to Hit of Stay. 
* In order for the players cards to be dealt, player will press Hit
* If player has completed their turn they will press Stay
* Pressing Stay will initiate the dealers cards to be dealt
* Player will no longer be able to press Hit once Stay has been clicked
#### As a user, I want to know how much my cards add up to, so that I don’t need to add up the total of my cards value myself
* For every card that is dealt the total calue of the card will be presented for the player and dealer
* When user hits 21, no more cards can be dealt and 21 is highlighted in green
* When user busts, no more cards can be dealt and the value will change to BUST! in red
#### As a user, I want to know who has one that round
* Once Stay has been clicked and dealers hand is dealt, the top status will change to Player has won, lost of no winner meaning there was a draw
* The below table will be updated depending on win lose of draw status for that round
#### As a user, I want to know where I am in terms of winning and lossing
* The table will be updated with how many wins losses and draws collected from all of the rounds

Manual Testing 

### Responsive Design Testing 
To test the responsivness of the site I used Google Chrome Inspection tool to test the responsiveness of the site. 

#### Browsers site has been tested on for responsivness
* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

#### Overview with spreadsheet attached
The game was intended to be responsive for mobile, tablet and desktop use.

The below is an overview of the responsive testing results from the above browser sites

<div align="center">
<img src="https://github.com/aprilha3097/BlackJack/blob/master/README_imgs/testing_matrix.png" width="800">
</div>

Bugs?
Fix Applied? 

Functionality Testing 

https://github.com/Andy-Osborne/Dwarf-Match/blob/master/testing.md



- had an issue with defining an array in the flobal scope, but was not able to push variables from my function into the global scope...I had the deck array which was an empty array in the global scope, but when using a function to create the deck and push the cards into the deck array, the function would work wth the deck parameter set, but the deck array alone when calling it the array was still empty. I refactored the code, so that I used a for loop with leaving the deck array in the global scope. Easier to manage the deck array this way.

- I realised, to simplify the coding of the javascript logic of the game, it would be easier to not add the suits as there is fixed graphics for the value cards. The suits do not effect the logic or the outcome of the game. Hence why only the card calues are then defined, these are paired to the name of the png assets