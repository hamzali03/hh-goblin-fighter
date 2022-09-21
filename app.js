/* Imports */

/* Get DOM Elements */
const scoreboard = document.getElementById('scoreboard');
const resultDisplay = document.getElementById('result-display');
const imageContainer = document.getElementById('image-container');
const removeAllDeadBoxersButton = document.getElementById('remove-all-dead-boxers-button');
const boxerHp = document.getElementById('boxer-hp');
const mainBoxer = document.getElementById('main-boxer');

/* State */
let message = '';
let mainBoxer = { hp: 18 };
let boxers = [
    { name: 'tom', hp: 6 },
    { name: 'jake', hp: 5 },
    { name: 'sarah', hp: 4 },
];
/* Events */

/* Display Functions */
function displayBoxerHp() {}

function displayMainBoxer() {
    mainBoxer.textContent = mainBoxer.hp;
}
displayMainBoxer();

// (don't forget to call any display functions you want to run on page load!)
