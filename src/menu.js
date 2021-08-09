function createMenu(){
    const menu = document.createElement('div');
    menu.classList.add('menu');

    menu.appendChild(addMenuItems('pizza1', 'salsiccia', 'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil'));
    menu.appendChild(addMenuItems('pizza2', 'gamberi', 'Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil'));
    menu.appendChild(addMenuItems('pizza3', 'pepe', 'Tomato sauce, Mozarella, Chilli flakes, Olives, Basil'));
    menu.appendChild(addMenuItems('pizza4', 'disgustoso', 'Tomato sauce, Bacon, Pineapple, Olives, Basil'));
    menu.appendChild(addMenuItems('pizza5', 'colorato', 'Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil'));
    menu.appendChild(addMenuItems('pizza6', 'pomodoro', 'Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli'));
    menu.appendChild(addMenuItems('pizza7', 'crema', 'White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil'));
    menu.appendChild(addMenuItems('pizza8', 'carne', 'Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli'));

    return menu;
}

function addMenuItems(source, alternate, ingredients){
    const menuItems = document.createElement('div')
    const img = document.createElement('img');

    menuItems.classList.add('menu-items');
    menuItems.appendChild(img);

    img.src = `./images/pizzas/${source}.jpg`;
    img.alt = alternate;

    const desc = document.createElement('div');
    desc.classList.add('desc');
    menuItems.appendChild(desc);

    const h3 = document.createElement('h3');
    const foodName = alternate.slice(0, 1).toUpperCase() + alternate.slice(1);
    h3.textContent = foodName

    const p = document.createElement('p');
    p.textContent = ingredients;

    desc.appendChild(h3);
    desc.appendChild(p);

    return menuItems;
}

function loadMenu(){
    const main = document.querySelector('#main');

    main.textContent = '';
    main.appendChild(createMenu());
}

export default loadMenu;