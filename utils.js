export function renderDino(dino) {
    const div = document.createElement('div');
    div.classList.add('dinosaur');

    if (dino.image) {
        const img = document.createElement('img');
        img.src = dino.image;
        div.append(img);
    }
    

    const h5 = document.createElement('h5');
    h5.innerText = dino.name;
    div.append(h5);

    const ul = document.createElement('ul');
    
    let li1 = document.createElement('li');
    li1.innerText = `Time period: ${dino.period}`;
    ul.append(li1);

    let li2 = document.createElement('li');
    li2.innerText = `Suborder: ${dino.suborder}`;
    ul.append(li2);

    let li3 = document.createElement('li');
    li3.innerText = `Length: ${dino.length} ft`;
    ul.append(li3);
    
    div.append(ul);
    return div;
}

export function renderListItem(listItem) {
    const li = document.createElement('li');
    li.innerText = listItem;
    return li;
}

export function renderObject(object) {
    const ul = document.createElement('ul');
    for (let key of Object.keys(object)) {
        const li = document.createElement('li');
        li.innerText = `${key}: ${object[key]}`;
        ul.append(li);
    }
    return ul;
}

export function renderFood(food) {
    const div = document.createElement('div');
    div.classList.add('food');
    const h5 = document.createElement('h5');
    h5.innerText = food.name;
    div.append(h5);

    const p = document.createElement('p');
    p.innerText = `Serving size: ${food.serving}`;
    div.append(p);

    const ul = renderObject(food.nutrition);
    div.append(ul);
    return div;
}

export function renderCountry(country) {
    const div = document.createElement('div');
    div.classList.add('country');

    const h5 = document.createElement('h5');
    h5.innerText = country.name;
    div.append(h5);

    const p = document.createElement('p');
    p.innerText = `Continent: ${country.continent}`;
    div.append(p);

    const strong = document.createElement('strong');
    strong.innerText = 'Neighbors:';
    div.append(strong);

    const ul = document.createElement('ul');
    for (let neighbor of country.neighbors) {
        ul.append(renderListItem(neighbor));
    }
    div.append(ul);
    return div;
}

