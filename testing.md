## Testing
The below outlines the testing that was carried out for each of the major features of the site as well as manual testing of site responsivness of various browsers and devices. 

### Code Validation

- HTML - HTML markup has passed and no errors were found  using the [W3 Validator](https://validator.w3.org/)
- CSS - CSS has been checked and no error has been found using the [Jigsaw W3 Validator](https://jigsaw.w3.org/css-validator/)
- JavaScript - JavsScript has been checked with no errors, but with 25 warnings in regards to ES6 - [JSHint](https://jshint.com/) 

## Manual testing of sites functionality

### Title Screen 
1. Title screen loads for every refresh
2. If user presses 'How to Play' the modal pops up with the instructions of the game
    3. User will be able to press the 'X' to exit the modal mode
    4. User will also be able to click off the modal to exit the modal mode
5. When users click 'Start Game' the game will load

### Main Game
1. Scores and table are all 0 and there are no images on board when first entering page

    #### Buttons
    ##### Hit
    1. When user presses 'Hit' one card will be dealt
    2. When card is dealt the users score will update to the cards value
    3. When user presses 'Hit' again, another single card will be shown
    4. Score will update again with the new card value
    5. When user first presses 'Hit' the 'Deal' button will not be active, so user will not be able to reset deck until after theirs and the dealers turn

    ##### Stay
    1. When user completes their round and decides to stay, user can press 'Stay' button to initiate the dealers hands
    2. When 'Stay' is pressed, user will no longer be able to press 'Hit' for another card
    3. User will only need to press 'Stay' once for dealers cards to be dealt 
    4. This will automatically reveal card images and update the dealers card score values
    5. Once dealers hands are complete, the above status will read if player has won, lost or there was a draw
    6. The below table will also be updated with the win, losses or draw of that round

    ##### Deal
    1. When dealers turn is complete and above status and below table are updated Player may press 'Deal' to clear board
    2. The player and dealers score will revert back to 0
    3. The above status will revert back to 'Let's Play' 
    4. The 'Hit' button will be active again
    5. The below table will remain with the current score

2. User will be able to continue to play until they no longer would like to play


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
    - Used an externally created script to give warning/suggest to users to turn devices to landscape more for better viewing. 
    - Other suggested solutions to fix/force the devices view to landscape in CSS was impractical or not UX smart. 
