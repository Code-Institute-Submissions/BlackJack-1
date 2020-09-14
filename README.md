# BlackJack

Milestone Project # 2 - Interactive Frontend Development

Deployed Site: https://aprilha3097.github.io/BlackJack/

Blackjack is a simple game of cards. I created this game to challenge my skillset adapting to the complex rules to playing the game blackjack. I created this application using HTML, CSS, Boostrap and Javascript. 

<div align="center">
<img src="https://github.com/aprilha3097/BlackJack/blob/master/mockups/mobile_responsive_example.png" width="600">
</div>

## UX

## Design Choices
### Colors
Colors are a simple green background resembling the blackjack tables at casinos

### Fonts
- [Cuprum](https://fonts.google.com/specimen/Cuprum?query=cupru)
Source: Google Fonts

## Wireframes 
* The wireframes for the initial layout of the webiste was created using [Adobe XD](https://www.adobe.com/uk/products/xd.html). 
[Title Screen](https://github.com/aprilha3097/BlackJack/blob/master/mockups/Starting%20Page.png)

[Instructions](https://github.com/aprilha3097/BlackJack/blob/master/mockups/Instructions.png)

[Main Game](https://github.com/aprilha3097/BlackJack/blob/master/mockups/Game.png)

## MockUp / Final Designs
* The final mockups were created using [Adobe XD](https://www.adobe.com/uk/products/xd.html).

### Desktop 
#### Title Screen

<img src="https://github.com/aprilha3097/BlackJack/blob/master/mockups/desktop/desktop_titleScreen.png" width="500">

#### Main Game
<img src="https://github.com/aprilha3097/BlackJack/blob/master/mockups/desktop/desktop_mainGame.png" width="500">

### Mobile
#### Title Screen
<div align="center">
<img src="https://github.com/aprilha3097/BlackJack/blob/master/mockups/mobile/mobile_titleScreen.png" width="200">
</div>

#### Main Game
<div align="center">
<img src="https://github.com/aprilha3097/BlackJack/blob/master/mockups/mobile/mobile_mainGame.png" width="200">
</div>

## User Stories: 
As a user, I want a start button to initialise the game
As a user, I want to reset the game whenever I want
As a user, I want to have options to Stay or Bet, so that I can decide my next move
As a user, I want to know how much my cards add up to, so that I don’t need to add up the total of my cards value myself
As a user, I want to know who has one that round
As a user, I want to know where I am in terms of winning and lossing

## Features
### Exitisting Features 
* User will first enter site through the title screen - here user will be able to press Play for How to for further instructions
* User is able to read instructions on how to further play the game with basic details to the game of blackjack
* When user presses Hit a card will be dealt. User will have to continue to press Hit until they are satisifed with their position. 
* User will not longer be able to press Hit once 21 has been reached or they have busted, gone over 21
* When user presses Stay, this ends their turn. User will no longer be able to press Hit
* When Stay is activiated, the dealers cards will all be dealt 
* Score will automactially update once dealers turn is over - indicated by the above text and the below table 
* User will then need to press Deal in order to reset the game, but scores in the below table remain


### Features to be implemented 
* Backend logic of the Ace card should either be 1 or 11. In real Blackjack, Ace can either be 1 or 11 depending on the users choice of where they curently stand in the game. The logic to do this is still in progress, so this is yet to be implemented within the application. 
* Adding sounds for each onclick of the buttons I would like to implement a card dealing sound for each card being dealt
* Adding a music in the background onload of the application during the title screen

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
You can view more in depth of the testing done for this project in the following document: 
[Testing Documentation](https://github.com/aprilha3097/BlackJack/blob/master/testing.md)

## Deployment

This project was developed using VIsual Studio Code and version control done using Git. 
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

    <img src="https://github.com/aprilha3097/BlackJack/blob/master/how_to_deploy_examples/button.png" width="400">

2. To clone the site with HTTPS, copy the following URL

    <img src="https://github.com/aprilha3097/BlackJack/blob/master/how_to_deploy_examples/clone_or_download.png" width="400">

3. Open Terminal and change the directory to where you want the cloned directory to be
4. Type git clone and then paste the previous URL from earlier into your terminal

    <img src="https://github.com/aprilha3097/BlackJack/blob/master/how_to_deploy_examples/git_clone.png" width="500">

5. Press Enter to download all of the material from the respository locally to your machine 

For more information on cloning repositories, go [here](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository)



## Credits 

### Music and Sound Effects 

* The music for the introduction section: 
"Carroll Park (Sting) - John Deley and the 41 Players"
From - [Youtube Audio Library](https://studio.youtube.com/channel/UCMpUi4n6yKE9K8o_VYkM_jA/music?utm_campaign=upgrade&utm_medium=redirect&utm_source=%2Faudiolibrary%2Fmusic)

* Images of Deck of Cards: 
http://acbl.mybigcommerce.com/52-playing-cards/

### Code Credits 
1. The pop up modal for the instructions in the title screen was obtained from [W3Schools How To](https://www.w3schools.com/howto/howto_css_modals.asp)
2. The code for the async function to delay the dealers hand function was obtained from the [Clever Programmer - Javascript Tutorial](https://www.youtube.com/watch?v=Qqx_wzMmFeA)
3. The code to get the sum of an array of numbers obtainer from [W3Schools reduce() Method](https://www.w3schools.com/jsref/jsref_reduce.asp)
4. [Stack Overflor](https://stackoverflow.com/) was a great resource for many difficult problems I've come across during the development of this page  

### Learning Resources 
- [Code Institute](https://codeinstitute.net/about-us/)
- [CodeCademy](https://www.codecademy.com/)
- "JAVASCRIPT & JQUERY Interactive Front-end Web Development" by Jon Duckett
- Colt Steel's [The Web Developer Bootcamp](https://www.udemy.com/course/the-web-developer-bootcamp/)
- [W3Schools](https://www.w3schools.com/)



