# BlackJack

Milestone Project # 2 - Interactive Frontend Development

Deployed Site: https://aprilha3097.github.io/BlackJack/

Blackjack is a simple game of cards. I created this game to challenge my skillset adapting to the complex rules to playing the game blackjack. I created this site using HTML, CSS, Boostrap and Javascript. 

<div align="center">
<img src="https://github.com/aprilha3097/BlackJack/blob/master/mockups/mobile_responsive_example.png" width="600">
</div>

## UX and Elements of User Experiences
### Strategy

This sites obejective is to produce something that is for people who enjoy the game of blackjack that can easily play at home or on a mobile device against a computer dealer. 

### Scope 

Functional Requirements: 
* User able to read instructions and easily return back to the title screen prior to starting the game
* Encourage users to choose specific buttons to correctly follow through the logic of the game
    - Deal button will be disabled when it is users turn
    - Hit button will be disabled when it is dealers turn
    - Hit button will be active after user presses Deal to reset the game board
* Total score will be presented for both the player and dealers card values at head of the page
* Once user or dealer hits 21 or goes over 21 and busts, no more cards will be dealt
* Clicking Deal should clean board back to start of game

Content Requirements: 
* For every backend randomised card value a front end card image will be produced

### Structure

Information Architecture 
* Title screen - buttons are clearly labelled in the middle of the screen - text on the buttons clearly state what users are able to choose from
* When user presses 'How to Play', the instructions appear on a modal window, user can press the 'X' or off of the modal to exit the instructions screen
* The Start button will take users to the main game area once player is ready to play
* User and dealers scores are both at 0 - indiciating a numerical value to be updated
* Status will change once both player and dealer have completed their turns to indicate winner or losser in clear text
* Table at bottom clearly labelled with Wins, Losses and Draws for the users reference of their progress through the game
* As this is a card game, images of cards will represent their actual value
* Buttons are clearly labelled - buttons that are not active/disabled will not be highlighted
* For each card draw a sound effect to let users know what to expect
* A positive or win sound for everytime the player wins
* A negative or lose sound for everytime the player losses

### Skeleton 

