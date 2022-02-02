export function renderDino(dino) {
    const div = document.createElement('div');
    div.classList.add('dinosaur');

    if (dino.image) {
        const img = document.createElement('img');
        img.src = dino.image;
        div.append(img);
    }
    

    const h5 = document.createElement('h5');
    h5.textContent = dino.name;
    div.append(h5);

    const ul = document.createElement('ul');
    
    let li1 = document.createElement('li');
    li1.textContent = `Time period: ${dino.period}`;
    ul.append(li1);

    let li2 = document.createElement('li');
    li2.textContent = `Suborder: ${dino.suborder}`;
    ul.append(li2);

    let li3 = document.createElement('li');
    li3.textContent = `Length: ${dino.length} ft`;
    ul.append(li3);
    
    div.append(ul);
    return div;
}

export function renderListItem(listItem) {
    const li = document.createElement('li');
    li.textContent = listItem;
    return li;
}

export function renderObject(object) {
    const ul = document.createElement('ul');
    for (let key of Object.keys(object)) {
        const li = document.createElement('li');
        li.textContent = `${key}: ${object[key]}`;
        ul.append(li);
    }
    return ul;
}

export function renderFood(food) {
    const div = document.createElement('div');
    div.classList.add('food');
    const h5 = document.createElement('h5');
    h5.textContent = food.name;
    div.append(h5);

    const p = document.createElement('p');
    p.textContent = `Serving size: ${food.serving}`;
    div.append(p);

    const ul = renderObject(food.nutrition);
    div.append(ul);
    return div;
}

export function renderCountry(country) {
    const div = document.createElement('div');
    div.classList.add('country');

    const h5 = document.createElement('h5');
    h5.textContent = country.name;
    div.append(h5);

    const p = document.createElement('p');
    p.textContent = `Continent: ${country.continent}`;
    div.append(p);

    const strong = document.createElement('strong');
    strong.textContent = 'Neighbors:';
    div.append(strong);

    const ul = document.createElement('ul');
    for (let neighbor of country.neighbors) {
        ul.append(renderListItem(neighbor));
    }
    div.append(ul);
    return div;
}

