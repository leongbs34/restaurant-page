function createContact(){
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const img = document.createElement('img');
    img.src = "./images/restaurant-location.png";
    img.alt = "map";

    contact.appendChild(createP('📞 123 456 789'));
    contact.appendChild(createP('🏠 Hollywood Boulevard 42, Los Angeles, USA'));
    contact.appendChild(img);

    return contact;
}

function createP(text){
    const p = document.createElement('p');
    p.textContent = text;

    return p;
}

function loadContact(){
    const main = document.querySelector('#main');

    main.textContent = '';
    main.appendChild(createContact());
}

export default loadContact;