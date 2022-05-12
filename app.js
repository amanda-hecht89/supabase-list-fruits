// import functions and grab DOM elements
import { getFruit } from './fetch-utils.js';
import { renderFruit } from './utils.js';
// let state
const fruitsEl = document.getElementById('fruits');

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
async function loadData() {
    const fruits = await getFruit();
   // const fruitsEl = document.querySelector('fruitEl');
    
    for (let fruit of fruits) {
        const fruitdiv = renderFruit(fruit);
        fruitsEl.append(fruitdiv);
    }

}

loadData();
