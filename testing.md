Code Validation

Testing Against user stories

Manual Testing 

Responsive Design Testing 

Testing using different browsers

Overview with spreadsheet attached

Bugs?
Fix Applied? 

Functionality Testing 

https://github.com/Andy-Osborne/Dwarf-Match/blob/master/testing.md



- had an issue with defining an array in the flobal scope, but was not able to push variables from my function into the global scope...I had the deck array which was an empty array in the global scope, but when using a function to create the deck and push the cards into the deck array, the function would work wth the deck parameter set, but the deck array alone when calling it the array was still empty. I refactored the code, so that I used a for loop with leaving the deck array in the global scope. Easier to manage the deck array this way.

- I realised, to simplify the coding of the javascript logic of the game, it would be easier to not add the suits as there is fixed graphics for the value cards. The suits do not effect the logic or the outcome of the game. Hence why only the card calues are then defined, these are paired to the name of the png assets