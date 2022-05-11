export function renderFruit(food) {
    const div = document.createElement('div');
    div.classList.add('food');

    const h1 = document.createElement('h1');
    h1.textContent = food.fruit;

    const a = document.createElement('a');
    const img = document.createElement('img');
    img.src = `./assets/${food.type}.jpeg`;
    a.href = `/fruits/?id=${food.id}`;
  

    const p = document.createElement('p');
    p.textContent = `${food.fruit} ia a ${food.color} ${food.type}`;
    
    div.append(h1, img, p,);
    a.append(div);
    return a;
}