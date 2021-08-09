function createHome(){
    const home = document.createElement('div');
    home.classList.add('home');

    const h1 = document.createElement('h1');
    h1.textContent = 'Best pizza in your country';
    home.appendChild(h1);

    home.appendChild(createP('Made with passion since 1908'));

    const img = document.createElement('img');
    img.src = "./images/chef.png";
    img.alt = "chef";
    home.appendChild(img);

    home.appendChild(createP('Order online or visit us!'));

    return home;
}

function createP(text){
    const p = document.createElement('p');
    p.textContent = text;

    return p;
}

function loadHome(){
    const main = document.querySelector('#main');

    main.textContent = '';
    main.appendChild(createHome());
}

export default loadHome;