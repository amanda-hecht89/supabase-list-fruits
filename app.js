// import functions and grab DOM elements
import { getFruit } from './fetch-utils.js';
import { food } from './fruit.js';
import { renderFruit } from './utils.js';
// let state
const fruitEl = document.getElementById('food');
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
  for (let fruit of food) {
    const fruitdiv = renderFruit(fruit);
    fruitEl.append(fruitdiv);
    getFruit(),
  }