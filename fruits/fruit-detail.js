//import { getFruit } from './fetch-utils.js';
import { getFruitById } from '../fetch-utils.js';
import { renderFruit2 } from '../utils.js';

const fruitDetailContainer = document.getElementById('fruit-detail-container');

async function loadData() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const gross = await getFruitById(id);
    const meat = renderFruit2(gross);

    fruitDetailContainer.append(meat);
}
loadData();