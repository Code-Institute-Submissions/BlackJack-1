## Testing
The below outlines the testing that was carried out for each of the major features of the site as well as manual testing of site responsivness on various browsers and devices. 

### Code Validation

- HTML - HTML markup has passed and no errors were found using the [W3 Validator](https://validator.w3.org/)
- CSS - CSS has been checked and no error has been found using the [Jigsaw W3 Validator](https://jigsaw.w3.org/css-validator/)
- JavaScript - JavsScript has been checked with no errors, but with 25 warnings in regards to ES6 - [JSHint](https://jshint.com/) 

### Manual testing against the User Stories

* As a user, I want a start button to initialise the game
    1. When user clicks 'Start Game' the game will load

* As a user, I want to read instructions on how to play the game as well as the rules to Blackjack
    1. User can click the 'How to Play' button which will open a modal window with set of game instructions
    2. User will be able to press the 'X' to exit the modal window
    3. User will also be able to click off the modal to exit the modal window

* As a user, I want to be able to press 'Hit' of 'Stay' to start and/or complete my hand
    1. Hit
        1. When user presses 'Hit' one card will be dealt
        2. User will be able to continue to press 'Hit' until user finishes round and wants to stay
        3. User will not be able to press 'Hit' if value is 21 or if value exceeds 21
        4. When user first presses 'Hit' the 'Deal' button will not be active, so user will not be able to reset board until after both player and dealer have completed their hands

    2. Stay
        1. When user completes their round and decides to stay, user can press the 'Stay' button to initiate the dealers hand
        2. When 'Stay' is pressed, user will no longer be able to press 'Hit' for another card
        3. User will only need to press 'Stay' once for dealers cards to be dealt 

    3. If user busts on their turn dealers cards will automatically initiate without needing to click 'Stay'
        1. The 'Stay' button will be disabled as the dealers cards are being dealt

* As a user, I want to reset the game board once the round has finished to continue to play
    1. Deal
        1. When the dealers turn is complete Player may press 'Deal' to clear board
        2. The player and dealers score will revert back to 0
        3. The above status will revert back to 'Let's Play' 
        4. The 'Hit' button will be active again
        5. The below table will not change and instead keeps the current summary of all of the rounds

* As a user, I want to know how much my cards add up to, so that I don’t need to add up the total value myself
    1. On each onclick of the 'Hit' button the players score will update to the current value of the players hand
    2. For everytime the dealers card is dealt, the dealers score will update to the curernt value of the dealers hand

* As a user, I want to know if I or the dealer has won the round after the dealers turn is complete
    1. Once dealers turn is complete, the above status will read if player has won, lost or if there was a draw

* As a user, I want to see the summary of the rounds winnings and lossings in a table
    1. Once the dealers turn is complete, the below table will increment by 1 under win, losses or draws depending on the outcome of the round
    2. The table will not revert to 0 for everytime the player presses 'Deal', but it will always provide the summary of all of the rounds

### Responsive Design Testing 
To test the responsivness of the site I used Google Chrome Inspection tool. I also used my own devices that I had to test the deployed site for responsiveness. 

#### Browsers site that has been tested on for responsivness
* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

#### Overview with spreadsheet attached
The game was intended to be responsive for mobile, tablet and desktop use.

The below is an overview of the responsive testing results from the above browser sites

<div align="center">
<img src="https://github.com/aprilha3097/BlackJack/blob/master/README_imgs/testing_matrix.png" width="1000">
</div>

### Bugs and Fixes

#### Bug:
- Was unable to apply 52 card images to the card values as well as creating a simple logic to "shuffle" the deck.
#### Fix Applied: 
- Instead, to simplfy the coding and the logic, I instead used fixed card images of the 13 major values and randomized or "shuffled" through 13 rather than 52. 

#### Bug:
- The card images are too small to view on mobile devices on portrait mode. 
#### Fix Applied:
- Used an externally created script to give warning/suggest to users to turn devices to landscape mode for better viewing. 
- Other suggested solutions to fix/force the devices view to landscape in CSS, but this was impractical or not UX smart. 