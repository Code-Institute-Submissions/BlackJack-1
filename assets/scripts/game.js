// Define variables

//title screen variables
let headerText = document.getElementById("header-text");
let btnStartGame = document.getElementById("btnStart")
let btnGameInstruct = document.getElementById("btnInstruct");

//main game varaiables
let mainGame = document.getElementById("game-container");

//control buttons variables
let controls = document.getElementById("controls");
let dealButton = document.getElementById("btnDeal");
let hitButton = document.getElementById("btnHit");
let stayButton = document.getElementById("btnStay");

//table variables 
let scoreTable = document.getElementById("score-table");

//define card values 
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack',
  'Ten', 'Nine', 'Eight', 'Seven', 'Six',
  'Five', 'Four', 'Three', 'Two', 'One'
];

//hidden elements
mainGame.style.display = 'none';
controls.style.display = 'none';
scoreTable.style.display = 'none';

