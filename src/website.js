import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

function createHeader(){
    const header = document.createElement('header')

    const div = document.createElement('div')
    header.appendChild(div);
    div.classList.add('bg');

    const h1 = document.createElement('h1');
    h1.textContent = 'Pepegato';
    div.appendChild(h1);
    div.appendChild(createNavBar());

    return header;
}

function createNavBar(){
    const nav = document.createElement('nav');
    const btnHome = createNavButton('Home');
    const btnMenu = createNavButton('Menu');
    const btnContact = createNavButton('Contact');
    nav.appendChild(btnHome);
    nav.appendChild(btnMenu);
    nav.appendChild(btnContact);

    btnHome.addEventListener('click', loadHome);
    btnMenu.addEventListener('click', loadMenu);
    btnContact.addEventListener('click', loadContact);

    return nav;
}

function createNavButton(text){
    const btn = document.createElement('button');
    btn.classList.add('nav-bar');
    btn.textContent = text;

    return btn;
}

function createMain(){
    const main = document.createElement('div');
    main.setAttribute('id', 'main');

    return main;
}

function initialiseWeb(){
    const content = document.querySelector('#content');

    content.appendChild(createHeader());
    content.appendChild(createMain());

    loadHome();
}

export default initialiseWeb;