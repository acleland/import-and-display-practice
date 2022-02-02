// import functions and grab DOM elements
import { dinosaurs } from './dino-data.js';
import { favoriteThings } from './favorite-things-data.js';
import { foods } from './food-data.js';
import { renderDino, renderListItem, renderFood } from './utils.js';

const dinoContainer = document.getElementById('dinoContainer');
const favoriteThingsList = document.getElementById('favoriteThings');
const foodsContainer = document.getElementById('foodsContainer');

for (let dino of dinosaurs) {
    dinoContainer.append(renderDino(dino));
}

for (let thing of favoriteThings) {
    favoriteThingsList.append(renderListItem(thing));
}

for (let food of foods) {
    foodsContainer.append(renderFood(food));
}


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
