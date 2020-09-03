Blackjack logic:

* Buttons:
1. player HITS
    1. the player will be given a new RANDOM card
    2. the image of the card corresponding to the RANDOM cards value will be shown
    3. the backend score will be updated to reflect the total score for the player
    4. the front end score will be updated on the table of the new score

2. player STAYS
    1. Dealers cards will be played
    2. If dealers score

3. player DEALS
    1. the table will clear of all cards
    2. the score will revert back to 0 


* How to win, lose or draw: 
If players score is = 21 player wins
If players score is greater than the dealers score but less than or equal to 21 then player wins

If players score is above 21 player losses
If players score is below dealers score and dealers score is less than 21 then player losses

if players score and dealers score are both equal to eachother and under 21 then draw

Chronological Order of Functions:
1. player HITS
2. randomCard is generated from the cardValues
3. A randomCard is presented 
4. the randomCard will be represented by the cardsImage value
5. the total score is updated
6. the score is presented at the top of the page
7. player can hit, but once over 21 the player will bust
8. total score span will indicate when busted
9. player will hit stand 
10. Dealers cards will be played
11. Dealer will play until value is over at least 16 (for practicality)
12. Dealers turn will end when dealer plays over 16 busts or hits 21
13. If player wins, losses or draws this will be indicated at the top
14. When player hits DEAL the table will reset 
15. The table that keeps track of the scores will be updated
16. The score for both player and dealer will go back to 0

- when player hits Stand - the player should not be able to press Hit of Deal during the dealers turn
- when player hits Deal after the dealers turn then the hit button will be active again