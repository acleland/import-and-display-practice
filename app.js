// import functions and grab DOM elements
import { dinosaurs } from './dino-data.js';
import { favoriteThings } from './favorite-things-data.js';
import { foods } from './food-data.js';
import { countries } from './country-data.js';

import { renderDino, renderListItem, renderFood, renderCountry } from './utils.js';

const dinoContainer = document.getElementById('dinoContainer');
const favoriteThingsList = document.getElementById('favoriteThings');
const foodsContainer = document.getElementById('foodsContainer');
const countriesContainer = document.getElementById('countriesContainer');

for (let dino of dinosaurs) {
    dinoContainer.append(renderDino(dino));
}

for (let thing of favoriteThings) {
    favoriteThingsList.append(renderListItem(thing));
}

for (let food of foods) {
    foodsContainer.append(renderFood(food));
}

for (let country of countries) {
    countriesContainer.append(renderCountry(country));
}

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
