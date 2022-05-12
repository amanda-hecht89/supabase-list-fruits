


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
    p.textContent = `${food.name} ia a ${food.color} ${food.type}`;
    
    div.append(a, img, p,);
    a.append(h1);
    return div;
}
