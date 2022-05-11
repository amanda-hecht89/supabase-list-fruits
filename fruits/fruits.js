
import { getFruit } from '../fetch-utils.js';
import { renderFruit } from '../utils.js';

const fruitDetailContainer = document.getElementById('fruit-detail-container');

async function loadData() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const gross = await getFruit(id);
    const meat = renderFruit(gross);

    fruitDetailContainer.append(meat);
}

loadData();
