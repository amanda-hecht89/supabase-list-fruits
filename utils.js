


export function renderFruit(food) {
    const div = document.createElement('div');
    div.classList.add('fruits');
    console.log(renderFruit);
    const h1 = document.createElement('h1');
    h1.textContent = food.name;

    const img = document.createElement('img');
    img.src = food.photo;

    const a = document.createElement('a');
    a.href = `./fruits/?id=${food.id}`;

    const p = document.createElement('p');
    p.textContent = `${food.name} is a ${food.color} ${food.type}`;

    const p2 = document.createElement('p2');
    p2.textContent = `${food.description}`;
    
    div.append(a, img);
    a.append(h1);
    return div;
}





export function renderFruit2(food) {
    const div = document.createElement('div');
    div.classList.add('fruits');
    console.log(renderFruit);
    const h1 = document.createElement('h1');
    h1.textContent = food.name;

    const img = document.createElement('img');
    img.src = food.photo;

    const p = document.createElement('p');
    p.textContent = `${food.name} is a ${food.color} ${food.type}`;

    const p2 = document.createElement('p2');
    p2.textContent = `${food.description}`;
    
    div.append(h1, img, p, p2);
    return div;
}