#### Wireframes 
* The wireframes for the initial layout of the webiste was created using [Adobe XD](https://www.adobe.com/uk/products/xd.html). 

##### Title Screen
<div align="center">
<img src="https://github.com/aprilha3097/BlackJack/blob/master/mockups/wireframes/Starting%20Page.png" width="500">
</div>

##### Main Game
<div align="center">
<img src="https://github.com/aprilha3097/BlackJack/blob/master/mockups/wireframes/Game.png" width="500">
</div>


#### Colors
Colors are a simple green background resembling the blackjack tables at casinos

#### Fonts
- [Cuprum](https://fonts.google.com/specimen/Cuprum?query=cupru)

Source: Google Fonts

## MockUp / Final Designs
* The final mockups were created using [Adobe XD](https://www.adobe.com/uk/products/xd.html).

### Desktop 
#### Title Screen
<div align="center">
<img src="https://github.com/aprilha3097/BlackJack/blob/master/mockups/desktop/desktop_titleScreen.png" width="500">
</div>

#### Main Game
<div align="center">
<img src="https://github.com/aprilha3097/BlackJack/blob/master/mockups/desktop/desktop_mainGame.png" width="500">
</div>

### Mobile
Mobile version is recommended to be used on a landscape mode. The script 'pleaserotate.min.js' will ask users to rotate screens on certain devices.

#### Title Screen and Main Game
<div align="center">
<img src="https://github.com/aprilha3097/BlackJack/blob/master/mockups/mobile/mobile_titleScreen.png" width="300">        <img src="https://github.com/aprilha3097/BlackJack/blob/master/mockups/mobile/mobile_mainGame.png" width="300">
</div>

### User Stories: 

* As a user, I want a start button to initialise the game
* As a user, I want to reset the game whenever I want
* As a user, I want to have options to Stay or Bet, so thatI can have freedom in choice/options
* As a user, I want to know how much my cards add up to, so that I don’t need to add up the total of my cards value myself
* As a user, I want to know who has one that round
* As a user, I want to know where I am in terms of winning and losing

### Features:

Title Screen: 
* The site will first load the title screen. User will be given two options to Start the game or to read the instructions on How to Play
* Pressing the Start button will intialise the game and enter the main game section
* If player selects 'How to Play' a modal box will appear with the isntructions of the game

Main Game: 
* Player will have three buttons to 'Hit', 'Stay' or 'Deal'
* Player needs to press 'Hit' to initiate the game by dealing the players cards
* Once player has completed their turn, they will press 'Stay' to end their turn and initiaite the Dealers turn - 'Hit' button will be disabled
* Once Dealers turn is over, user will need to press the 'Deal' button. Once selected the card images will be removed, the score will revert to 0 and the status of the game will go back to 'Let's Play'
* For every card that is dealt the total calue of the card will be presented for the player and dealer
* When user hits 21, no more cards can be dealt and 21 is highlighted in green
* When user busts, no more cards can be dealt and the value will change to BUST! in red
* Once Stay has been clicked and dealers hand is dealt, the top status will change to Player has won, lost or no winner meaning there was a draw
* The below table will be updated depending on win, lose, or draw from that round
* The table will be updated with how many wins losses and draws collected from all of the rounds
* For each onclick of the 'Hit' button and for the Dealers cards being drawn a SFX of a card being drawn will play
* For each time the player wins - a winning sound will play after dealers turn
* For each time the player losses - a lossing sound will play after the dealers turn 

### Features to be implemented 
* Backend logic of the Ace card should either be 1 or 11. In real Blackjack, Ace can either be 1 or 11 depending on the users choice of where they curently stand in the game. The logic to do this is still in progress, so this is yet to be implemented within the application
* OR a prompt can be available for when an ACE card is drawn. User can choose between 1 or 11 to be the value they want added to their score
* Add logic so when user goes Bust the dealers cards will get drawn immediately, as user does not need to "stay" as they have already lost

## Technologies Used

1. [HTML5](https://en.wikipedia.org/wiki/HTML5)
    * The markup language used for structuring and presenting content of the site
2. [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
    * The Cascading Style Sheet used to to design the site
3. [Bootstrap](https://getbootstrap.com/)
    * CSS Framework used for building the grid layout and mobile-first responsive design
4. [Javascript](https://en.wikipedia.org/wiki/JavaScript)
    * The programming langauge to program specific behaviors for the application
5. [Google Fonts](https://fonts.google.com/)
    * Sourced fonts required for site
6. [Visual Studio Code](https://code.visualstudio.com/)
    * The code editing sowftware that was used for the creation of this project

## Testing
You can view more in depth of the testing done for this project in the following document: [Testing Documentation](https://github.com/aprilha3097/BlackJack/blob/master/testing.md)

## Deployment

This project was developed using Visual Studio Code and version control done using Git. 
The site has been deployed using Github Pages, which is sourced directly from my Master branch:
https://aprilha3097.github.io/BlackJack/

#### To deploy this site with Github Pages, follow these steps:
1. When accessing Github, scroll to the top of the repository
2. From the top horizontol menu, select <strong>Settings</strong>
3. Select <strong>Options</strong> on the left menu if not already selected
4. Scroll down to the <strong>GitHub Pages</strong> section
5. Under <strong>Source</strong> select the <strong>Master branch</strong>
6. On selecting the <strong>Master branch</strong> the page will automtically refresh, with the site now deployed
7. The link to access the deployed site will be at the top of the <strong>GitHub Pages</strong> section

It can take up to 20 minutes for changes to the site to be published after pushing to GitHub. For more information on deploying your site with GitHub Pages, go [here](https://help.github.com/en/github/working-with-github-pages/creating-a-github-pages-site)

#### Run this site locally

1. On the [repository page](https://github.com/aprilha3097/BlackJack), click on the Clone or Download button

    <img src="https://github.com/aprilha3097/BlackJack/blob/master/README_imgs/button.png" width="400">

2. To clone the site with HTTPS, copy the following URL

    <img src="https://github.com/aprilha3097/BlackJack/blob/master/README_imgs/clone_or_download.png" width="400">

3. Open Terminal and change the directory to where you want the cloned directory to be
4. Type git clone and then paste the previous URL from earlier into your terminal

    <img src="https://github.com/aprilha3097/BlackJack/blob/master/README_imgs/git_clone.png" width="500">

5. Press Enter to download all of the material from the respository locally to your machine 

For more information on cloning repositories, go [here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)


## Credits 

### Music and Sound Effects 
* The sound effect for each card being drawn from [FreeSound.org](https://freesound.org/people/deathpie/sounds/19244/)
* The sound effect for if player wins round from [ZapSplat](https://www.zapsplat.com)
* The sound effect for if player losses round from [ZapSplat](https://www.zapsplat.com)

* Images of Deck of Cards sourceed from [ACBL](http://acbl.mybigcommerce.com/52-playing-cards/)

### Code Credits 
1. The pop up modal for the instructions in the title screen was obtained from [W3Schools How To](https://www.w3schools.com/howto/howto_css_modals.asp)
2. The code for the async function to delay the dealers hand function was obtained from the [Clever Programmer - Javascript Tutorial](https://www.youtube.com/watch?v=Qqx_wzMmFeA)
3. The code to get the sum of an array of numbers was obtained from [W3Schools reduce() Method](https://www.w3schools.com/jsref/jsref_reduce.asp)
4. [Stack Overflow](https://stackoverflow.com/) was a great resource for many difficult problems I've come across during the development of this page  
5. For the animation to ask users to rotate device when on not desktop devices was obtained from [arscan / pleaserotate.js](https://github.com/arscan/pleaserotate.js)

### Learning Resources 
- [Code Institute](https://codeinstitute.net/about-us/)
- [CodeCademy](https://www.codecademy.com/)
- "JAVASCRIPT & JQUERY Interactive Front-end Web Development" by Jon Duckett
- Colt Steel's [The Web Developer Bootcamp](https://www.udemy.com/course/the-web-developer-bootcamp/)
- [W3Schools](https://www.w3schools.com/)
- [Stack Overflow](https://stackoverflow.com/)
- [Clever Programmer - Javascript Tutorial [2020]](https://www.youtube.com/watch?v=Qqx_wzMmFeA)